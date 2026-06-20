import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Beginner from './beginner.tsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Advanced from './advanced.tsx'
import Intermediate from './intermediate.tsx'


//video help: https://www.youtube.com/watch?v=c02YoWR9gSY
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/beginner",
    element: <Beginner />,
  },
  {
    path: "/intermediate",
    element: <Intermediate />,
  },
  {
    path: "/advanced",
    element: <Advanced />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
