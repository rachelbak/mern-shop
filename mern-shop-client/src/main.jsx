import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux"
import { store } from './app/store.js'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'

// הוספת הטוקן אם יש משתמש קיים
const savedUser = JSON.parse(localStorage.getItem("currentUser"));
if (savedUser?.token) {
  axios.defaults.headers.common["authorization"] = `Bearer ${savedUser.token}`;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)







