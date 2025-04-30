import React from 'react';
import styles from './Navbar.module.scss';
import { BellIcon, FireIcon, UserIcon } from '@/icons';

type NavbarProps = {
 
 }
const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>Fretted</div>
      <ul className={styles.links}>
            <li className={styles.link}>
                Home
            </li>
            <li className={styles.link}>
                Explore
            </li>
            <li className={styles.link}>
                Learn
            </li>
            <li className={styles.link}>
                Community
            </li>
            <li className={styles.link}>
                About
            </li>
        </ul>

        <div className={styles.secondaryLinks}>
            <div className={styles.icon}>
                <BellIcon size={21} color='gray' />
            </div>
            <div className={styles.icon}>
                <FireIcon size={26} color='gray' />
            </div>
            <div className={styles.icon}>
                <UserIcon size={22} color='gray' />
            </div>

            <button>Premium</button>
        </div>
    </div>
  );
};

export default Navbar;