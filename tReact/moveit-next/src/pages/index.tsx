import Head from 'next/head'
import React from 'react'
import { CompleteChallanges } from '../components/CompleteChallenges'
import { Countdown } from '../components/Countdown'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'

import styles from '../styles/pages/Home.module.css'


//https://youtu.be/7ceWRavb6Ac?t=3638


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
            <div></div>
          </section>
        </div>
  )
}
