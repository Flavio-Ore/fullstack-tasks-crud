import { useContext } from 'react'
import { TaskContext } from '../contexts/TasksContext'

export const useTasks = () => {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error('useTasks must be used within an TaskProvider')
  }
  return {
    tasks: context.tasks,
    createTask: context.createTask,
    getTasks: context.getTasks,
    getTask: context.getTask,
    deleteTask: context.deleteTask,
    updateTask: context.updateTask
  }
}
