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
      <nav className={styles.nav}>
        <a href="/home"><img src={Images.logo} className="logo" alt="logo" /></a>
        <div className={`${mobile ? styles.mobile_links : styles.links}`}>
          <div className={styles.icon} onClick={handleMobile}>
            {mobile ? <CloseIcon /> : <MenuIcon />}
          </div>
          <div className={`${mobile ? styles.mobile_link : styles.link}`}>
            <div className={styles.nav_list}>
              <li>Features<span> <KeyboardArrowDownIcon /></span></li>
              <li>Company<span><KeyboardArrowDownIcon /></span></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">About</a></li>
            </div>
            <div className={styles.reg}>
              <button className={styles.login}>Login</button>
              <button className='register'>Register</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar