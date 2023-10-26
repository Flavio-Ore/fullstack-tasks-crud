import { createContext, useState } from 'react'
import {
  createTaskRequest,
  deleteTaskRequest,
  getTaskRequest,
  getTasksRequest,
  updateTaskRequest
} from '../api/task'

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

  const getTask = async id => {
    try {
      const res = await getTaskRequest(id)
      console.log('res getTask :>> ', res)
      return res.data
    } catch (error) {
      console.log('error getTask :>> ', error)
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

  const deleteTask = async id => {
    try {
      const res = await deleteTaskRequest(id)
      console.log('res deleteTask :>> ', res)
      if (res.status === 204) {
        const newTasks = tasks.filter(task => task._id !== id)
        setTasks(newTasks)
      }
    } catch (error) {
      console.log('error deleteTask :>> ', error)
    }
  }
  const updateTask = async (id, task) => {
    try {
      const res = await updateTaskRequest(id, task)
      console.log('res updateTask :>> ', res)
    } catch (error) {
      console.log('error updateTask :>> ', error)
    }
  }
  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        getTasks,
        getTask,
        deleteTask,
        updateTask
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
