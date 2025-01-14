import { RouterProvider, createBrowserRouter } from 'react-router'
import './App.css'
import { ROUTES } from './routes/routes'

const router = createBrowserRouter(ROUTES)

function App() {

  return (

   <>
    <RouterProvider router={router} />
   </>

  )
}

export default App
