import { useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/CompleteChallanges.module.css'

export function CompleteChallanges() {
    const { challengesCompleted } = useContext(ChallengeContext)

    return (
        <div className={styles.completeChallangesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}