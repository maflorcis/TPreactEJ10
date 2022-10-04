import './style.css'
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import NuevaPelicula from './components/nuevaPelicula';
import ListaPeliculas from './components/listaPeliculas';

class App extends Component {
  state ={
    peliculas: []    

  }

  //En el momento que la aplicación se carga 

    componentDidMount(){
      const peliculasLS = localStorage.getItem('peliculas');
      if(peliculasLS){
          this.setState({
            peliculas : JSON.parse(peliculasLS)
          })
      }
    }

  // Quitamos o agregamos una peli

  componentDidUpdate(){
    localStorage.setItem('peliculas', JSON.stringify(this.state.peliculas))
  }

  crearNuevaPelicula = datos => {
    
    const peliculas = [...this.state.peliculas, datos]

    // Se renderiza el nuevo state

    this.setState({
      peliculas: peliculas
    })
  }

    //Borramos una peli
      eliminarPelicula = id =>{
        //se copia el state
          const peliculasActuales = [...this.state.peliculas]

        //filtramos para borrar la peli elegida
        const peliculas = peliculasActuales.filter(pelicula => pelicula.id !== id);

        //se vuelve a ajustar el state para renderizarlo de nuevo
        this.setState({
          peliculas
        })

      }

  render(){
    return (
      <div className="container Fondo">
        <Header 
        titulo='Lista de Películas Preferidas'
        />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaPelicula
            crearNuevaPelicula ={this.crearNuevaPelicula}
            />
          </div>

            <div className="mt-5 col-md-10 mx-auto tarjeta">
            <ListaPeliculas
              peliculas={this.state.peliculas}
              eliminarPelicula={this.eliminarPelicula}
              />
            </div>
        </div>
      </div>   
    );
  }
}

export default App;