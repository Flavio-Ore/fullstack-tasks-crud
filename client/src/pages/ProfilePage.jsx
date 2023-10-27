import { useAuth } from '../hooks/useAuth'

const ProfilePage = () => {
  const { user } = useAuth()
  return (
    <article className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
      <h2 className='text-2xl font-bold'>Profile</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </article>
  )
}

export default ProfilePage
