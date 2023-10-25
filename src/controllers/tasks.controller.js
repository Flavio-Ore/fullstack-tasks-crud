import Task from '../models/task.model.js'

export const createTask = async (req, res) => {
  const { title, description, date } = req.body
  console.log('req.body :>> ', {
    title,
    description,
    date,
    userId: req.user.id
  })
  const newTask = new Task({
    title,
    description,
    date,
    user: req.user.id
  })
  const savedTask = await newTask.save()
  res.json(savedTask)
}

export const getTasks = async (req, res) => {
  console.log('req.user :>> ', req.user)
  const tasks = await Task.find({
    user: req.user.id
  }).populate('user')
  res.json(tasks)
}
export const getTask = async (req, res) => {
  const task = await Task.findById(req.params.id).populate('user')
  if (!task) return res.status(404).json({ errors: ['Task not found'] })
  res.json(task)
}

export const updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true // to return the new task instead of the old one
  })
  if (!task) return res.status(404).json({ erros: ['Task not found'] })
  res.json(task)
}
export const deleteTask = async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id)
  if (!task) return res.status(404).json({ errors: ['Task not found'] })
  return res.sendStatus(204)
}
