import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { Link } from 'react-router-dom'
import { useTasks } from '../hooks/useTasks'
dayjs.extend(utc)

/* eslint-disable react/prop-types */
const TaskCard = ({ title, description, date, _id }) => {
  const { deleteTask } = useTasks()
  return (
    <article className='bg-zinc-800 max-w-md w-full p-10 rounded-md flex flex-col gap-y-2 '>
      <h2 style={{ textWrap: 'balance' }} className='text-2xl font-bold'>
        {title}
      </h2>

      <p className='text-slate-300'>{description}</p>
      <p className='text-slate-400'>
        Deadline: <time>{dayjs(date).utc().format('DD/MM/YYYY')}</time>
      </p>

      <div className='flex gap-x-2 items-center justify-evenly'>
        <button
          className='hover:text-red-600 bg-red-500 py-1 px-4 rounded-sm'
          onClick={() => {
            deleteTask(_id)
          }}
        >
          Delete
        </button>
        <Link
          to={`/tasks/${_id}`}
          className='block hover:text-blue-600 bg-blue-500 py-1 px-4 rounded-sm'
        >
          Edit
        </Link>
      </div>
    </article>
  )
}

export default TaskCard
