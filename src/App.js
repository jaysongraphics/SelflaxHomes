import './App.css';
import Home from './Components/Home'
import ShopSelflax from './Components/ShopSelflax'
import BookAStay from './Components/BookAStay'
import Amenities from './Components/Amenities'
import AroundUs from './Components/AroundUs'

function App() {
  return (
    <div className="App">
      <Home />
      <BookAStay />
      <Amenities />
      <AroundUs />
      <ShopSelflax />
    </div>
  );
}

export default App;
