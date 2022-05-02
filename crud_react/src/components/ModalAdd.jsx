import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import AddUserForm from './AddUserForm'
import {
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";

const ModalAdd = ({adding, addUsers}) => {
  return (
    <Modal isOpen={adding}>
        <ModalHeader>
            <div><h3>Añadir Usuario</h3></div>
        </ModalHeader>
        <ModalBody>
            <AddUserForm addUsers={addUsers} />
        </ModalBody>
    </Modal>
  )
}

export default ModalAdd