import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const NavBar = () => {
  const { user, isAuthenticated, logout } = useAuth()
  return (
    <nav className='bg-zinc-700 my-3 flex justify-between py-5 px-10'>
      <Link to='/' className='text-white text-2xl font-bold'>
        <h1 className='text-2xl font-bold'>Task Manager</h1>
      </Link>
      <ul className='flex gap-x-2'>
        {isAuthenticated ? (
          <>
            <li>
              Welcome master{' '}
              <span className='text-stone-200 font-bold'>{user.username}</span>
            </li>
            <li>
              <Link
                to='/add-task'
                className='text-white hover:text-zinc-500 bg-cyan-600 py-1 px-4 rounded-sm'
              >
                Add Task
              </Link>
            </li>
            <li>
              <Link
                to='/tasks'
                className='text-white hover:text-zinc-500 bg-lime-600 py-1 px-4 rounded-sm'
              >
                Tasks
              </Link>
            </li>
            <li>
              <Link
                to={'/'}
                onClick={() => {
                  logout()
                }}
                className='text-white hover:text-zinc-500 bg-red-600 py-1 px-4 rounded-sm'
              >
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link
                to='/login'
                className='text-white hover:text-zinc-500 bg-cyan-700 py-1 px-4 rounded-sm'
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to='/register'
                className='text-white hover:text-zinc-500 bg-cyan-700 py-1 px-4 rounded-sm'
              >
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default NavBar
