import "./Campo.css"

const Campo = (props) => {
  const placeholderModificado = `${props.placeholder}...`
  const {required, valor} = props

  const { type="text"} = props

  const manejarCambio = (e) => {
    props.actualizarValor(e.target.value)
  }

  return <div className={`campo campo-${type}`} >
    <label>{props.titulo}</label>
    <input 
    placeholder={placeholderModificado} 
    required={required}
    value={valor} 
    onChange={manejarCambio}
    type={type}/>
  </div>
}

export default Campo