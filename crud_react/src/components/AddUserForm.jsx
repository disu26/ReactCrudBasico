import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';

/**
 * Componente con el formulario para añadir un nuevo usuario.
 * 
 * @param {*} props 
 * @returns Form con la información ingresada por el usuario.
 * 
 * @author Dímar Andrey Suárez Hidalgo <dimar260212@gmail.com>
 */
const AddUserForm = (props) => {

    /**
     * Se hace uso del react-hook-form para un mejor manejo de errores.
     */
    const { register, handleSubmit, formState: { errors } } = useForm();

    /**
     * Función que se ejecutará al presionar el botón de añadir usuario, esta a su vez llama la función
     * que es recibida en props addusers.
     * 
     * @param {*} data 
     * @param {*} e 
     */
    const onSubmit = (data, e) => {
        props.addUsers(data);

        e.target.reset();
    }

    return ( 
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Name</label>
                <input type="text" name="name" 
                    {
                        ...register("name", {
                            required : "Campo Obligatorio"
                        })
                    }
                />
                <div>
                    {errors?.name?.message}
                </div>
                <label>Username</label>
                <input type="text" name="username" 
                    {
                        ...register("username", {
                            required : "Campo Obligatorio"
                        })
                    }
                />
                <div>
                    {errors?.username?.message}
                </div>
                <button className='btn btn-primary'>Add User</button>
            </form>
        </Fragment>
    );
}
 
export default AddUserForm;