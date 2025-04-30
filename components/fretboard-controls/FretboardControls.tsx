import React from 'react';
import styles from './FretboardControls.module.scss';
import Keys from './Keys';

type FretboardControlsProps = {
 
 }
const FretboardControls: React.FC<FretboardControlsProps> = () => {
  return (
    <div className={styles.fretboardControlsContainer}>
      <div className={styles.controls}>
        <Keys />
      </div>
    </div>
  );
};

export default FretboardControls;