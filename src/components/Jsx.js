import React, { Fragment } from "react";

const Jsx = () => {

  const saludo = "Hola Jsx";
  const temperatura = 21;

  return (
    <Fragment>
      <h2>Hola, soy otro componente JSX y vamos a usar la constante {saludo} </h2>
      <h2>Frio o calor¿?</h2>
      <h4>
        {
          temperatura > 20 ? "Hace mucho calor" : "Hace frío"
        }
        </h4>
    </Fragment>
  )
}

export default Jsx