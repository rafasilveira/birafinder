import styled from 'styled-components'

export const TagStyled = styled.div`
  background: #f2ec54;
  padding: 4px 8px;
  margin: 0 1rem 2rem 0;
  border-radius: 18px;

  font-size: 1.14rem;
  min-width: 130px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg, img {
    flex: 0 0 auto;
  }

  .text {
    font: inherit;
    margin-left: 0.5em;
    line-height: 1.5em;
  }
`

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
`
