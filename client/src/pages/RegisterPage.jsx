import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import SubmitBtn from '../components/SubmitBtn'
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
    <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
      {authErrors.map(error => (
        <div
          key={error}
          className='bg-red-500 text-white p-4 rounded-md mb-2 text-center'
        >
          {error}
        </div>
      ))}
      <h2 className='text-2xl font-bold'>SIGN UP</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          {...register('username', { required: true })}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          placeholder='My name is...'
        />
        {formErrors.username && (
          <div className='bg-red-500 text-white p-4 rounded-md'>
            Username is required
          </div>
        )}
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          {...register('email', { required: true })}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          placeholder='username@mail-server.domain'
        />
        {formErrors.email && (
          <div className='bg-red-600 text-white p-4 rounded-md'>
            Email is required
          </div>
        )}
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          {...register('password', { required: true })}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          placeholder='My password is...'
        />
        {formErrors.password && (
          <div className='bg-red-700 text-white p-4 rounded-md'>
            Password is required
          </div>
        )}
        <SubmitBtn text={'SIGN UP'} />
      </form>
      <p>
        <small className='flex gap-x-2 justify-between mt-4 text-slate-300'>
          Do you already have an account?
          <Link to='/login' className='text-sky-500'>
            Log in here
          </Link>
        </small>
      </p>
    </div>
  )
}

export default RegisterPage
