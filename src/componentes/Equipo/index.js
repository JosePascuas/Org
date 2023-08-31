import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {

  const { colorPrimario, colorSecundario, titulo, id} = props.datos
  const {colaboradores, eliminarColaborador, actualizarColor, like} = props
  const colores= {
    backgroundColor: hexToRgba(colorSecundario, "0.6")
  }
  const estiloTitulo = { borderColor: colorSecundario}

  return <>
    { 
      colaboradores.length > 0 && 
      <section className="equipo" style={colores}>
        <input 
          type="color"
          className="color-fondo"
          value={colorSecundario}
          onChange={(event) => {
            actualizarColor(event.target.value, id);
          } }
        
        />
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores">
          {
            colaboradores.map((colaborador, index) => <Colaborador 
            datos={colaborador} 
            key={index} 
            colorSecundario={colorSecundario}
            eliminarColaborador={eliminarColaborador}
            actualizarColor={actualizarColor}
            like={like}
            />)
          }
        </div>
      </section>
    }
  </>

}

export default Equipo