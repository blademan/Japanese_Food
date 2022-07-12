import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import React from 'react';
import CartContextProvider from './store/CartContextProvider';

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
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
