import { useEffect, useState } from 'react'
import { differenceInDays, differenceInSeconds } from 'date-fns'

import * as S from './Main.styled'

export function Main() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date())
  const [firstDay] = useState(new Date(2020, 2, 7))
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
  }, [currentDateTime, firstDay])

  return (
    <S.Container>
      <S.Content>
        <h1>
          <span>Hoje faz </span>
          <strong>{days} dias</strong>
          <span> que eu conheci a melhor pessoa desse mundo!</span>
        </h1>
        <h2>Mais precisamente {seconds} segundos de muito amor </h2>
      </S.Content>
      <S.Footer>
        <p>
          Feito com <span>♥</span> para o meu amozin
        </p>
      </S.Footer>
    </S.Container>
  )
}
