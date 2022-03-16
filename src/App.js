import './App.css'
import Header from './components/Header'
import styled, { ThemeProvider } from 'styled-components'
import * as theme from './styled/Theme'
import ProductCard from './components/ProductCard'
import { useSelector } from 'react-redux'
import CartItem from './components/CartItem'
import ListMenu from './components/ListMenu'
import CalculateBox from './components/CalculateBox'

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 92vh;
`
const MenuContainer = styled.div`
  width: 15%;
  padding: 0.5rem 0;
  padding-right: 0.5rem;
`
const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 60%;
  height: 100%;
  background: ${(props) => props.theme.light};
  border-left: 1px solid #f7f7f7;
  border-right: 1px solid #f7f7f7;
  padding: 0.5rem 0.5rem;
`
const CartContainer = styled.div`
  width: 25%;
  padding: 0.5rem 0.5rem;
  display: ${(props) => props.theme.Pspacing};
  flex-direction: column;
`

function App() {
  const product = useSelector((state) => state.product.product)
  console.log(product && product)

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container>
        <MenuContainer>
          <ListMenu />
        </MenuContainer>
        <ProductContainer>
          {product &&
            product.map((data) => (
              <ProductCard
                img={data.image}
                name={data.name}
                price={data.price}
                key={data.id}
              />
            ))}
        </ProductContainer>
        <CartContainer>
          <CartItem />
          <CalculateBox />
        </CartContainer>
      </Container>
    </ThemeProvider>
  )
}

export default App
