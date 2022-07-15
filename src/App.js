import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import Contacts from './components/Pages/Contacts';
import Footer from './components/Layout/Footer';
import About from './components/Pages/About';
import React from 'react';
import CartContextProvider from './store/CartContextProvider';

import { Routes, Route } from 'react-router-dom';

function App() {
  const [cartIsVisible, setCartIsVisible] = React.useState(false);

  const showHandler = () => {
    setCartIsVisible(true);
  };

  const closeHandler = () => {
    setCartIsVisible(false);
  };

  return (
    <CartContextProvider>
      {cartIsVisible && <Cart onClose={closeHandler} />}
      <Header onOpen={showHandler} />
      <main>
        <Routes>
          <Route path="/" element={<Meals />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </CartContextProvider>
  );
}

export default App;
