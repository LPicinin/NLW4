import { GetServerSideProps } from 'next'
import Head from 'next/head'
import React from 'react'
import { ChallengeBox } from '../components/ChallengeBox'
import { CompleteChallanges } from '../components/CompleteChallenges'
import { Countdown } from '../components/Countdown'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { ChallengesProvider } from '../contexts/ChallengeContext'
import { CountdownProvider } from '../contexts/CountdownContext'
import styles from '../styles/pages/Home.module.css'



//https://youtu.be/ArqCBqN7zzc

interface HomeProps {
  level: number,
  currentExperience: number,
  challengesCompleted: number
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}>
      <div className={styles.container}>
        <Head>
          <title>início | move.it</title>
        </Head>
        <ExperienceBar />
        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompleteChallanges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>

      </div>
    </ChallengesProvider>
  )
}

//executa no lado do servidor, top!!!
export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}