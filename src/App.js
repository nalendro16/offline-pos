import './App.css'
import logo from './logo.svg'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
`

const Head = styled.h1`
  color: #535;
`
const Brand = styled.img`
  height: 10vh;
  margin-top: 2rem;
`
const Button = styled.button`
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  margin: 0 1rem;
  background: ${(props) => (props.primary ? 'blue' : 'green')};
`
const TomatoButton = styled(Button)`
  background: tomato;
`
const Wrapper = styled.div`
  background: yellow;
  &.test {
    background: orange;
  }
`

function App() {
  return (
    <Container>
      <Brand src={logo} alt="react" />
      <Head>Styled Component</Head>
      <Button>Primarry</Button>
      <Button primary>Primarry</Button>
      <TomatoButton>Tomato</TomatoButton>
      <Wrapper>Wrapper</Wrapper>
      <Wrapper className="test">Test Wrapper</Wrapper>
    </Container>
  )
}

export default App
