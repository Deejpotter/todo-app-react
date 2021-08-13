import React from "react";
import Container from '../Util/Container';

function Modal({ children, dispatch }) {
    return (
        <Container ext='modal'>
            <div className='modal-content shadow radius'>
                {children}
                <div className='modal-footer'>
                    <button className='shadow radius' onClick={() => dispatch({ type: 'closeModal' })}>Cancel</button>
                    <button className='shadow radius red' onClick={() => dispatch({ type: 'deleteEverything' })}>OK</button>
                </div>
            </div>
        </Container>
    );
}

export default Modal;