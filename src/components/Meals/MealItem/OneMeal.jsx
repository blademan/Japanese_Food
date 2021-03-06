import React from 'react';
import styles from './OneMeal.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';
import { useContext } from 'react';

export default function OneMeal(props) {
  const cartContext = useContext(CartContext);

  const formattedPrice = `$${props.price.toFixed(2)}`;

  const onAddToCartHandler = (amount) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={styles.meal}>
      <div>
        <h5>{props.name}</h5>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{formattedPrice}</div>
      </div>
      <MealItemForm onAddToCart={onAddToCartHandler} id={props.id} />
    </li>
  );
}
