import type { NextPage } from 'next'
import Head from 'next/head'

import {
  differenceInDays,
  differenceInMonths,
  differenceInSeconds,
  getSeconds,
  subSeconds,
} from 'date-fns'
import { useEffect, useState } from 'react'

import styled from 'styled-components'

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`

const Home: NextPage = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date())
  const [firstDay, setFirstDay] = useState(new Date(2020, 8, 2))
  const [seconds, setSeconds] = useState(0)
  const [days, setDays] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setCurrentDateTime(new Date()), 1000)
    return () => {
      clearInterval(id)
    }
  }, [])

  useEffect(() => {
    setSeconds(differenceInSeconds(currentDateTime, firstDay))
    setDays(differenceInDays(currentDateTime, firstDay))
    console.log({ seconds, days })
  }, [currentDateTime, firstDay, days, seconds])

  return (
    <div>
      <Head>
        <title>Homepage</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Main>
        <>
          <h1>{`${currentDateTime.toLocaleDateString()} ${currentDateTime.toLocaleTimeString()}`}</h1>
          <h1>{`${currentDateTime.toLocaleDateString()} ${currentDateTime.toLocaleTimeString()}`}</h1>
        </>
      </Main>
    </div>
  )
}

export default Home
