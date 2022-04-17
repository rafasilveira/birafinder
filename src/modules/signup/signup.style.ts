import styled from 'styled-components'

export const BackgroundStyled = styled.section`
  background: #f2ec54;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .bee {
    display: block;
    object-fit: contain;
    object-position: center;
    // image width divided by layout width, to get it's proportion
    width: ${(278 / 1440) * 100}%;
    position: absolute;
    left: 29px;
    bottom: 15px;
  }
`

export const SignupFormStyled = styled.div`
  p {
    margin: 0 0 1.14em;
    font-size: 1rem;
    line-height: 1.5em;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 1.5rem;

    input {
      margin-right: 8px;
    }
  }

  .button {
    border-radius: 4px;
    display: block;
    text-align: center;
    border: none;
    color: #fff;
    font-size: 1.14rem;
    line-height: 1.5em;
    transition: all 0.25s;
    padding: 0.5em 1em;
    margin: 0 auto;

    &.disabled {
      background: #52525b;
      cursor: not-allowed;
      pointer-events: none;
    }

    &.enabled {
      background: #5d5fef;
      pointer-events: all;
      cursor: pointer;

      &:hover {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5), 0 5px 15px rgba(0, 0, 0, 0.25);
      }
    }
  }
`
