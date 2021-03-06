import { FC, useCallback, useEffect, useState } from 'react'
import SignupBackground from './background.component'
import { SignupFormStyled } from './signup.style'
import { useNavigate } from 'react-router-dom'
import { useBreweriesContext } from '../../context/breweries.context'
import { Input } from '../../components'

export const Signup: FC<{ children?: never }> = () => {
  const { userName, setUserName, isUserAdult, setIsUserAdult } =
    useBreweriesContext()

  const navigate = useNavigate()

  const [buttonEnabled, setButtonEnabled] = useState(false)

  useEffect(() => {
    setButtonEnabled(!!userName.length && isUserAdult)

    return () => {
      setButtonEnabled(false)
    }
  }, [isUserAdult, userName.length])

  // clear username and checkbox when user returns to home screen
  useEffect(() => {
    setUserName('')
    setIsUserAdult(false)
    setButtonEnabled(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
        <Input
          type="text"
          placeholder="Full name"
          value={userName}
          onChange={(e) =>
            setUserName(e.target.value.replace(/[^a-z ]/i, ''))
          }
        />
        <label>
          <input
            type="checkbox"
            checked={isUserAdult}
            onChange={(e) => setIsUserAdult(e.target.checked)}
          />
          <span>Are you older than 18 years old?</span>
        </label>
        <button
          className={`button ${buttonEnabled ? 'enabled' : 'disabled'}`}
          onClick={handleSubmit}
        >
          Enter
        </button>
      </SignupFormStyled>
    </SignupBackground>
  )
}

export default Signup
