import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors }
  } = useForm()
  const { signup, isAuthenticated, errors: authErrors } = useAuth()
  const navigate = useNavigate()

  const onSubmit = handleSubmit(async values => {
    signup(values)
    console.log(values)
  })

  useEffect(() => {
    if (isAuthenticated) navigate('/tasks')
  }, [isAuthenticated])

  return (
    <div className='bg-zinc-800 m ax-w-md p-10 rounded-md'>
      {authErrors.map(error => {
        console.log('error :>> ', error)
        return (
          <div
            key={error}
            className='bg-red-500 text-white p-4 rounded-md mb-2 text-center'
          >
            {error}
          </div>
        )
      })}
      <form onSubmit={onSubmit}>
        <input
          type='text'
          {...register('username', { required: true })}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          placeholder='Username'
        />
        {formErrors.username && (
          <div className='bg-red-500 text-white p-4 rounded-md'>
            Username is required
          </div>
        )}
        <input
          type='email'
          {...register('email', { required: true })}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          placeholder='Email'
        />
        {formErrors.email && (
          <div className='bg-red-600 text-white p-4 rounded-md'>
            Email is required
          </div>
        )}
        <input
          type='password'
          {...register('password', { required: true })}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          placeholder='Password'
        />
        {formErrors.password && (
          <div className='bg-red-700 text-white p-4 rounded-md'>
            Password is required
          </div>
        )}
        <button type='submit'>Register</button>
      </form>
      <p className='flex gap-x-2 justify-between mt-4'>
        Do you already have an account?{' '}
        <Link to='/login' className='text-sky-500'>
          Log in here
        </Link>
      </p>
    </div>
  )
}

export default RegisterPage
