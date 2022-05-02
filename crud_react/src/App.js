import { useState } from "react";
import UserTable from "./components/UserTable";
import { v4 as uuidv4 } from 'uuid';
import ModalEdit from "./components/ModalEdit";
import ModalAdd from "./components/ModalAdd";


function App() {

  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' }
  ]

  const [users, setUsers] = useState(usersData)

  const [adding, setAdding] = useState(false);

  //Agregar usuarios
  const [createUser, setCreateUser] = useState(false);


  const addUsers = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
    setAdding(false)
  }


  //Eliminar Usuarios
  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }

  //Editar Usuarios
  const [editing, setEditing] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    id: null, name: '', username: ''
  });

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id, name: user.name, username: user.username
    })
  }

  const updateUser = (id, updateUser) => {
    setEditing(false);

    setUsers(users.map(user => (user.id === id ? updateUser : user)))
  }

  return (
    <div className="container mt-5">
      <h1>Curso Basico React CRUD - Dímar Andrey Suárez Hidalgo</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable 
            users = {users} 
            deleteUser = {deleteUser} 
            editRow = {editRow}
            setAdding = {setAdding}
          />
        </div>
        <div>
          <div className="flex-large">
            <ModalEdit 
              updateUser = {updateUser} 
              editing={editing} 
              currentUser= {currentUser}
            />
          </div>
          <div className="flex-large">
            <ModalAdd 
              adding= {adding}
              addUsers = {addUsers}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
