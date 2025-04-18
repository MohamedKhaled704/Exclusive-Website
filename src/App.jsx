
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import './assets/styles/style.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import Form from './components/Form'
import Signup from './pages/Signup'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/products' element={<Products />} />
        <Route path='/form' element={<Form />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
