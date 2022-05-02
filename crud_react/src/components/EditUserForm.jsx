import React, {Fragment} from "react";
import { useForm } from "react-hook-form";

const EditUserForm = (props) => {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        defaultValues: props.currentUser
    });

    const currentUserName = props.currentUser.name;
    const currentUserUsername = props.currentUser.username;

    setValue('name', currentUserName);
    setValue('username', currentUserUsername);

    const onSubmit = (data, e) => {
        data.id = props.currentUser.id;

        props.updateUser(props.currentUser.id, data)

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
