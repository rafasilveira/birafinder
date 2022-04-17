import { FC, Suspense } from 'react'
import { Reset } from 'styled-reset'
import { BreweriesProvider } from '../../context/breweries.context'
import { ApplicationRouter } from '../../routes/application-router.component'
import SignupBackground from '../signup/background.component'
import GlobalStyle from './app.style'
import 'react-loading-skeleton/dist/skeleton.css'

export const App: FC<{ children?: never }> = () => (
  <Suspense fallback={<SignupBackground>Loading...</SignupBackground>}>
    <BreweriesProvider>
      <Reset />
      <GlobalStyle />
      <ApplicationRouter />
    </BreweriesProvider>
  </Suspense>
)
