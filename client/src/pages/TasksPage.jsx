import { useEffect } from 'react'
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
        <div key={task._id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  )
}

export default TasksPage
