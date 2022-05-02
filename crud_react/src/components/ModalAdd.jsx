import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import AddUserForm from './AddUserForm'
import {
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";

/**
 * Componente con el modal de añadir, el cual se activa y desactiva según corresponda y contiene el 
 * formulario para añadir usuarios.
 * 
 * @param {*} adding:Variable que indica si el modal se debe o no mostrar
 * @param {*} addUsers:Función para añadir usuarios, la cual es enviada al formulario de añadir usuarios.
 * @returns Modal que contiene el formulario de añadir usuarios.
 * 
 * @author Dímar Andrey Suárez Hidalgo <dimar260212@gmail.com>
 */
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