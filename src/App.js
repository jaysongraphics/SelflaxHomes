import './App.css';
import Home from './Components/Home'
import Footer from './Components/Footer'
import Images from './Components/Images'
import Nav from './Components/Nav'
import BookAStay from './Components/BookAStay'
import AroundUs from './Components/AroundUs'
import logo from './images/Original_logo1.png'
import { Route, Routes } from 'react-router-dom'
import Amenities from './Components/Amenities'

function App() {
  return (
    <div className="App">
      <a href="/"><img className="logoImage" src={logo} alt="SelflaxHomes-Logo" width="200" height="180" /></a>
      <Nav />
      <Routes className='routes'>
        <Route exact path="/" index element={<Home />} />
        <Route path="/Bookastay" element={<BookAStay />} />
        <Route path="/Images" element={<Images />} />
        <Route path="/AroundUs" element={<AroundUs />} />
        <Route path="/Amenities" element={<Amenities />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
