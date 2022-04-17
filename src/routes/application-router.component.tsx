import { FC, lazy } from 'react'
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'

const Signup = lazy(() => import('../modules/signup/signup.component'))
const Breweries = lazy(() => import('../modules/breweries/breweries.component'))

export const ApplicationRouter: FC<{ children?: never }> = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/breweries" element={<Breweries />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </Router>
)
