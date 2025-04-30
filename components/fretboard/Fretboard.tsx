"use client";

import React, { useEffect, useRef } from "react";
import * as Tone from "tone";
import styles from "./Fretboard.module.scss";
import fretboardStore from "@/store/fretboardStore";
import { Notes } from "@/constants/notes";
import { Scale, Interval } from "tonal";
import { Scales } from "@/constants/scales";
import { instrument, InstrumentName } from 'soundfont-player';
import FretNumbers from "../fret-numbers/FretNumbers";

type FretboardProps = {};

const Fretboard: React.FC<FretboardProps> = () => {
  const {
    numberOfFrets,
    numberOfStrings,
    rootNote,
    scale,
    tuningIndex,
    position,
    isRootNoteVisible,
    isTriadVisible,
    isPowerChordVisible,
    sound
  } = fretboardStore;
  const { tunings } = Notes;

  const notes = fretboardStore.areNotesFlat()
    ? Notes.notesFlat
    : Notes.notesSharp;

  const synthRef = useRef<Tone.Synth | null>(null);

  useEffect(() => {
    synthRef.current = new Tone.Synth().toDestination();
  }, []);

  function playNote(note: string, fret: number, string: number) {
    const octave = Math.floor(fret / 12) + 4 - (string - 2);
    instrument(new AudioContext(), sound as InstrumentName).then(
      (guitar) => {
        guitar.play(note + octave);
      }
    );
  }

  const triadNotes = [1, 3, 5].map(Scale.degrees(`${rootNote} ${scale}`));
  const powerChordNotes = [1, 5].map(Scale.degrees(`${rootNote} ${scale}`));

  const convertNoteName = (note: string) => {
    if (note.includes("bb")) {
      const noteIndex =
        (notes.indexOf(note.charAt(0)) - 1 + notes.length) % notes.length;
      return notes[noteIndex];
    }
    return note;
  };

  const getNoteClassName = (note: string, isNoteInScale: boolean): string => {
    if (!isNoteInScale) return styles.inactiveNote;
    if (note === rootNote && isRootNoteVisible) return styles.rootNote;
    if (triadNotes.includes(note) && isTriadVisible) return styles.triadNote;
    if (powerChordNotes.includes(note) && isPowerChordVisible)
      return styles.powerChordNote;
    return styles.note;
  };

  return (
    <div className={styles.fretboardContainer}>
      <FretNumbers />
      <div className={styles.fretboard}>
        {Array.from({ length: numberOfStrings }, (_, string) => {
          const frets = Array.from({ length: numberOfFrets }, (_, fret) => {
            const noteIndex = (fret + tunings[tuningIndex].tuning[string]) % 12;
            const noteName = convertNoteName(notes[noteIndex]);
            const scaleName = `${rootNote} ${scale}`;
            const isNoteInScale = Scale.get(scale).notes.includes(noteName);
            const scaleData = Scales.scales.filter(
              (scaleName) => scaleName.key === Scale.get(scale).tonic
            );
            const scalePosition = position - 1;

            return (
              <div className={styles.fret} key={fret + 1}>
                <button
                  className={getNoteClassName(
                    noteName,
                    Scale.get(scaleName).notes.includes(noteName)
                  )}
                  onClick={() => playNote(notes[noteIndex], fret, string)}
                  
                >
                  {notes[noteIndex]}
                </button>
              </div>
            );
          });
          return (
            <div className={styles.string} key={string + 1}>
              {frets}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Fretboard;
