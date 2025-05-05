import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from './Layout/MainLayout'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <MainLayout></MainLayout>
  </StrictMode>,
)
