import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import FirstApp from './FirstApp.jsx'
// import './index.css'

function App() {
  return (
    <div>
      <h1>Hola Mundo!</h1>
    </div>
  )
}	

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirstApp />
  </StrictMode>,
)
