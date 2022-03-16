import styled from 'styled-components'

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
const Btn = styled.button`
  padding: 5px 20px;
  border: none;
  color: ${(props) => props.theme.light};
  background: ${(props) => props.theme.tertiary};
  &:nth-child(2) {
    background: ${(props) => props.theme.primary};
  }
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
        <p>Rp.15.000</p>
      </Pay>
      <hr />
      <Change>
        <p>Kembalian</p>
        <p>Rp.2.000</p>
      </Change>
      <BtnBox>
        <Btn>Cancel</Btn>
        <Btn>Selesai</Btn>
      </BtnBox>
    </Box>
  )
}
