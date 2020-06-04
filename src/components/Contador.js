import React, {useState, Fragment}from 'react';

const Contador = () => {

  // El primer elemento de la constante es el nombre del estado y el segundo es quien lo modifica. El 0 es el valor inicial de ese número.
  const [numero, setNumero] = useState(0);

  const aumentar = () => {
    console.log("me diste un click");
    setNumero(numero +1)
  }

  return (
    <Fragment>

    <h3>Mi primer componente, que es un contador. Para poder usar ese valor de la constante lo envolvemos en {}, tal que así {numero}</h3>

      <button onClick={aumentar}>Aumentar</button>
    </Fragment>
  );
}

export default Contador;
