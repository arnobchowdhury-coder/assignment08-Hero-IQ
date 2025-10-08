import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import './index.css'
import { RouterProvider } from "react-router/dom";
import Home from './Components/Pages/Home.jsx';
import AllApps from './Components/Pages/AllApps.jsx';
import AppDetails from './Components/Pages/AppDetails.jsx';
import Root from './Root.jsx';
import axios from 'axios';
import Loading from './Components/Loading/Loading.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    hydrateFallbackElement: <Loading></Loading>,
    children: [
      {
        index: true,
        Component: Home,
        loader: async () => (await axios("/public/hero_data.json")).data,

      },
      {
        path: "/apps",
        loader: async () => (await axios("/public/hero_data.json")).data,
        Component: AllApps,
      },
      {
        path: "/apps/:id",
        loader: async () => (await axios("/public/hero_data.json")).data,
        Component: AppDetails,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
