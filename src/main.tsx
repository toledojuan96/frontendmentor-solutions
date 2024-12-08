import {JSX, StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './Index.css'
import {BrowserRouter, Route, Routes} from "react-router";

interface RoutePath{
    path: string;
    component: JSX.Element
}

const PATHS: RoutePath[] = [
    {
        path: '/',
        component: <App/>
    }
]





createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              {
                  PATHS.map( (route, index) =>{
                      return <Route key={index} path={route.path} element={route.component}/>
                  })
              }
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)
