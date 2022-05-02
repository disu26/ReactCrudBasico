import React, { Fragment } from 'react';

/**
 * Componente con toda la información de los usuarios y que contiene los botones para añadir, editar y
 * eliminar usuarios.
 * 
 * @param {*} props 
 * @returns Fragment que contiene la estructura principal de la página.
 * 
 * @author Dímar Andrey Suárez Hidalgo <dimar260212@gmail.com>
 */
const UserTable = (props) => {
    return ( 
        <Fragment>
            <button className="btn btn-primary" onClick={() => {props.setAdding(true)}}>Nuevo Usuario</button>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {
                        props.users.length > 0 ?
                        props.users.map(user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>
                                <button 
                                    className="btn btn-success"
                                    onClick={() => {props.editRow(user)}}
                                >Edit</button>
                                {"  "}
                                <button 
                                    className="btn btn-danger"
                                    onClick={() => {props.deleteUser(user.id)}}
                                >Delete</button>
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan={3}> No Users </td>
                            </tr>
                        )
                    }
                
                </tbody>
            </table>
        </Fragment>
    );
}
 
export default UserTable;