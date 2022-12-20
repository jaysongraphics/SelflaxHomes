import './App.css';
import Home from './Components/Home'
import ShopSelflax from './Components/ShopSelflax'
import Images from './Components/ShopSelflax'
import BookAStay from './Components/BookAStay'
import Amenities from './Components/Amenities'
import AroundUs from './Components/AroundUs'
import logo from './images/Original_logo1.png'
import { Route, Routes, NavLink, Link } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <a href="/"><img className="logoImage" src={logo} alt="SelflaxHomes-Logo" width="200" height="180" /></a>
      <nav className="navBar">
        <ul>
          <li>
            <NavLink to="/" style={{ textDecoration: 'none' }}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/Bookastay" style={{ textDecoration: 'none' }}>Book A Stay</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route exact path="/" index element={<Home />} />
        <Route path="/Bookastay" element={<BookAStay />} />

        {/* <Images /> */}
        {/* <AroundUs /> */}
        {/* <ShopSelflax /> */}
      </Routes>
    </div>
  );
}

export default App;
