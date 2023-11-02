import { useEffect } from 'react'
import TaskCard from '../components/TaskCard'
import { useTasks } from '../hooks/useTasks'

const TasksPage = () => {
  const { tasks, getTasks } = useTasks()
  console.log('tasks :>> ', tasks)
  useEffect(() => {
    getTasks()

    window.document.title = 'Tasks'
  }, [])

  if (tasks.length === 0)
    return <h2 className='text-2xl font-bold'>No tasks</h2>

  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-1'>
      {tasks.map(task => (
        <TaskCard key={task._id} {...task} />
      ))}
    </div>
  )
}

export default TasksPage
