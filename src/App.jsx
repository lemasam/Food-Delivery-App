
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <div className='app'>
        <Navbar />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
      </Routes>
    </div >
      <Footer />
    </>
    
  )
}


export default App

// App.js
import React from 'react';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      {/* Render the Header component */}
      <Header />
      {/* Other components and content */}
    </div>
  );
}

export default App;

