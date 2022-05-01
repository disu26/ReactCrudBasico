import React, { Fragment } from "react";
import { useForm } from "react-hook-form";

const EditUserForm = (props) => {
  console.log(props.currentUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: props.currentUser,
  });

  setValue("name", props.currentUser.name);
  setValue("username", props.currentUser.username);

  const onSubmit = (data, e) => {
    data.id = props.currentUser.id;

    props.updateUser(props.currentUser.id, data);

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        {...register("name", {
          required: "Campo Obligatorio",
        })}
      />
      <div>{errors?.name?.message}</div>
      <label>Username</label>
      <input
        type="text"
        name="username"
        {...register("username", {
          required: "Campo Obligatorio",
        })}
      />
      <div>{errors?.username?.message}</div>
      <button>Edit user</button>
    </form>
  );
};

export default EditUserForm;
