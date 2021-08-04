import styles from '../styles/About.module.css' 

export default function About () { 
    return(
        <div>
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
        </div>
    )
}