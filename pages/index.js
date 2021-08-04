import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import DescriptionIcon from '@material-ui/icons/Description';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ariana Nesbit</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello
        </h1>
        <h2>I'm Ariana Nesbit, a full stack developer...</h2>
        <h3>Welcome to My Portfolio</h3>

        {/* <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p> */}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

      <div className='downArrow'>
      <div className='bounce'>
        <KeyboardArrowDownIcon />
        <a href= './about' />
        </div>
      </div>
      
      </main>

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