import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.css'
import {Slide} from './../public/UI/home/slide'
import { Centy, Logo} from './../public/UI/tools'


export default function Home() {

  return (
    <main id="__root">
      <Head>
        <title>Shopy Where : Coming Soon !</title>
      </Head>
        <Centy>
          <div className="center">
            <Logo/>
          </div>
          <Slide/>
        </Centy>
    </main>
  )
}
