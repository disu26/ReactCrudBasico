import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';

const AddUserForm = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

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