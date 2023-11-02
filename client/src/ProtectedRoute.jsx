import { Navigate, Outlet } from 'react-router-dom'
import Loading from './components/Loading'
import { useAuth } from './hooks/useAuth'

const ProtectedRoute = () => {
  const { loading, isAuthenticated } = useAuth()

  if (loading) return <Loading />
  if (!loading && !isAuthenticated) return <Navigate to='/login' replace />
  return <Outlet />
}

export default ProtectedRoute
