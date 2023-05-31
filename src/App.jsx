import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './components/Main'
import Hero from './components/Home/Hero'
import Demos from './Routes/Demos'
import About from './Routes/About'
import Blogs from './Routes/Blogs'
import Pages from './Routes/Pages'
import Contact from './Routes/Contact'

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Hero></Hero>
        },
        {
          path:'/demos',
          element:<Demos></Demos>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/blogs',
          element:<Blogs></Blogs>
        },
        {
          path:'/pages',
          element:<Pages></Pages>
        },
        {
          path:'/contact',
          element:<Contact></Contact>
        }
      ]
    }
  ])
  return (
      <div>
        <RouterProvider router={router}></RouterProvider>
      </div>
  )
}

export default App
