import styles from '../styles/Project.module.css'
import Image from 'next/image'
import nw from '../public/nw.jpg'
import mm from '../public/mm.jpeg'
import f from '../public/f.jpeg'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import DescriptionIcon from '@material-ui/icons/Description';
import { Public } from '@material-ui/icons'

export default function Project () {
    return(
        <div>
           <Section
          title='My Projects'
          subtitle={project}
          dark={true}
          id="Project"
        />
            <div className={styles.projectContainer}>
            <div className={styles.natureWalk}>
                <h2>Nature Walk</h2>
                <Image src={nw} className={styles.nw} width='400px' height='200px' alt='Trees during Fall'/>
            </div>
            
            <div className={styles.marketMatch}>
                <h2>Market Match</h2>
                <Image src={mm} className={styles.mm} width='400px' height='200px' alt='Fresh fruits and veggies'/>
            </div>

            <div className={styles.falendar}>
                <h2>Falendar</h2>
                <Image src={f} className={styles.f} width='400px' height='200px' alt='Calendar'/>
            </div>
            </div>

            <footer className={styles.footer}>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        > */}
        <div className = 'github'>
          <GitHubIcon />
              <p>nesbita</p>
        </div>
        
        <div className = 'linkedIn'>
          <LinkedInIcon />
            <p>ariananesbit</p>
        </div>

        <div className = 'email'>
          <EmailIcon/>
              <p>ariananesbit@gmail.com</p>
        </div>

        <div className = 'resume'>
          <DescriptionIcon />
              <p>Resume</p>
        </div>

          {/* Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> */}
        {/* </a> */}
      </footer>
        </div>

    )
}