import React from 'react'
import Images from '../img/Images'
import styles from "../styles/modules/navbar.module.scss"
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';




const Navbar = () => {
  const [mobile, setMobile] = useState(false);

  const handleMobile = () => {
    setMobile((prev) => !prev);
  };
  return (
    <>
      <nav>
        <a href="/home"><img src={Images.logo} className="logo" alt="logo" /></a>
        <div className={styles.hamburger} onClick={handleMobile}>
          <MenuIcon />
        </div>
        <div className={styles.link}>
          <div className={styles.side}>
            <i className={styles.closeicon}>
              <CloseIcon />
            </i>
            <div className={styles.nav_list}>
              <li>Features<span> <KeyboardArrowDownIcon /></span></li>
              <li>Company<span><KeyboardArrowDownIcon /></span></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">About</a></li>
            </div>
          </div>
          <div className={styles.reg}>
            <li><a href="#">Login</a></li>
            <button>Register</button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar