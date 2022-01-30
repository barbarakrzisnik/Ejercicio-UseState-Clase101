import "./App.css"
import { useState } from "react";

const App = () => {

const [valorDelInput, setValorDelInput] = useState("");
const [ valorDelCheckbox, setValorDelCheckbox ] = useState("NO")
const [ valorDelSelect, setValorDelSelect ] = useState("")
const [ valorDelRadio, setValorDelRadio ] = useState("")

  const handleChange = (e) => {
    console.log(e.target.value) 
    setValorDelInput(e.target.value)
};


const handleCheckbox = (e) => {
    e.target.checked ? setValorDelCheckbox("SI") : setValorDelCheckbox("NO")
};

const handleSelect = (e) => {
  // setValorDelSelect(e.target.value) esto trae el value explicito, lo cual en realidad le sirve a la computadora. Para que se vea ok, se deberia poner un if, un switch o un object literals
  setValorDelSelect(e.target.value)
}

const handleRadio = (e) => {
  setValorDelRadio(e.target.value)
}

const handleFormulario = (e) => {
  e.preventDefault()
}

return (
  <div>
    <form onSubmit={handleFormulario}>

    {/* Ejemplo con input text */}
    
    <input type="text" name="nombre" onChange={handleChange}></input>
    <p>Valor del input: <span>{valorDelInput}</span></p>

    <p>_____________________</p>

    {/* Ejemplo con checkbox */}
    <label>Terminos y condiciones
    <input type="checkbox" name="terminos" onChange={handleCheckbox}/>
    </label>

    <p>Acepto terminos y condiciones: <span>{valorDelCheckbox}</span></p>

    <p>_____________________</p>

    {/* Ejemplo de select */}
    <label>
      Pais
      <select onChange={handleSelect}>
        <option value="arg">Argentina</option>
        <option value="bra">Brasil</option>
        <option value="chi">Chile</option>
      </select>
    </label>

    <p>Pais elegido: <span>{valorDelSelect}</span></p>

    <p>_____________________</p>

    {/* Ejemplo de radio */}
    <label>
      <input type="radio" name="animal" value="gato" onChange={handleRadio}/> Gato
      <input type="radio" name="animal" value="perro" onChange={handleRadio} /> Perro
    </label>

    <p>Animal elegido: <span>{valorDelRadio}</span></p>

    <label>
    <input type="submit"></input>
    </label>
    
    </form>
  </div>
);
}

export default App