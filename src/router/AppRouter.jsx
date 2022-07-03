import { Routes, Route } from 'react-router-dom'
import LoginComponent from '../components/LoginComponent'
import ShareBoxRoutes from './ShareBoxRoutes'
import { PublicRoute } from './PublicRoute'
import { PrivateRoute } from './PrivateRoute'

export const AppRouter = () => {
  return(
    <>
      <Routes>
        <Route path='/' element={
          <PublicRoute>
            <Routes>
              <Route path='/' element={<LoginComponent />} />
            </Routes>
          </PublicRoute>
        }
        />

        <Route
          path='/*'
          element={
            <PrivateRoute>
              <ShareBoxRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  )
}