import styled from 'styled-components'

const TheButton = styled.button`
  height: 1.7rem;
  width: 6rem;
  border: none;
  padding: 0.2rem 0.5rem;
  color: #fff;
  text-align: center;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`

const PrimaryButton = styled(TheButton)``
const WarningButton = styled(TheButton)``

export default function Btn({ primary }) {
  if (primary) {
    return <PrimaryButton>Selesai</PrimaryButton>
  } else return <WarningButton>Cancel</WarningButton>
}
