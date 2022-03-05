import styled from 'styled-components'
import Counter from './Counter'
import { useState } from 'react'

const Cart = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  padding: 0 0.5rem;
  margin: 0.5rem auto;
  background: ${(props) => props.theme.light};
  box-shadow: 1px 1px 10px #ccc;
`
const CounterContainer = styled.div`
  display: flex;
`
const ItemName = styled.div`
  width: 30%;
  text-align: center;
`
const Price = styled.div`
  width: 30%;
  text-align: center;
`

export default function CartItem() {
  const [count, setCount] = useState(1)
  return (
    <Cart>
      <ItemName>Name</ItemName>
      <CounterContainer>
        <Counter inc />
        {count}
        <Counter />
      </CounterContainer>
      <Price>27000</Price>
    </Cart>
  )
}
