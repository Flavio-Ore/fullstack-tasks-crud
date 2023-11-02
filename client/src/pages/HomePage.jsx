import { useEffect } from 'react'

const HomePage = () => {
  useEffect(() => {
    window.document.title = 'Home'
  }, [])

  return <h2 className='text-4xl font-bold text-center'>HOME 🏠</h2>
}

export default HomePage
