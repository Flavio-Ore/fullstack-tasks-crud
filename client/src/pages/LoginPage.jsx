import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import SubmitBtn from '../components/SubmitBtn'
import { useAuth } from '../hooks/useAuth'

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const { isAuthenticated, signin, errors: loginErrors } = useAuth()
  const navigate = useNavigate()
  const onSubmit = handleSubmit(async values => {
    signin(values)
    console.log(values)
  })

  useEffect(() => {
    if (isAuthenticated) navigate('/tasks')
  }, [isAuthenticated])

  return (
    <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
      {loginErrors.map(error => (
        <div
          key={error}
          className='bg-red-500 text-white p-4 rounded-md mb-2 text-center'
        >
          {error}
        </div>
      ))}
      <h2 className='text-2xl font-bold'>LOGIN</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          placeholder='xxx@xxx.com'
          {...register('email', { required: true })}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
        />
        {errors.email && <p className='text-red-600'>Email is required</p>}
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          placeholder='My dog name is...'
          {...register('password', { required: true })}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
        />
        {errors.password && (
          <p className='text-red-700'>Password is required</p>
        )}
        <SubmitBtn text={'LOGIN'} />
      </form>

      <p>
        <small className='flex gap-x-2 justify-between mt-4 text-slate-300'>
          Don&apos;t have an account yet?{' '}
          <Link to='/register' className='text-sky-500'>
            Sign up here
          </Link>
        </small>
      </p>
    </div>
  )
}

export default LoginPage
