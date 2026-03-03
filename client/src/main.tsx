import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' 
import App from './App.tsx'

// Renderiza o componente App dentro do elemento com id 'root'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
