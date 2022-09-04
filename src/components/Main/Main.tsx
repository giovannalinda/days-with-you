import { useEffect, useState } from 'react'
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'
import { differenceInDays, differenceInSeconds } from 'date-fns'

import * as S from './Main.styled'

export function Main() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date())
  const [firstDay] = useState(new Date(2020, 1, 7))
  const [seconds, setSeconds] = useState(0)
  const [days, setDays] = useState(0)

  const { width, height } = useWindowSize()

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
      <Confetti width={width} height={height} />
      <S.Content>
        <span>Você não é um código bem feito, mas dispensa comentários</span>
        <h1>
          <span>Hoje faz </span>
          <strong>{days} dias</strong>
          <span> que eu conheci a melhor pessoa desse mundo!</span>
        </h1>
        <span>
          Mais precisamente{' '}
          <strong>
            {Intl.NumberFormat('pt-BR', { style: 'decimal' }).format(seconds)}{' '}
          </strong>
          segundos
        </span>
      </S.Content>
      <S.Footer>
        <p>
          Feito com <span>💕</span> para o meu amozin e melhor dev desse mundo
        </p>
      </S.Footer>
    </S.Container>
  )
}
