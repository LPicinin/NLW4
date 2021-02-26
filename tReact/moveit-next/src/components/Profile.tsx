
import { useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {

    const {level} = useContext(ChallengeContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/LPicinin.png" alt="deus yamamaoto" />
            <div>
                <strong>Luís Henrique Picinin Jandre</strong>
                
                <p><img src="icons/level.svg" alt="Level up"/>Level {level}</p>
            </div>
        </div>)
}