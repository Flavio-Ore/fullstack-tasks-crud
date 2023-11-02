/* eslint-disable react/prop-types */
const Profile = ({ username, email, id, createdAt }) => {
  return (
    <article className=' bg-zinc-900 p-6 flex flex-col items-center justify-evenly gap-y-4'>
      <h2 className='text-2xl font-bold'>PROFILE</h2>
      <h3 className='text-4xl font-bold text-center bg-zinc-800 rounded-full p-3'>
        👤
      </h3>
      <div className='flex items-center text-slate-100 justify-between w-full'>
        <p className='text-xl font-bold'>Username: </p>
        <p className='italic font-normal'>
          <span className='bg-zinc-700 py-1 px-2 rounded-md font-bold'>
            {username}
          </span>
        </p>
      </div>
      <div className='flex items-center text-slate-200 justify-between w-full'>
        <p className='text-xl font-semibold'>Email: </p>
        <p className='italic font-normal'>
          <span className='bg-zinc-700 py-1 px-2 rounded-md font-bold'>
            {email}
          </span>
        </p>
      </div>
      <div className='flex flex-wrap text-slate-300 items-center justify-between w-full'>
        <p className='text-xl font-medium'>Id:</p>
        <p>
          <small className='bg-zinc-700 py-1 px-2 rounded-md font-bold'>
            {id}
          </small>
        </p>
      </div>
      <div className='flex flex-wrap text-slate-400 items-center justify-between w-full'>
        <p className='text-xl font-medium'>Created at:</p>
        <p>
          <span className='bg-zinc-700 py-1 px-2 rounded-md font-bold'>
            {new Date(createdAt).toLocaleDateString()}
          </span>
        </p>
      </div>
    </article>
  )
}

export default Profile
