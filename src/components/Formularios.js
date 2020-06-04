import React, { Fragment, useState } from 'react'



const Formulario = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    apellido:""
  })

  function handleInputChange(e) {
    console.log(e.target.value)
  /*   Esto es lo que recoge el valor del input */
    setDatos({
      ...datos,
      [e.target.name]: e.target.value

    })
  }

  function enviarDatos(e) {
    e.preventDefault();
  /*  Usamos esto para que no lo envíe desde que se cargue */
    console.log(datos.nombre +  datos.apellido)

  }

  return (
    <Fragment>
      <h2>Formularios</h2>
      <form className="row" onSubmit={enviarDatos}>

        <div className="col-md-3">
          <input
            placeholder="Ingrese nombre" className="form-control mb-2"
            type="text"
            name="nombre"
            onChange = {handleInputChange}></input>
        </div>

        <div className="col-md-3">
          <input
            placeholder="Ingrese apellido" className="form-control mb-2"
            type="text"
            name="apellido"
            onChange={handleInputChange}></input>
        </div>

        <div className="col-md-3">
          <button className="btn btn-primary" type="submit">Enviar</button>
        </div>

      </form>
<h3>{datos.nombre} - {datos.apellido}</h3>
    </Fragment>
  )
}

export default Formulario