import type { NextPage } from 'next'
import Head from 'next/head'
import { Main } from '~/components'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <>
        <Main />
      </>
    </div>
  )
}

export default Home
