import styled from 'styled-components'

const GAP_PROPORTION = (98 / 1440) * 100

export const PrivateLayoutStyled = styled.main`
  padding: ${GAP_PROPORTION}vw;
  padding-top: calc(70px + ${GAP_PROPORTION}vw);
  background: #fffef0;
  min-height: 100vh;
`
