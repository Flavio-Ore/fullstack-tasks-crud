import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from './useAuth'

export function usePathOnChange ({ isAuthenticated, documentTitle = '' }) {
  const { clearErrors } = useAuth()
  const { pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (pathname === '/login' || pathname === '/register') return clearErrors()
  }, [pathname])

  useEffect(() => {
    if (isAuthenticated) navigate('/tasks')
    window.document.title = documentTitle
  }, [isAuthenticated])
}
