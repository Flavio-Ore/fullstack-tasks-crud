import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/* eslint-disable react/prop-types */
const SignErrors = ({ error }) => {
  const pathOnChange = useRef(false)
  const { pathname } = useLocation()

  console.log('HEHEHEHHE 👺 :>> ', pathOnChange.current)

  useEffect(() => {
    pathOnChange.current = true
  }, [pathname])

  if (pathOnChange.current) {
    pathOnChange.current = false
    return <div></div>
  }

  return (
    <div
      onChange={() => {
        console.log('hello :>> ', '')
      }}
      className='bg-red-500 text-white p-4 rounded-md mb-2 text-center'
    >
      <p>{error}</p>
    </div>
  )
}

export default SignErrors
