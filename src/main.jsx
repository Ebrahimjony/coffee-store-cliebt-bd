import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AddCoffee from './Components/AddCoffee.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import UpdateCoffee from './Components/updateCoffee.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    loader:()=>fetch('http://localhost:5000/coffees'),
    children: [
      {
        path: "/add",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/update",
        element:<UpdateCoffee></UpdateCoffee>
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
