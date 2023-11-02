import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Profile from '../components/Profile'
import { useAuth } from '../hooks/useAuth'

const ProfilePage = () => {
  const { user, isAuthenticated, logout } = useAuth()

  useEffect(() => {
    window.document.title = 'Profile'
  }, [])

  return (
    isAuthenticated &&
    user && (
      <div className='bg-zinc-800 flex flex-col items-center p-10 rounded-md w-full'>
        <Profile {...user} />

        <Link
          to={'/'}
          onClick={() => {
            logout()
          }}
          className='text-white hover:text-zinc-500 bg-red-600 py-1 px-4 rounded-sm'
        >
          Logout
        </Link>
      </div>
    )
  )
}

export default ProfilePage
