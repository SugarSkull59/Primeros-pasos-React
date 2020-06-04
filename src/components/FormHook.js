import React, { Fragment } from 'react'
import { useForm } from "react-hook-form";

const FormHook = () => {

  const { register, errors, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data)
/*     Este data recoge todos los input que pongamos */
  }
  return (
    <Fragment>
      <h2>Formularios usando react-hook-form</h2>
      <form onSubmit={handleSubmit (onSubmit)}>
        <input
          name="titulo"
          className="form-contron my-2"
          ref={
            register({
              required: {value: true, message: "Titulo obligatorio"}
          })}>
        </input> <br/>
        <input
          name="apellido"
          className="form-contron my-2"
          ref={
            register({
              required: { value: true, message: "Apellido obligatorio" }
            })}>
        </input> <br />

        <span className="text-danger text-small d-block mb-2">
          {errors?.titulo?.message}
          {errors?.apellido?.message}

        </span>
        <button className="btn btn-primary">Enviar</button>
    </form>
      </Fragment>
  )
}

export default FormHook
