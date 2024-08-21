import { Navbar } from 'widgets/Navbar'
import AppRouter from './providers/router/AppRouter'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <AppRouter />
    </div>
  )
}

export default App
