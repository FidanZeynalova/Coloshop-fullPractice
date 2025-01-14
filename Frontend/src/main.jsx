import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './App/store.js'
import BasketContextProvider from './context/BasketContext.jsx'

createRoot(document.getElementById('root')).render(
<BasketContextProvider>
<Provider store={store}>
    <App />
  </Provider>
</BasketContextProvider>
)
