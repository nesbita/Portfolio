import { Link, animateScroll as scroll } from 'react-scroll'
import styles from '../styles/Home.module.css'

export default function Navbar () {
    return (
      <nav className={styles.nav} id='navbar'>
        <div className={styles.navContent}>
          <ul className={styles.navItems}>
            <li className={styles.navItem}>
            <Link
                activeClass='active'
                to='Home'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
              Home
            </Link></li>

            <li className='nav-item'>
            <Link
                activeClass='active'
                to='About'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
              About Me
            </Link></li>

            <li className='nav-item'>
            <Link
                activeClass='active'
                to='Project'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
              My Projects
            </Link></li>
          </ul>
        </div>
      </nav>
    );
  }
