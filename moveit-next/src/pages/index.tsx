import { CompletedChallenges } from "../components/CompletedChalenges"
import { Countdown } from "../components/Countdown"
import { ExperienceBar } from "../components/ExperienceBar"
import { Profile } from "../components/Profile"

import Head from "next/head"

import styles from "../styles/pages/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title></title>
      </Head>

      <ExperienceBar />

      <section>
        <div className="">
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div></div>
      </section>
    </div>
  )
}
