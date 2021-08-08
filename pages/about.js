import styles from '../styles/About.module.css' 
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import DescriptionIcon from '@material-ui/icons/Description';

export default function About () { 
    return(
        <div className={styles.aboutContainer} id='About'>
            <main className={styles.aboutMain}>
        <div className={styles.aboutHeader}>
            <h2>I'm a full stack engineer who wants to make a difference in the world</h2>
            <h3>through thoughtful code and design.  I enjoy coding and working to be a better me each day. <br />  
                In my free time, you can find me in the mountains, looking for animals to pet, or in my garden.</h3>
            </div>
            <div className ={styles.listContainer}>
            {/* <div className={styles.languages}> */}
            <ul className={styles.languages}>
                <p><strong>Languages</strong></p>
                <li>HTML</li>
                <li>CSS</li>
                <li>SQL</li>
                <li>Python</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <br />
                <br />
            </ul>
            {/* </div>  */}
            
            {/* <div className={styles.databases}> */}
            <ul className={styles.databases}>
                <p><strong>Databases</strong></p>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>SQLAlchemy</li>
                <li>Sequelize</li>
                <br />
                <br />
                <br />
            </ul>
            {/* </div> */}
            
            {/* <div className={styles.librariesFrameworks}> */}
                <ul className={styles.librariesFrameworks}>
                <p><strong>Libraries / Frameworks</strong></p>
                <li>React</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Material-UI</li>
                <li>Styled-Components</li>
                <li>Bootstrap</li>
                <li>Flask</li>
                </ul>
            {/* </div> */}

            {/* <div className={styles.other}> */}
                <ul className={styles.other}>
                    <p><strong>Other</strong></p>
                    <li>RESTful Routing</li>
                    <li>JSON</li>
                    <li>APIs</li>
                    <li>EJS</li>
                    <li>Github</li>
                    <li>Netlify</li>
                    <li>Heroku</li>
                    <br />
                </ul>
            {/* </div> */}
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