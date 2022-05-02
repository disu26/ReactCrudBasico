import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";
import EditUserForm from './EditUserForm';

const ModalEdit = ({updateUser, editing, currentUser}) => {
    return (
        <Modal isOpen={editing}>
            <ModalHeader>
                <div><h3>Editar Usuario</h3></div>
            </ModalHeader>
            <ModalBody>
                <EditUserForm currentUser={currentUser} updateUser={updateUser} />
            </ModalBody>
        </Modal>
    )
}

export default ModalEdit