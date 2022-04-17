import styled from 'styled-components'

export const TagStyled = styled.div<{ clickable?: boolean }>`
  background: #f2ec54;
  padding: 4px 8px;
  margin: 0 1rem 2rem 0;
  border-radius: 18px;

  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'unset')};

  font-size: 1.14rem;
  min-width: 130px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg,
  img {
    flex: 0 0 auto;
  }

  .text {
    font: inherit;
    flex-grow: 1;
    margin-left: 0.5em;
    line-height: 1.5em;
  }

  .button-confirm {
    margin: 0 4px 0 0;
    padding: 0;
    border: 0;
    background: transparent;
    outline: none;
    cursor: pointer;
  }

  @media only screen and (max-width: 1024px) {
    margin: 0 .5rem .5rem 0;
  }
`

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: auto;

  @media only screen and (max-width: 1024px) {
    margin-bottom: 1.5rem;
  }
`
