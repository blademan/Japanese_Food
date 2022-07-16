import PromoText from '../../Meals/PromoText';
import FormInputs from './FormInputs';
import styles from './contacts.module.css';

import { useState } from 'react';

export default function Contacts() {
  const [values, setValues] = useState({
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: '',
  });

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      errorMessage:
        "Username must be 3-16 characters and shouldn't include any special characters!",

      pattern: '^[A-Za-z0-9]{3,16}$',
    },

    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'It should be a valid email address!',
      label: 'Email',
      required: true,
      autoComplete: 'email',
    },

    {
      id: 3,
      name: 'birthday',
      type: 'date',
      placeholder: 'Birthday',
      label: 'Birthday',
    },
    {
      id: 4,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage:
        'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
      label: 'Password',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
      autoComplete: 'new-password',
    },
    {
      id: 5,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      errorMessage: "Passwords don't match!",
      label: 'Confirm Password',
      pattern: values.password,
      required: true,
      autoComplete: 'new-password',
    },
  ];

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <PromoText />
      <h1 className={styles.title}>Contacts</h1>

      <div className="container">
        <form className={styles.form} autoComplete="off" onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <FormInputs key={input.id} {...input} value={values[input.name]} onChange={onChange} />
          ))}
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
