import { Link, animateScroll as scroll } from 'react-scroll'
import styles from '../styles/Home.module.css'

export default function Navbar () {
    return (
      <nav className={styles.nav} id='navbar'>
        <div className={styles.nav-content}>
          <p>section link here</p>
          <ul className={styles.nav-items}>
            <li className={styles.nav-item}>
            <Link
                activeClass='active'
                to='/'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
              Home
            </Link></li>

            <li className='nav-item'>
            <Link
                activeClass='active'
                to='/about'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
              About Me
            </Link></li>

            <li className='nav-item'>
            <Link
                activeClass='active'
                to='/project'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
              Section 3
            </Link></li>

            <li className='nav-item'>
            <Link
                activeClass='active'
                to='section4'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
              Section 4
            </Link></li>

            <li className="nav-item">Section 5</li>
          </ul>
        </div>
      </nav>
    );
  }
