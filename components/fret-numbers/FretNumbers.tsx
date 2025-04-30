import React from 'react';
import styles from './FretNumbers.module.scss';
import fretboardStore from '@/store/fretboardStore';

type FretNumbersProps = {};

const FretNumbers: React.FC<FretNumbersProps> = () => {
  const { numberOfFrets } = fretboardStore;

  return (
    <div className={styles.fretNumbers}>
      {Array.from({ length: numberOfFrets }, (_, index) => (
        <div key={index} className={styles.fretNumber}>
          {index} 
        </div>
      ))}
    </div>
  );
};

export default FretNumbers;