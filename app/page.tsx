"use client";
import * as Tone from "tone";

export default function Home() {

  const synth = new Tone.Synth().toDestination();

  const playNote = () => {
    synth.triggerAttackRelease("C4", "8n");
  }

  return (
    <div>
      <button onClick={playNote}> click </button>
    </div>
  );
}
