import { useEffect } from 'react'
import TaskCard from '../components/TaskCard'
import { useTasks } from '../hooks/useTasks'

const TasksPage = () => {
  const { tasks, getTasks } = useTasks()

  useEffect(() => {
    getTasks()
  }, [])

  if (tasks.length === 0) return <h1>No tasks</h1>

  return (
    <div>
      {tasks.map(task => (
        <TaskCard key={task._id} {...task} />
      ))}
    </div>
  )
}

export default TasksPage
