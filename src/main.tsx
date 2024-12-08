import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './Index.css'
import {BrowserRouter, Route, Routes} from "react-router";
import {PATHS} from "./constants/elements.tsx";






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
