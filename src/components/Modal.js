import React from 'react';

const Modal = (props) => {

    const cancelHandler = () => {
    props.onCancel()
    }

    const confirmlHandler = () => {
        props.onConfirm()
    }

    return (

        <div className="modal">
        <p>Are you sure?</p>
        <button className="btn btn--alt" onClick={cancelHandler}>Cancel</button>
        <button className='btn' onClick={confirmlHandler}>Confirm</button>
        
    </div>
    );
};

export default Modal;