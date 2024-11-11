import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homePage';
import ProductsListPage from './pages/productsListPage';
import ProductDetails from './pages/productDetails';
import CartPage from './pages/cartPage';
import AccountPage from './pages/accountPage';
import NavBar from './components/ui/navBar'
import Footer from './components/ui/Footer'

const App = () => {


  return (
    <>
    <NavBar></NavBar>
    <Footer></Footer>
    </>
  )
}

export default App
