import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import Aos from 'aos'
import { useEffect } from 'react'


function App() {
  useEffect (() => {
    Aos.init()
  }, [])

  return (
    <RouterProvider router={router} />
  )
}

export default App