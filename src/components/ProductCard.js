import styled from 'styled-components'

const Card = styled.div`
  width: 17%;
  height: 10rem;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0px 0px 8px -4px #7a7a7a;
`
const CardImg = styled.img`
  margin: 10px 10px;
  width: 80%;
  height: 50%;
`
const NamePrice = styled.div`
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;
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
