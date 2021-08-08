import React,{useState} from 'react';
import Backdrop from './Backdrop';
import Modal from './Modal';

const Todo = (props) => {

    const [showModal, setShowModal] = useState(false);

    function deleteHandler () {
      setShowModal(true)
    }

    function setShowModalHandler() {
        setShowModal(true)
    }

    function closeModalHanbdler(){
        setShowModal(false)
    }

    
    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
            <button className='btn' onClick={deleteHandler}>

                Delete
            </button>

            </div>
            {showModal && <Backdrop onCancel={closeModalHanbdler}/>}
            {showModal && <Modal text='Are you sure?' onCancel={closeModalHanbdler} onConfirm={closeModalHanbdler}/>}
            
        </div>
    );
};

export default Todo;