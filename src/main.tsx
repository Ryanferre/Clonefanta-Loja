import  ReactDOM  from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Abolt from './Pages/Abolt/Abolt.tsx'
import Home from './home/Home.tsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { ClerkProvider } from "@clerk/clerk-react";
import Login from './home/componentes/Login/Login.tsx'

const routerPage= createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{
      path: '/',
      element: <Home />
    },
    {
      path: '/about',
      element: <Abolt />
    },
  {
    path: '/login',
    element: <Login />
  }]
  }
])

const clerkFrontendApi = "https://enjoyed-husky-33.clerk.accounts.dev";
const publishableKey = "pk_test_ZW5qb3llZC1odXNreS0zMy5jbGVyay5hY2NvdW50cy5kZXYk"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ClerkProvider frontendApi={clerkFrontendApi} publishableKey={publishableKey}>
    <RouterProvider router={routerPage} />
  </ClerkProvider>
)
