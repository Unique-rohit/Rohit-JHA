import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ToastContainer} from 'react-toastify';
import AuthProvider from './Provider/AuthProvider.jsx';
import Service_API_Provider from './Provider/Service_API_Provider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <AuthProvider>
    <Service_API_Provider>
    <App />
    </Service_API_Provider>
    </AuthProvider>
    <ToastContainer/>
  </>,
)