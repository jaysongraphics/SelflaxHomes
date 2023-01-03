import './App.css';
import Home from './Components/Home'
import Footer from './Components/Footer'
import Images from './Components/Images'
import BookAStay from './Components/BookAStay'
import AroundUs from './Components/AroundUs'
import logo from './images/Original_logo1.png'
import { Route, Routes, NavLink } from 'react-router-dom'


function App() {
  return (
    <>
      <div className="App">
        <a href="/"><img className="logoImage" src={logo} alt="SelflaxHomes-Logo" width="200" height="180" /></a>
        {/* <Footer /> */}
      </div>
      <nav className="navBar">
        <ul>
          <li>
            <NavLink to="/" style={{ textDecoration: 'none' }}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/Bookastay" style={{ textDecoration: 'none' }}>Book A Stay</NavLink>
          </li>
          <li>
            <NavLink to="/Images" style={{ textDecoration: 'none' }}>Images</NavLink>
          </li>
          <li>
            <NavLink to="/AroundUs" style={{ textDecoration: 'none' }}>Around Us</NavLink>
          </li>
          {/* <a href="https://www.google.com/">Shop Seflax</a> */}
        </ul>
      </nav>
      <div className="routes">
        <Routes>
          <Route exact path="/" index element={<Home />} />
          <Route path="/Bookastay" element={<BookAStay />} />
          <Route path="/Images" element={<Images />} />
          <Route path="/AroundUs" element={<AroundUs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
