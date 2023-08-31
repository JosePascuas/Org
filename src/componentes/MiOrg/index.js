
import "./MiOrg.css"

const MiOrg = (props) => {

  return <section className="orgsection">
    <h3 className="titulo">Mi organización</h3>
    <img src="./add.png" alt="btn agregar" onClick={props.cambiarMostrar}/>
  </section>
}

export default MiOrg

