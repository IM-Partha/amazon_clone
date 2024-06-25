import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './compo/Home';
import Navbar from './compo/Navbar';
import Productpage from './compo/Productpage';
import Searchproduct from './compo/Searchproduct';
import Checkout from './compo/Checkout';
import OrderSuccessful from './compo/OrderSuccessful';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/search' element={<Searchproduct/>} />
        <Route path='/Productpage/:id' element={<Productpage/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/OrderSuccessful' element={<OrderSuccessful/>} />
      </Routes>
    </>
  );
}

export default App;
