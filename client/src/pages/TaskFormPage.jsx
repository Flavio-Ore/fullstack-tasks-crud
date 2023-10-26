import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { useTasks } from '../hooks/useTasks'

const TaskFormPage = () => {
  const { updateTask, getTask, createTask } = useTasks()
  const { register, handleSubmit, setValue } = useForm()
  const params = useParams()
  const navigate = useNavigate()

  const onSubmit = handleSubmit(async data => {
    if (params.id) {
      updateTask(params.id, data)
    } else {
      createTask(data)
    }
    navigate('/tasks')
  })

  const loadTask = async id => {
    if (!params.id) return
    const task = await getTask(id)
    console.log('task :>> ', task)
    setValue('title', task.title)
    setValue('description', task.description)
  }

  useEffect(() => {
    loadTask(params.id)
  }, [])

  return (
    <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Title'
          {...register('title')}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          autoFocus
        />
        <textarea
          rows='3'
          placeholder='Description...'
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          {...register('description')}
        />

        <button className='hover:text-zinc-600 bg-cyan-600 py-1 px-4 rounded-sm  '>
          Save
        </button>
      </form>
    </div>
  )
}

export default TaskFormPage
