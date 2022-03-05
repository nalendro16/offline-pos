import styled from 'styled-components'

const CounterStyle = styled.div`
  width: 1em;
  height: 1rem;
  color: ${(props) => props.theme.light};
  background: ${(props) => props.theme.secondary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0 0.5rem;
`

export default function Counter({ inc }) {
  return (
    <>{inc ? <CounterStyle>+</CounterStyle> : <CounterStyle>-</CounterStyle>}</>
  )
}
