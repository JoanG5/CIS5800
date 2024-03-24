import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/products" element={<h1>Products</h1>} />
          <Route path="/cart" element={<h1>Cart</h1>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
