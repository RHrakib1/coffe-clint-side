import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Addcoffe from './Component/Addcoffe.jsx';
import Update from './Component/Update.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: '/addcoffe',
    element: <Addcoffe></Addcoffe>,
    loader: () => fetch('http://localhost:3000/coffe')
  },
  {
    path: "/update/:id",
    element: <Update></Update>,
    loader: ({ params }) => fetch(`http://localhost:3000/coffe/${params.id}`)
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
