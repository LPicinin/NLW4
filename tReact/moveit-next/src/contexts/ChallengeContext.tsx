import { createContext, ReactNode, useEffect, useState } from 'react'
import challenges from '../../challenges.json'


interface Challenge {
    type: string,
    description: string,
    amount: number
}

interface ChallengesContextData {
    level: number,
    currentExperience: number,
    experienceToNextLevel: number,
    challengesCompleted: number,
    activeChallenge: Challenge,
    levelUp: () => void,
    startNewChallenge: () => void,
    resetChallenge: () => void,
    completeChallenge: () => void,
}

interface ChallengesProviderProps {
    children: ReactNode
}

export const ChallengeContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({ children }: ChallengesProviderProps) {
    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0)
    const [challengesCompleted, setChallengesCompleted] = useState(0)

    const [activeChallenge, setActiveChallenge] = useState<Challenge>(null)

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    useEffect(()=>{
        Notification.requestPermission()
    }, [])

    function levelUp() {
        setLevel(level + 1)
    }

    function startNewChallenge() {
        const randomChallangesIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallangesIndex]
        setActiveChallenge(challenge)

        new Audio('/notification.mp3').play()

        if(Notification.permission === 'granted')
        {
            new Notification('Novo desafio :)', {
                body:`Valendo ${challenge.amount}xp!`
            })
        }
    }

    function resetChallenge() {
        setActiveChallenge(null)
    }

    function completeChallenge() {
        if(activeChallenge)
        {
            const {amount} = activeChallenge

            let finalExperience = currentExperience + amount

            if(finalExperience >= experienceToNextLevel)
            {
                finalExperience = finalExperience - experienceToNextLevel
                levelUp()
            }
            setCurrentExperience(finalExperience)
            setActiveChallenge(null)
            setChallengesCompleted(challengesCompleted + 1)
        }
    }

    return (
        <ChallengeContext.Provider
            value={{
                level,
                currentExperience,
                experienceToNextLevel,
                challengesCompleted,
                activeChallenge,
                levelUp,
                startNewChallenge,
                resetChallenge,
                completeChallenge,
            }}>
            {children}
        </ChallengeContext.Provider>
    )
}