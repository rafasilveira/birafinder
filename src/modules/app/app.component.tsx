import { FC, Suspense } from 'react'
import { Reset } from 'styled-reset'
import { ApplicationRouter } from '../routes/application-router.component'
import SignupBackground from '../signup/background.component'
import GlobalStyle from './app.style'

export const App: FC<{ children?: never }> = () => (
  <Suspense fallback={<SignupBackground>Loading...</SignupBackground>}>
    <Reset />
    <GlobalStyle />
    <ApplicationRouter />
  </Suspense>
)
