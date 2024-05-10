
import React, { useState } from "react";
import Home from "./routes/Home";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Cart from "./routes/Cart";
import PlaceOrder from "./routes/PlaceOrder";
import MyOrders from "./routes/MyOrder";

function App () {

  const [showLogin,setShowLogin] = useState(false);

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<PlaceOrder/>}/>
          <Route path='/myorder' element={<MyOrders/>}/>

        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
