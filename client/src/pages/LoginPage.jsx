import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const { signin, errors: loginErrors } = useAuth()

  const onSubmit = handleSubmit(async values => {
    signin(values)
    console.log(values)
  })

  return (
    <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
      <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
        {loginErrors.map(error => (
          <div
            key={error}
            className='bg-red-500 text-white p-4 rounded-md mb-2 text-center'
          >
            {error}
          </div>
        ))}
        <h2 className='text-xl font-bold'>Login</h2>
        <form onSubmit={onSubmit}>
          <input
            type='email'
            placeholder='Email'
            {...register('email', { required: true })}
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          />
          {errors.email && <p className='text-red-600'>Email is required</p>}
          <input
            type='password'
            placeholder='Password'
            {...register('password', { required: true })}
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          />
          {errors.password && (
            <p className='text-red-700'>Password is required</p>
          )}
          <button className='bg-zinc-900 p-2 rounded-md'>Login</button>
        </form>

        <p className='flex gap-x-2 justify-between mt-4'>
          Don&apos;t have an account yet?{' '}
          <Link to='/register' className='text-sky-500'>
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
