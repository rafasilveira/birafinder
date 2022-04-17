import styled from 'styled-components'

export const NotificationStyled = styled.section<{
  severity: 'warning' | 'error'
}>`
  padding: 2.5% 5%;
  background: #fff;
  border-radius: 0 4px 4px 0;
  border-left: 8px solid
    ${({ severity }) => (severity === 'warning' ? '#f2ec54' : '#ff3333')};

  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.125);

  color: black;

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1em;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.75em;

    a {
      font-weight: bold;
      cursor: pointer;
      color: inherit;
    }
  }
`
