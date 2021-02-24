import Head from 'next/head'
import React from 'react'
import { ChallengeBox } from '../components/ChallengeBox'
import { CompleteChallanges } from '../components/CompleteChallenges'
import { Countdown } from '../components/Countdown'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'

import styles from '../styles/pages/Home.module.css'


//https://youtu.be/ArqCBqN7zzc


export default function Home() {
  return (
        <div className={styles.container}>
          <Head>
            <title>início | move.it</title>
          </Head>
          <ExperienceBar />
          <section>
            <div>
              <Profile/>
              <CompleteChallanges/>
              <Countdown/>
            </div>
            <div>
              <ChallengeBox/>
            </div>
          </section>
        </div>
  )
}
