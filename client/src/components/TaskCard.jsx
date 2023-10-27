import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { Link } from 'react-router-dom'
import { useTasks } from '../hooks/useTasks'
dayjs.extend(utc)

// eslint-disable-next-line
const TaskCard = ({ title, description, date, _id }) => {
  const { deleteTask } = useTasks()
  return (
    <article className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
      <header className='flex justify-between'>
        <h2 style={{ textWrap: 'balance' }} className='text-2xl font-bold'>
          {title}
        </h2>

        <div className='flex gap-x-2 items-center'>
          <button
            className='hover:text-red-600 bg-red-500 py-1 px-4 rounded-sm'
            onClick={() => {
              deleteTask(_id)
            }}
          >
            Delete
          </button>
        </div>
        <Link
          to={`/tasks/${_id}`}
          className='hover:text-blue-600 bg-blue-500 py-1 px-4 rounded-sm'
        >
          Edit
        </Link>
      </header>

      <p className='text-slate-300'>{description}</p>
      <p>
        <small className='text-slate-400'>
          Deadline: {dayjs(date).utc().format('DD/MM/YYYY')}
        </small>
      </p>
    </article>
  )
}

export default TaskCard
