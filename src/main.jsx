import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStyles from '~/components/GlobalStyles/index.js'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import store from './store/ReduxStore'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <GlobalStyles >
          <Routes>
            <Route path = "*" element={<App />} />
          </Routes>
        </GlobalStyles>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
