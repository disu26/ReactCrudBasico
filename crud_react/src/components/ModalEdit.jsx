import React from 'react'
import ReactDOM from 'react-dom';

const ModalEdit = ({ children }) => {
  return ReactDOM.createPortal(
    <div className='container mt-5'>
        {children}
    </div>,
    document.getElementById('modal')
  )
}

export default ModalEdit