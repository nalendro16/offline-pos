import './App.css'
import logo from './logo.svg'
import styled, { ThemeProvider } from 'styled-components'

const theme = {
  primary: 'red',
  secondary: 'blue',
}
const Container = styled.div`
  text-align: center;
`
const Head = styled.h1`
  color: ${(props) => props.theme.primary};
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
const AnotherButton = styled.button`
  ${(props) => {
    console.log(props)
    switch (props.variant) {
      case 'primary':
        return `background:blue`
      case 'success':
        return `background:green`
      default:
        return `background:grey`
    }
  }}
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Brand src={logo} alt="react" />
        <Head>Styled Component</Head>
        <Button>Primarry</Button>
        <Button primary>Primarry</Button>
        <TomatoButton>Tomato</TomatoButton>
        <Wrapper>Wrapper</Wrapper>
        <Wrapper className="test">Test Wrapper</Wrapper>
        <AnotherButton variant="primary">Primary</AnotherButton>
        <AnotherButton variant="success">Success</AnotherButton>
        <AnotherButton>Gray</AnotherButton>
      </Container>
    </ThemeProvider>
  )
}

export default App
