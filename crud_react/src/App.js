import { useState } from "react";
import UserTable from "./components/UserTable";
import { v4 as uuidv4 } from 'uuid';
import ModalEdit from "./components/ModalEdit";
import ModalAdd from "./components/ModalAdd";
import { useLocalStorage } from "./components/useLocalStorage";

/**
 * Función principal de la aplicación del crud con react.
 * 
 * @returns Estructura básica de la página.
 * 
 * @author Dímar Andrey Suárez Hidalgo <dimar260212@gmail.com>
 */
function App() {
  /**
   * Se crea un array con la información de 3 usuarios.
   */
  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' }
  ]

  /**
   * Se hace uso del localStorage y se recibe un item, que llamaremos users y un método para guardar saveUsers.
   */
  const{
    item: users,
    saveItem: saveUsers,
  } = useLocalStorage('USERS_V1', usersData);

  /**
   * Se hace uso del useState para crear una variable que indica si se debe mostrar o no el modal de añadir
   * usuarios.
   */
  const [adding, setAdding] = useState(false);

  /**
   * Método para añadir usuarios,este genera un id y hace uso del método del Local Storage.
   * @param {} user 
   */
  const addUsers = (user) => { 
    user.id = uuidv4()
    saveUsers([...users, user]);
    setAdding(false)
  }


  /**
   * Método para eliminar usuarios
   * 
   * @param {*} id 
   */
  const deleteUser = (id) => {
    saveUsers(users.filter(user => user.id !== id))
  }

  /**
   * Se hace uso del useState para crear una variable que indica si se debe o no mostrar 
   * el modal para editar
   */
  const [editing, setEditing] = useState(false);

  /**
   * Se hace uso del useState para guardar la información del usuario que se quiere editar.
   */
  const [currentUser, setCurrentUser] = useState({
    id: null, name: '', username: ''
  });

  /**
   * Método para mostrar el modal de editar y asignar un valor al usuario modificado.
   * 
   * @param {*} user 
   */
  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id, name: user.name, username: user.username
    })
  }

  /**
   * Método para actualizar un usuario, este se ejecuta cuando el usuario presiona el botón para guardar
   * y hace que desaparezca este modal y utiliza de nuevo el save users.
   * 
   * @param {*} id 
   * @param {*} updateUser 
   */
  const updateUser = (id, updateUser) => {
    setEditing(false);

    saveUsers(users.map(user => (user.id === id ? updateUser : user)))
  }

  return (
    <div className="container mt-5">
      <h1>Curso Basico React CRUD - Dímar Andrey Suárez Hidalgo</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable 
            users= {users} 
            deleteUser= {deleteUser} 
            editRow= {editRow}
            setAdding= {setAdding}
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
