import { FC, Suspense } from 'react'
import { Reset } from 'styled-reset'
import { ApplicationRouter } from '../routes/application-router.component'

export const App: FC<{ children?: never }> = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Reset />
    <ApplicationRouter />
  </Suspense>
)
