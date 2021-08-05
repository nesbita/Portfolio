import styles from '../styles/Project.module.css'
import Image from 'next/image'
import nw from '../public/nw.jpg'
import mm from '../public/mm.jpeg'
import f from '../public/f.jpeg'
import { Public } from '@material-ui/icons'

export default function Projects () {
    return(
        <div>
            <div className={styles.projectContainer}>
            <div className={styles.natureWalk}>
                <h2>Nature Walk</h2>
                <Image src={nw} width='400px' height='200px' alt='Trees during Fall'/>
            </div>
            
            <div className={styles.marketMatch}>
                <h2>Market Match</h2>
                <Image src={mm} width='400px' height='200px' alt='Fresh fruits and veggies'/>
            </div>

            <div className={styles.falendar}>
                <h2>Falendar</h2>
                <Image src={f} width='400px' height='200px' alt='Calendar'/>
            </div>
            </div>
        </div>

    )
}