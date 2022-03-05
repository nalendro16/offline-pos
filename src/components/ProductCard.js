import styled from 'styled-components'

const Card = styled.div`
  width: 17%;
  height: 15rem;
  cursor: pointer;
`
const CardImg = styled.img`
  width: 100%;
  height: 50%;
`
const NamePrice = styled.div`
  display: flex;
  justify-content: space-between;
`

export default function ProductCard({ id, name, img, price }) {
  return (
    <Card key={id}>
      <CardImg src={img} alt={name} />
      <NamePrice>
        <p>{name}</p>
        <p>Rp{price}</p>
      </NamePrice>
    </Card>
  )
}
