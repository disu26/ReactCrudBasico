import { useState } from "react";
import UserTable from "./components/UserTable";
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";
import ModalEdit from "./components/ModalEdit";


function App() {

  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' }
  ]

  const [users, setUsers] = useState(usersData)

  //Agregar usuarios
  const addUsers = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }

  //Eliminar Usuarios
  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }

  //Editar Usuarios
  const [editing, setEditing] = useState(false);

  const [modalEdit, setModalEdit] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    id: null, name: '', username: ''
  });

  const editRow = (user) => {
    setModalEdit(true);
    setCurrentUser({
      id: user.id, name: user.name, username: user.username
    })
  }

  const updateUser = (id, updateUser) => {
    setModalEdit(false);

    setUsers(users.map(user => (user.id == id ? updateUser : user)))
  }

  return (
    <div className="container mt-5">
      <h1>Curso Basico React CRUD - Dímar Andrey Suárez Hidalgo</h1>
      <div className="flex-row mt-5">
        <div className="flex-large">
          {!!modalEdit && (
              <ModalEdit>
                <EditUserForm 
                    currentUser = {currentUser}
                    updateUser = {updateUser}
                />
              </ModalEdit>
            )
          }
        </div>
      </div>
      <div className="flex-row">
        
          {/*
            editing ? (
              <div>
                <h2>Edit user</h2>
                <EditUserForm 
                  currentUser = {currentUser}
                  updateUser = {updateUser}
                />
              </div>
            ) : (
              <div>
                  <h2>Add user</h2>
                  <AddUserForm addUsers = {addUsers}/>
              </div>
            )
            */}
        <div className="flex-large">
          <h2>Users</h2>
          <UserTable 
            users = {users} 
            deleteUser = {deleteUser} 
            editRow = {editRow}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
