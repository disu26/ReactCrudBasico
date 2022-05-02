import React, {Fragment} from "react";
import { useForm } from "react-hook-form";

/**
 * Componente con el formulario para editar un usuario.
 * 
 * @param {*} currentUser: usuario actual que se está modificando.
 * @param {*} updateUser: nueva información del usuario
 * @returns Form con la información ingresada por el usuario.
 * 
 * @author Dímar Andrey Suárez Hidalgo <dimar260212@gmail.com>
 */
const EditUserForm = ({currentUser, updateUser}) => {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        defaultValues: currentUser
    });

    const currentUserName = currentUser.name;
    const currentUserUsername = currentUser.username;

    setValue('name', currentUserName);
    setValue('username', currentUserUsername);

    const onSubmit = (data, e) => {
        data.id = currentUser.id;

        updateUser(currentUser.id, data)

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
                <button className="btn btn-success">Edit user</button>
            </form>
        </Fragment>
    );
}
 
export default EditUserForm;
