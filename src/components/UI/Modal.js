import React from 'react';

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = () => {
  return {/* do reactdom portal magic to return modal overlay */}
};

export default Modal;
