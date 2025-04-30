import { makeAutoObservable } from "mobx";
import { Scale } from "tonal";

class FretboardStore {
  rootNote: string;
  scale: string;
  tuning: string;
  tuningIndex: number;
  position: number;
  numberOfFrets: number;
  numberOfStrings: number;
  isTriadVisible: boolean;
  isRootNoteVisible: boolean;
  isPowerChordVisible: boolean;
  sound: string;

  constructor() {
    makeAutoObservable(this);
    this.rootNote = "A";
    this.scale = "major pentatonic";
    this.tuning = "standard";
    this.tuningIndex = 0;
    this.position = 6;
    this.numberOfFrets = 24;
    this.numberOfStrings = 6;
    this.isTriadVisible = true;
    this.isRootNoteVisible = true;
    this.isPowerChordVisible = false;
    this.sound = 'acoustic_guitar_nylon';

  }

  setRootNote = (note: string) => {
    this.rootNote = note;
  };

  setScale = (scale: string) => {
    this.scale = scale;
  };

  setNumberOfFrets = (numOfFrets: number) => {
    this.numberOfFrets = numOfFrets;
  };

  setNumberOfStrings = (numOfStrings: number) => {
    this.numberOfStrings = numOfStrings;
  };

  toggleTriadVisibility = (boolean: boolean) => {
    this.isTriadVisible = boolean;
  };

  toggleRootNoteVisibility = (boolean: boolean) => {
    this.isRootNoteVisible = boolean;
  };

  togglePowerChordVisibility = (boolean: boolean) => {
    this.isPowerChordVisible = boolean;
  };

  getScaleName = (key: string, currentScale?: string) => {
    if (!currentScale) {
      const scaleName = key
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      return scaleName;
    }

    const { type } = Scale.get(`${key} ${this.scale}`);
    const capitalizedType = type
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    return capitalizedType;
  };

  areNotesFlat() {
    const { notes } = Scale.get(`${this.rootNote} ${this.scale}`);
    const flatSymbol = "b";
    return notes.some((note) => note.includes(flatSymbol));
  }

  isPositionActive() {
    return this.position !== 6;
  }
}

const fretboardStore = new FretboardStore();
export default fretboardStore;
