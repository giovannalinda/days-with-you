import type { NextPage } from 'next'
import Head from 'next/head'
import { Main } from '~/components'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Para meu amozin ♥</title>
        <link rel='icon' href='/icon.svg' />
      </Head>

      <>
        <Main />
      </>
    </div>
  )
}

export default Home
