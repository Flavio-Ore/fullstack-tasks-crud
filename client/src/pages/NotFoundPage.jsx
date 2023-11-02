import { useEffect } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useTasks } from '../hooks/useTasks'

const NotFoundPage = () => {
  const { errors: tasksError } = useTasks()
  const { errors: authError } = useAuth()

  useEffect(() => {
    window.document.title = '404 - Not Found'
  }, [])

  return (
    <article className='flex flex-col items-center bg-zinc-700 my-3  justify-between py-5 px-10'>
      <h2 className='font-bold text-2xl'>404 - Page not found</h2>
      <p className=''>{tasksError || authError || ''}</p>
    </article>
  )
}

export default NotFoundPage
