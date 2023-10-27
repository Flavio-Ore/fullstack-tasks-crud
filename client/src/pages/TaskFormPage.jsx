import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import SubmitBtn from '../components/SubmitBtn'
import { useTasks } from '../hooks/useTasks'
dayjs.extend(utc)

const TaskFormPage = () => {
  const { updateTask, getTask, createTask } = useTasks()
  const { register, handleSubmit, setValue, getValues } = useForm()
  const params = useParams()
  const navigate = useNavigate()

  const onSubmit = handleSubmit(async data => {
    const formatedData = {
      ...data,
      date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format()
    }

    if (params.id) updateTask(params.id, formatedData)
    else createTask(formatedData)

    navigate('/tasks')
  })

  const loadTask = async id => {
    if (!params.id) return
    const task = await getTask(id)
    console.log('task :>> ', task)
    setValue('title', task.title)
    setValue('description', task.description)
    setValue('date', dayjs(task.date).utc().format('DD/MM/YYYY'))
  }

  useEffect(() => {
    loadTask(params.id)
    // eslint-disable-next-line
  }, [])

  return (
    <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
      <h2 className='text-2xl font-bold mb-4'>
        Edit task: {getValues('title')}
      </h2>

      <form onSubmit={onSubmit}>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          placeholder='Title'
          {...register('title')}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          autoFocus
        />
        <label htmlFor='description'>Description</label>
        <textarea
          rows='3'
          placeholder='Description...'
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          {...register('description')}
        />
        <label htmlFor='date'>Date</label>
        <input
          type='date'
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          {...register('date')}
        />
        <SubmitBtn text={'Submit'} />
      </form>
    </div>
  )
}

export default TaskFormPage
