import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import profilePic from '../public/profile.jpg'
import mountainPic from '../public/mountain.jpg'
// import trees from '../public/trees.jpg'
import styles from '../styles/Home.module.css'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import DescriptionIcon from '@material-ui/icons/Description'
import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Navbar from './navbar'
import Section from './section'

export default function Home () {
    return (
      <div>
        <div>
          <div className={styles.container}>
            <Head>
              <title>Ariana Nesbit</title>
            </Head>
            
          <div>
            <Image className={styles.backgroundImage} src={mountainPic} alt='Mountain Background' layout='fill' objectFit='cover' quality={100} />
          </div>

          <div className={styles.links}>
            <Navbar />
            <Section
              title=''
              dark={true}
              id='Home'
            />

          <main className={styles.main}>
            <h1>Hello</h1>
            <br />
            <h2>My name is Ariana Nesbit</h2>
            <br />
            <br />
            <br />
         
            <Image className={styles.profilePic} src={profilePic} alt='Ariana' width={200} height={300} />
              <br />
              <br />
              <br />

            <Section
              title='About Me'
              dark={false}
              id="About"
            />

          <div id='About'>
            
          <div className={styles.aboutHeader}>
            <h3>I am a full stack engineer who wants to make a difference in the world through<br />
                thoughtful code and design.  I enjoy coding and working to be a better me each day. <br />  
                In my free time, you can find me in the mountains, looking for animals to pet, or in my garden.</h3>
          </div>

            <br />
            <br />
            <br />
            <br />

          <div className={styles.listContainer}>
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
          </div>

          <br />
          <br />
          <br />
          <br />

          <div className={styles.projectContainer} id='Projects'>
            <Section
              title='My Projects'
              dark={true}
              id="Project"
            />
          </div>
        
          <br />

          <div className={styles.cards}>
            <CardDeck>
              <div className={styles.cardOne}>
                <Card>
                  <Card.Img variant='top' src='nw.jpg' width='100px' height='200px'/>
                    <Card.Body>
                      <Card.Text>
                        <Link href='https://nesbita.github.io/Nature-Walk/'>
                        <a target="_blank">Nature Walk</a>
                        </Link>
                        <br />
                          A scenario-based game that monitors the health of players based on their choices
                        <br/>
                        
                      </Card.Text>
                    </Card.Body>
                        <Card.Footer>
                          {/* <Card.Link href='https://nesbita.github.io/Nature-Walk/'><a target="_blank">Nature Walk</a></Card.Link> */}
                            <small className='text-muted'>HTML, CSS, JavaScript</small>
                        </Card.Footer>
                </Card>
              </div>
            </CardDeck>

            <CardDeck>
              <div className={styles.cardTwo}>
                <Card>
                  <Card.Img variant='top' src='mm.jpeg' width='100px' height='200px'/>
                    <Card.Body>
                      <Card.Text>
                      <Link href='https://market-match.herokuapp.com/'>
                        <a target="_blank">Market Match</a>  
                        </Link>
                        <br />
                        App that helps users find farmers markets using the USDA National Farmers Market Directory API
                      </Card.Text>
                    </Card.Body>
                      <Card.Footer>
                          <small className='text-muted'>Express, Node.js, Sequelize, EJS</small>
                      </Card.Footer>
                  </Card>
              </div>
            </CardDeck>

            <CardDeck>
              <div className={styles.cardThree}>
                <Card>
                  <Card.Img variant='top' src='f.jpeg' width='100px' height='200px'/>
                    <Card.Body>
                      <Card.Text>
                      <Link href='https://60f1ef3a5668050007a6b11d--condescending-lamarr-3bcb2c.netlify.app/'>
                        <a target="_blank">Falendar</a>  
                        </Link>
                        <br />
                        A MERN stack application built to allow families to better coordinate their schedules via calendar
                        <br />
                      </Card.Text>
                    </Card.Body>
                      <Card.Footer>
                          <small className='text-muted'>Express, MongoDB, Mongoose, React, CSS</small>
                      </Card.Footer>
                </Card>
              </div>
            </CardDeck>
          </div>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
    
      </div>
          </main>
          </div>

    </div>
      <footer className={styles.footer}>
        <div className = 'github'>
          <GitHubIcon />
          <Link href='https://github.com/nesbita'>
          <a target="_blank">
            <br />
            nesbita</a>
        </Link>
        </div>
        
        <div className = 'linkedIn'>
          <LinkedInIcon />
          <Link href='https://www.linkedin.com/in/ariananesbit/'>
          <a target="_blank">
            <br />
            ariananesbit</a>
        </Link>
        </div>

        <div className = 'email'>
          <EmailIcon/>
          <Link href='mailto:ariananesbit@gmail.com'>
          <a target="_blank">
            <br />
            ariananesbit@gmail.com</a>
          </Link>  
        </div>

        <div className = 'resume'>
          <DescriptionIcon />
          <Link href='./Resume2021.pdf'>
          <a target="_blank">
            <br />
            Resume</a>
          </Link> 
        </div>
      </footer>
        </div>
      </div>
    )
}