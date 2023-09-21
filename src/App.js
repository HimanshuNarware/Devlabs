import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About';
import Footer from './Component/Footer';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import BookMark from './Component/BookMark';
function App() {

  return(
    <>
    <Navbar/>

    <Routes>
    
    <Route path='/' element={<Home/>}></Route>
    <Route path='/bookmark' element={<BookMark/>}></Route>
    <Route path='/about' element={<About/>}></Route>

</Routes>
    <Footer/>
    </>
  )
 
}

export default App;
