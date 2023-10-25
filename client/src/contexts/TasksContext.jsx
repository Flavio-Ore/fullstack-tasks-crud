import { createContext, useState } from 'react'
import { createTaskRequest, getTasksRequest } from '../api/task'

export const TaskContext = createContext()

// eslint-disable-next-line react/prop-types
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])

  const getTasks = async () => {
    try {
      const res = await getTasksRequest()
      setTasks(res.data)
      console.log('await getTasksRequest():>> ', res)
    } catch (error) {
      console.log('error getTasks :>> ', error)
    }
  }

  const createTask = async task => {
    try {
      const res = await createTaskRequest(task)
      console.log('res createTaskRequest :>> ', res)
    } catch (error) {
      console.log('error createTask :>> ', error)
    }
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        getTasks
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
