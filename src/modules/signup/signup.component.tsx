import { FC, useCallback, useState } from 'react'
import SignupBackground from './background.component'
import { SignupFormStyled } from './signup.style'
import { useNavigate } from 'react-router-dom'

export const Signup: FC<{ children?: never }> = () => {
  const [buttonEnabled, setButtonEnabled] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = useCallback(() => {
    if (buttonEnabled) {
      navigate('/breweries')
    }
  }, [buttonEnabled, navigate])

  return (
    <SignupBackground>
      <SignupFormStyled>
        <p>Please, enter your full name below</p>
        <p>Only alphabetical characters are accepted</p>
        <input type="text" placeholder="Full name" className="field" />
        <label>
          <input type="checkbox" />
          <span>Are you older than 18 years old?</span>
        </label>
        <button
          className={`button ${buttonEnabled ? 'enabled' : 'disabled'}`}
          onClick={() => handleSubmit}
        >
          Enter
        </button>
      </SignupFormStyled>
    </SignupBackground>
  )
}

export default Signup
