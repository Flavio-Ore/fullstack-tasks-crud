import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
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
      {authErrors.map(error => (
        <div key={error} className='bg-red-400 text-white p-4 rounded-md mb-2'>
          {error}
        </div>
      ))}
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
    </div>
  )
}

export default RegisterPage
