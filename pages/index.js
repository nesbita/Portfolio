import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../public/me.jpg'
import styles from '../styles/Home.module.css'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import DescriptionIcon from '@material-ui/icons/Description'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import project from './Project'
import Navbar from "./Navbar"
import Section from "./Section"

export default function Home () {
    return (
      <div>
        <div>
          <div className={styles.container}>
            <Head>
              <title>Ariana Nesbit</title>
            </Head>
            <Image
              className={styles.backgroundImage}
              src='/trees.jpg'
              alt='trees'
              layout='fill'
              objectFit='cover'
              objectPosition='center'
            />

          <div className={styles.links}>
            <Navbar />
            <Section
              title=''
              dark={true}
              id='Home'
            />

          <main className={styles.main}>
            <h1>Hello</h1>
            <h2>I'm Ariana Nesbit</h2>
         
            <Image className={styles.profilePic} src={profilePic} alt='Ariana'/>
              <br />
              <br />
        
            <KeyboardArrowDownIcon />       
              <br />
              <br />

            <Section
              title='About Me'
              dark={false}
              id="About"
            />

          <div id='About'>
            
          <div className={styles.aboutHeader}>
            <h3>I'm a full stack engineer who wants to make a difference in the world through<br />
                thoughtful code and design.  I enjoy coding and working to be a better me each day. <br />  
                In my free time, you can find me in the mountains, looking for animals to pet, or in my garden.</h3>
          </div>

            <br />
            <br />
            <br />
            <br />

          <div className ={styles.listContainer}>
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
              subtitle={project}
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
                        A scenario-based game that monitors players' health based on their choices
                        <br/>
                        <br/>
                      </Card.Text>
                    </Card.Body>
                        <Card.Footer>
                          <Card.Link href='https://nesbita.github.io/Nature-Walk/'>Nature Walk</Card.Link>
                            <small className='text-muted'> | HTML, CSS, JavaScript</small>
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
                        A full stack app that allows users to locate their closest farmers market using the USDA National Farmers Market Directory API
                      </Card.Text>
                    </Card.Body>
                      <Card.Footer>
                        <Card.Link href='https://market-match.herokuapp.com/'>Market Match</Card.Link>
                          <small className='text-muted'> | Express, Node.js, Sequelize, EJS</small>
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
                        A MERN stack application built to allow families to better coordinate their schedules via calendar
                        <br />
                        <br />
                      </Card.Text>
                    </Card.Body>
                      <Card.Footer>
                        <Card.Link href='https://60f1ef3a5668050007a6b11d--condescending-lamarr-3bcb2c.netlify.app/'>Falendar</Card.Link>
                          <small className='text-muted'> | Express, MongoDB, Mongoose, React, CSS</small>
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
      </footer>
        </div>
      </div>
    )
}