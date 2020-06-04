import React, { Fragment, useState } from "react";

const Lista = () => {
  const [arrNumero, setArrNumero] = useState([1, 2, 3, 4, 5, 6])

  const [numero, setNumero] = useState(7)


  function agregarElemento() {
    setNumero(numero + 1 )
    setArrNumero([...arrNumero, numero])
  }

  return (
    <Fragment>
      <h2>Vamos a hacer un bucle, para ello usamos el useState</h2>
      <button onClick={agregarElemento}>Agregar</button>
      {
        arrNumero.map((item, index) => {
          return <p key= {index}>{item} - {index}</p>
          })
      }
    </Fragment>
  )
}

export default Lista