import CartIcon from '../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';
import { useContext, useEffect, useState } from 'react';

export default function HeaderCartButton(props) {
  const [isBtnAnimated, setIsBtnAnimated] = useState(false);
  const cartContext = useContext(CartContext);

  const cartItemNumber = cartContext.totalCart;

  const btnClasses = `${styles.button} ${isBtnAnimated ? styles.bump : ''}`;

  useEffect(() => {
    if (cartContext.items.length === 0) {
      return;
    }
    setIsBtnAnimated(true);

    const timer = setTimeout(() => {
      setIsBtnAnimated(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartContext.items]);

  return (
    <button onClick={props.onOpen} className={btnClasses}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={styles.badge}>{cartItemNumber}</span>
    </button>
  );
}
