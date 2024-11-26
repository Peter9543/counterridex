import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counterstore from './assets/redux/Counterstore.js'
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')).render(
  <StrictMode>
<Provider store={Counterstore}>
  <App/>
  </Provider>   
  </StrictMode>
)

