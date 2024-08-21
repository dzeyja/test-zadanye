import { render } from 'react-dom'
import 'app/styles/index.scss'
import App from 'app/App'
import { Provider } from 'react-redux'
import { setupStore } from 'app/stores'
import { BrowserRouter } from 'react-router-dom'

const store = setupStore()

render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
