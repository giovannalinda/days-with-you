import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 0 16px;

  span {
    padding-top: 16px;
    padding-bottom: 16px;
  }
`

export const Content = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  h1 {
    font-size: 64px;
    font-weight: 400;

    strong {
      font-size: 80px;
      font-weight: 700;
    }
  }

  @media (max-width: 600px) {
    h1 {
      display: flex;
      font-size: 40px;
    }
  }
`
export const Footer = styled.div`
  padding-bottom: 30px;
  font-size: 12px;
`
