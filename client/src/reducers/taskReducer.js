export const initialTasksState = []
export const TASKS_ACTIONS = {
  READ_TASKS: 'READ_TASKS',
  DELETE_TASK: 'DELETE_TASK'
}
export const taskReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action
  if (actionType === TASKS_ACTIONS.READ_TASKS) {
    console.log('actionPayload :>> ', actionPayload)
    return actionPayload
  }
  if (actionType === TASKS_ACTIONS.DELETE_TASK) {
    console.log('actionPayload :>> ', actionPayload)
    return state.filter(task => task._id !== actionPayload)
  }
  return state
}
