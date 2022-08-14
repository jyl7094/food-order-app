import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <>
      <div className={styles.backdrop} onClick={props.onClose} />
      <div className={styles.modal}>
        <div className={styles.content}>{props.children}</div>
      </div>
    </>,
    document.getElementById('modal-root')
  );
};

export default Modal;
