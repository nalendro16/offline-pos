import styled from 'styled-components'
import Btn from './Btn'

const Total = styled.div`
  display: ${(props) => props.theme.Pspacing};
`
const Pay = styled.div`
  display: ${(props) => props.theme.Pspacing};
`
const Change = styled.div`
  display: ${(props) => props.theme.Pspacing};
  margin-bottom: 0.8em;
`
const BtnBox = styled.div`
  display: ${(props) => props.theme.Pspacing};
`

const Box = styled.div`
  padding: 1.7em;
`

export default function CalculateBox() {
  return (
    <Box>
      <Total>
        <p>Total</p>
        <p>Rp.13.000</p>
      </Total>
      <Pay>
        <p>Jumlah bayar</p>
        <input type="number" />
      </Pay>
      <hr />
      <Change>
        <p>Kembalian</p>
        <p>Rp.2.000</p>
      </Change>
      <BtnBox>
        <Btn primary />
        <Btn />
      </BtnBox>
    </Box>
  )
}
