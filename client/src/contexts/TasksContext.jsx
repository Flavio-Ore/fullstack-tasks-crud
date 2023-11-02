import { createContext } from 'react'
import { useTasksReducer } from '../hooks/useTasksReducer'

export const TaskContext = createContext()

// eslint-disable-next-line react/prop-types
export const TaskProvider = ({ children }) => {
  const {
    errors,
    tasks,
    createTask,
    getTask,
    getTasks,
    deleteTask,
    updateTask
  } = useTasksReducer()
  return (
    <TaskContext.Provider
      value={{
        errors,
        tasks,
        createTask,
        getTask,
        getTasks,
        deleteTask,
        updateTask
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
