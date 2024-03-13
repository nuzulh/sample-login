import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

const HomePage = lazy(() => import('./pages/home.page'))
const LoginPage = lazy(() => import('./pages/login.page'))

export default function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Router>
        <Routes>
          <Route path='/'>
            <Route index element={<HomePage />} />
            <Route path='login' element={<LoginPage />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  )
}
