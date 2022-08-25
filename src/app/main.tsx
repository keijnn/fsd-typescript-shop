//import modules
import React from 'react'
import { createRoot } from 'react-dom/client'

//import components
import { App } from './App'

//import styles
import './styles/main.css'

const reactRoot = createRoot(
  document.getElementById('root')!,
)

reactRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
