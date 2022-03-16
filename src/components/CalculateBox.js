import styled from 'styled-components'

const Total = styled.div`
  display: ${(props) => props.theme.Pspacing};
`
const Pay = styled.div`
  display: ${(props) => props.theme.Pspacing};
`
const Change = styled.div`
  display: ${(props) => props.theme.Pspacing};
`
const btnBox = styled.div``
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
      <Change>
        <p>Kembalian</p>
        <p>Rp.2.000</p>
      </Change>
      <btnBox></btnBox>
    </Box>
  )
}
