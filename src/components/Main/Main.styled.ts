import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
    padding-bottom: 30px;

    strong {
      font-size: 80px;
      font-weight: 700;
      white-space: nowrap;
    }
  }

  @media (max-width: 600px) {
    h1 {
      display: flex;
      flex-direction: column;
      font-size: 40px;
    }

    h2 {
      font-size: 18px;
    }
  }
`
export const Footer = styled.div`
  padding-bottom: 30px;
  font-size: 12px;
`
