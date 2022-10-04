import React, {Component} from 'react';
import uuid from 'react-uuid';


const stateInicial = {
    pelicula:{
        titulo:'',
        genero:'',
        fecha:'',
        hora:'',
        descripcion:''
    },
    error:false
}



class NuevaPelicula extends Component {
    state={  ...stateInicial    }

    // En el momento que se escriben los datos
       handleChange= (e) =>{
           
           //se pasa al arreglo

           this.setState({
               pelicula: {
                   ...this.state.pelicula,
                   [e.target.name] : e.target.value
               }
           })

        }

        // Envíamos el formulario
        handleSubmit = e => {
            e.preventDefault();

            //los valores van a un arreglo
            const {titulo,genero, fecha, hora, descripcion} = this.state.pelicula;

            //Validamos que no haya nada vacío

            if (titulo === '' || genero ==='' || fecha=== '' || hora === '' || descripcion === '' )
            {
                this.setState({
                    error:true
                })
           

            //Se detiene
            return;
        }

        // NUEVO OBJETO!!!

            const nuevaPelicula = {...this.state.pelicula};
            nuevaPelicula.id= uuid();

            //Ya tenemos la nueva peli agregada
            this.props.crearNuevaPelicula(nuevaPelicula) 

            //Reiniciamos el formulario
            this.setState({
                ...stateInicial
            })
        }



    render(){

    // Tomamos el valor del state
    
    const {error}= this.state;

        return(
            <div className="card mt-5 py-5">
                <div className="card-body Formulario">
                    <h2 className="card-title text-center mb-5 display-5">
                        Llená el formulario para crear una nueva película
                    </h2>

                    {error ? <div className="alert alert-danger mt-2 mb-5 text-center"> ¡¡Todos los campos son obligatorios!!</div> : null}

                    <form
                        onSubmit={this.handleSubmit}
                    >
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label my-2">Titulo de la Pelicula</label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Pelicula"
                                    name="titulo"
                                    onChange={this.handleChange}
                                    value={this.state.pelicula.titulo}
                                    />
                            </div>
                        </div>

                        
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label my-2">Genero</label>
                            <div className="col-sm-8 col-lg-10">
                                <select 
                                    type="text"
                                    className="form-control"
                                    placeholder="Genero de la peli"
                                    name="genero"
                                    onChange={this.handleChange}
                                    value={this.state.pelicula.genero}
                                    >
                                        <option value=''>--Seleccionar género--</option>
                                        <option value='comedia'>Comedia</option>
                                        <option value='drama'>Drama</option>
                                        <option value='infantil'>Infantil</option>
                                        </select>
                            </div>
                        </div>


                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label my-2">Fecha de estreno</label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="date"
                                    className="form-control"
                                    name="fecha"
                                    onChange={this.handleChange}
                                    value={this.state.pelicula.fecha}
                                    />
                            </div>
                        
                            <label className="col-sm-4 col-lg-2 col-form-label my-2">Duración</label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="time"
                                    className="form-control"
                                    name="hora"
                                    onChange={this.handleChange}
                                    value={this.state.pelicula.hora}
                                    />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label my-2">Descripcion</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea
                                    type="text"
                                    className="form-control"
                                    placeholder="Escribe la descripcion"
                                    name="descripcion"
                                    onChange={this.handleChange}
                                    value={this.state.pelicula.descripcion}
                                    >
                                </textarea>
                            </div>
                        </div>
                            <input type="submit" className="py-3 mt-2 btn btn-secondary btn-block" value="Agregar Nueva Pelicula"/>

                    </form>
                </div>
            </div>
        )
    }
}

export default NuevaPelicula;