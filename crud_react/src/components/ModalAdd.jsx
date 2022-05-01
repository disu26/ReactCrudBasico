import React from 'react'
import ReactDOM from 'react-dom';

const ModalAdd = ({ children }) => {
  return ReactDOM.createPortal(
    <div className='container mt-5'>
        {children}
    </div>,
    document.getElementById('add')
  )
}

export default ModalAdd