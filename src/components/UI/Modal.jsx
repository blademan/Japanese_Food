import styles from './Modal.module.css';
import React from 'react';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return <div onClick={props.onClose} className={styles.backdrop}></div>;
};
const ModalWindow = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

export default function Modal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(<ModalWindow>{props.children}</ModalWindow>, portalElement)}
    </React.Fragment>
  );
}
