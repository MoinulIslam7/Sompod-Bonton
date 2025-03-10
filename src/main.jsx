import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Contexts from './store/Context/Context'
import './index.css'
import Toast from './lib/Toaster/Toast.jsx'
import React from 'react';
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <Contexts>
      <App />
      <Toast />
    </Contexts>
  </HelmetProvider>

)
