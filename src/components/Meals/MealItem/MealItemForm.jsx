import styles from './MealItemForm.module.css';
import Input from '../../UI/Input';

import { useRef, useState } from 'react';

export default function MealItemForm(props) {
  const [isAmountValid, setIsAmountValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const inputAmount = amountInputRef.current.value;
    if (inputAmount.trim().length === 0 || +inputAmount < 1 || +inputAmount > 10) {
      setIsAmountValid(false);
      return;
    }

    props.onAddToCart(+inputAmount);
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <Input
        className={styles.input}
        ref={amountInputRef}
        label={'count'}
        input={{
          id: props.id,
          type: 'number',
          min: '1',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>Add</button>
      {!isAmountValid && <p>Add 1 to 10</p>}
    </form>
  );
}
