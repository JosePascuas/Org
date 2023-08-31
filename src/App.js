import { useState } from 'react';
import { v4 as uuidv4} from "uuid";
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from "./componentes/Formulario/Formulario.js"
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {

  const [mostrarFormulario, actualizarMostar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuidv4(),
    equipo: "Front End",
    foto: "https://github.com/JosePascuas.png",
    nombre: "Jose Miguel Pascuas",
    puesto: "Desarrollador Front End",
    fav: true
  }])

  const[equipos, actualizarEquipos] = useState([
    { 
      id: uuidv4(),
      titulo: "Programación",
      colorPrimario: "#D9F7E9",
      colorSecundario: "#57C278",

    },
    {
      id: uuidv4(),
      titulo: "Front End",
      colorPrimario: "#E8F8FF",
      colorSecundario: "#82CFFA",

    },
    {
      id: uuidv4(),
      titulo: "Data Science",
      colorPrimario: "#F0F8E2",
      colorSecundario: "#A6D157",

    },
    {
      id: uuidv4(),
      titulo: "Devops",
      colorPrimario: "#FDE7E8",
      colorSecundario: "#E06B69",

    },
    {
      id: uuidv4(),
      titulo: "UX y Diseño",
      colorPrimario: "#FAE9F5",
      colorSecundario: "#DB6EBF",

    },
    {
      id: uuidv4(),
      titulo: "Móvil",
      colorPrimario: "#FFF5D9",
      colorSecundario: "#FFBA05",

    },
    {
      id: uuidv4(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FFEEDF",
      colorSecundario: "#FF8A29",

    }
  ])

  const cambiarMostrar = () =>{
    actualizarMostar(!mostrarFormulario)
  }

  const registrarColaborador = (colaborador) =>{
    console.log("nuevo colaborador", colaborador);
    actualizarColaboradores([...colaboradores, colaborador])
  }

  const actualizarColor = (color, id) => {
    console.log("actualizar: ", color, id  );
    const equipoActualizados = equipos.map ( (equipo)  => {
      if(equipo.id===id){
        equipo.colorSecundario = color}

        return equipo
      })

      actualizarEquipos(equipoActualizados)
  }

  
  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores);
  }


  const crearEquipo = ( nuevoEquipo ) => {
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuidv4()}])
  } 

  const like = (id) => {
    console.log("like", id);
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id ===id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header />
      {mostrarFormulario && <Formulario 
      equipos={equipos.map( (equipo) => equipo.titulo )} 
      registrarColaborador={registrarColaborador}
      crearEquipo={crearEquipo}
      />
      
      }


      <MiOrg cambiarMostrar={cambiarMostrar}/>
      
      {
        equipos.map( (equipo) => <Equipo 
        datos={equipo} 
        key={equipo.titulo}
        colaboradores={colaboradores.filter( (colaborador) => colaborador.equipo ===equipo.titulo )}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
        /> )
      }
      <Footer />

    </div>
  );
}

export default App;
