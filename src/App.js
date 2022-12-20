import './App.css';
import Home from './Components/Home'
import ShopSelflax from './Components/ShopSelflax'
import Images from './Components/ShopSelflax'
import BookAStay from './Components/BookAStay'
import Amenities from './Components/Amenities'
import AroundUs from './Components/AroundUs'
import logo from './images/Original_logo1.png'
import { Link, Route, Routes, NavLink } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <img className="logoImage" src={logo} alt="SelflaxHomes-Logo" width="300" height="270" />
      <nav className="navBar">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Bookastay">Book A Stay</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/Bookastay" element={<BookAStay />} />

        {/* <Images /> */}
        {/* <AroundUs /> */}
        {/* <ShopSelflax /> */}
      </Routes>
    </div>
  );
}

export default App;
