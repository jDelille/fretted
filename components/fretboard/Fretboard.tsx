"use client";

import React from "react";
import * as Tone from "tone";
import styles from "./Fretboard.module.scss";

type FretboardProps = {};

const Fretboard: React.FC<FretboardProps> = () => {
  const synth = new Tone.Synth().toDestination();

  const playNote = () => {
    synth.triggerAttackRelease("C4", "8n");
  };

  return (
    <div className={styles.fretboardContainer}>
      <div className={styles.fretboard}>
        {Array.from({ length: 6 }, (_, string) => {
          const frets = Array.from({ length: 24 }, (_, fret) => {
            return (
                <div className={styles.fret}>
                    <button className={styles.note}></button>
                </div>
            )
          })
          return (
            <div className={styles.string} key={string + 1}>
                {frets}
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Fretboard;
