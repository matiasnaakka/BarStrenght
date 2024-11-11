import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import AccountPage from './pages/AccountPage';
import NavBar from './components/ui/navBar'
import Footer from './components/ui/Footer'

function App() {


  return (
    <>
    <NavBar></NavBar>
    <Footer></Footer>
    </>
  )
}

export default App
