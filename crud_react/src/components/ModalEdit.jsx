import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";
import EditUserForm from './EditUserForm';

/**
 * Componente con el modal de editar, el cual se activa y desactiva según corresponda y contiene el 
 * formulario para editar usuarios.
 * 
 * @param {*} editing:Variable que indica si el modal se debe o no mostrar
 * @param {*} updateUser:Función para actualizar usuarios, la cual es enviada al formulario de editar usuarios.
 * @param {*} currentUser: Usuario que se está editando, esta información es enviada al formulario de editar usuarios.
 * @returns Modal que contiene el formulario de editar usuarios.
 * 
 * @author Dímar Andrey Suárez Hidalgo <dimar260212@gmail.com>
 */
const ModalEdit = ({updateUser, editing, currentUser}) => {
    return (
        <Modal isOpen={editing} >
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