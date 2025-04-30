"use client";

import React, { useState } from 'react';
import styles from './FretboardControls.module.scss';
import { Notes } from '@/constants/notes';
import fretboardStore from '@/store/fretboardStore';
import { observer } from "mobx-react-lite";

type KeysProps = {};

const Keys: React.FC<KeysProps> = () => {

  const [isOpen, setIsOpen] = useState(false);

  const {rootNote} = fretboardStore;

  const keys = Notes.keys;

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  }

  const handleKeyClick = (key: string) => {
    fretboardStore.setRootNote(key)
  }

  const keyClassName = (key: string) => {
    if ( rootNote === key ) return styles.active;
    if ( rootNote !== key ) return styles.inactive;
  }

  return (
    <div className={styles.keys}>
      <p>Root note: A</p>
      <p>Scale: Major Pentatonic</p>

    </div>
  );
};

export default observer(Keys);