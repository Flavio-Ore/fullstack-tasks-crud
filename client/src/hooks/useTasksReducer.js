import { useReducer, useState } from 'react'
import {
  createTaskRequest,
  deleteTaskRequest,
  getTaskRequest,
  getTasksRequest,
  updateTaskRequest
} from '../api/task'
import {
  TASKS_ACTIONS,
  initialTasksState,
  taskReducer
} from '../reducers/taskReducer'

export function useTasksReducer () {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasksState)
  const [errors, setErrors] = useState([])

  const getTasks = async () => {
    try {
      const res = await getTasksRequest()
      console.log('await getTasksRequest():>> ', res)
      return dispatch({ type: TASKS_ACTIONS.READ_TASKS, payload: res.data })
    } catch (error) {
      console.log('error getTasks :>> ', error)
      setErrors(error.response.data.errors)
    }
  }

  const getTask = async id => {
    try {
      const res = await getTaskRequest(id)
      console.log('res getTask :>> ', res)

      return res.data
    } catch (error) {
      console.log('error getTask :>> ', error)
      setErrors(error.response.data.errors)
    }
  }

  const createTask = async task => {
    try {
      const res = await createTaskRequest(task)
      console.log('res createTaskRequest :>> ', res)
    } catch (error) {
      console.log('error createTask :>> ', error)
      setErrors(error.response.data.errors)
    }
  }

  const deleteTask = async id => {
    try {
      const res = await deleteTaskRequest(id)
      console.log('res deleteTask :>> ', res)
      if (res.status === 204)
        return dispatch({ type: TASKS_ACTIONS.DELETE_TASK, payload: id })
    } catch (error) {
      console.log('error deleteTask :>> ', error)
      setErrors(error.response.data.errors)
    }
  }
  const updateTask = async (id, task) => {
    try {
      const res = await updateTaskRequest(id, task)
      console.log('res updateTask :>> ', res)
    } catch (error) {
      console.log('error updateTask :>> ', error)
      setErrors(error.response.data.errors)
    }
  }
  return {
    errors,
    tasks,
    getTask,
    getTasks,
    createTask,
    deleteTask,
    updateTask
  }
}
