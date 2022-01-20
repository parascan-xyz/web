import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Parascan</title>
        <meta name="description" content="Parachain block explorer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Parascan, blockchain explorer for parachains.
          <p>
            Moonriver beta explorer is{' '}
            <Link href='https://moonriver-explorer.herokuapp.com/'><a>here</a></Link>
          </p>
          <Link href='https://github.com/parascan-xyz'>
            <a>
              <Image src='/github-logo.svg' width={50} height={50} />
            </a>
          </Link>
        </h1>
        
      </main>
    </div>
  )
}

export default Home
