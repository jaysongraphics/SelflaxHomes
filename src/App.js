import './App.css';
import Home from './Components/Home'
import Footer from './Components/Footer'
import Images from './Components/Images'
import BookAStay from './Components/BookAStay'
import AroundUs from './Components/AroundUs'
import logo from './images/Original_logo1.png'
import { Route, Routes, NavLink } from 'react-router-dom'
import Amenities from './Components/Amenities'

function App() {
  return (
    <>
      <div className="App">
        <a href="/"><img className="logoImage" src={logo} alt="SelflaxHomes-Logo" width="200" height="180" /></a>
        <nav className="navBar">
          <ul>
            <li>
              <NavLink to="/" style={{ textDecoration: 'none' }}>Home</NavLink>
            </li>
            <li>
              <NavLink type="button" className="btn btn-dark" to="/Bookastay" style={{ textDecoration: 'none' }}>Book A Stay</NavLink>
            </li>
            <li>
              <NavLink type="button" className="btn btn-dark" to="/Images" style={{ textDecoration: 'none' }}>Images</NavLink>
            </li>
            <li>
              <NavLink type="button" className="btn btn-dark" to="/AroundUs" style={{ textDecoration: 'none' }}>Around Us</NavLink>
            </li>
            <li>
              <NavLink type="button" className="btn btn-dark" to="/Amenities" style={{ textDecoration: 'none' }}>Amenities</NavLink>
            </li>
            {/* <a href="https://www.google.com/">Shop Seflax</a> */}
          </ul>
        </nav>
        <Routes className='routes'>
          <Route exact path="/" index element={<Home />} />
          <Route path="/Bookastay" element={<BookAStay />} />
          <Route path="/Images" element={<Images />} />
          <Route path="/AroundUs" element={<AroundUs />} />
          <Route path="/Amenities" element={<Amenities />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
