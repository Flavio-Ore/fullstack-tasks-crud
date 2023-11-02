import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const NavBar = () => {
  const { user, isAuthenticated } = useAuth()

  return (
    <nav className='bg-zinc-700 my-3 flex items-center justify-between py-5 px-10'>
      <Link to='/' className='text-white text-2xl font-bold'>
        <h1 className='text-4xl font-bold'>Task Manager</h1>
      </Link>
      {isAuthenticated && (
        <p>
          Welcome{' '}
          <span className='text-stone-200 font-bold'>{user.username}</span>
        </p>
      )}
      <ul className='flex flex-col sm:flex-row items-center sm:gap-x-2 gap-y-2'>
        {isAuthenticated ? (
          <>
            <li>
              <Link
                to={'/profile'}
                className='block text-white hover:text-zinc-500 bg-emerald-600 py-1 px-4 rounded-sm'
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to='/tasks'
                className='block text-white hover:text-zinc-500 bg-lime-600 py-1 px-4 rounded-sm'
              >
                Tasks
              </Link>
            </li>
            <li>
              <Link
                to='/add-task'
                className='block text-white hover:text-zinc-500 bg-cyan-600 py-1 px-4 rounded-sm'
              >
                Add Task
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link
                to='/login'
                className='block text-white hover:text-zinc-500 bg-cyan-700 py-1 px-4 rounded-sm'
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to='/register'
                className='block text-white hover:text-zinc-500 bg-cyan-700 py-1 px-4 rounded-sm'
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
