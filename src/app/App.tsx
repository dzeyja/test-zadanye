import { Navbar } from 'widgets/Navbar'
import AppRouter from './providers/router/AppRouter'
import { Footer } from 'widgets/Footer'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <AppRouter />
      <Footer />
    </div>
  )
}

export default App
