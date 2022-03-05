import styled from 'styled-components'

const Head = styled.div`
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.light};
`

export default function Header() {
  return (
    <Head>
      <h1>KASYR</h1>
    </Head>
  )
}
