import { useAuth } from '../hooks/useAuth'

const TasksPage = () => {
  const { user } = useAuth()
  console.log('user :>> ', user)
  return (
    <div>
      <p>Tasks</p>
    </div>
  )
}

export default TasksPage
