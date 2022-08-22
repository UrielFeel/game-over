import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style/index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename='/game-over/'>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
