import React, {Component} from 'react';
import '../css/App.css';
import Header from './Header';
import FormularioGasto from "./Formulario";
import Listado from "./Listado";
import {validarPresupuesto} from "../helper";
import ControlPresupuesto from "./ControlPresupuesto";

class App extends Component {

    state = {
        presupuesto: '',
        restante: '',
        gastos: {}
    };

    componentDidMount() {
        this.obtenerPrespuesto();
    }

    obtenerPrespuesto = () => {
        let presupuesto = prompt('¿Cuál es el presupuesto?');

        let resultado = validarPresupuesto(presupuesto);
        if (resultado) {
            this.setState({
                presupuesto: presupuesto,
                restante: presupuesto
            })
        } else {
            // hasta que no halla un presupuesto válido no dejará continuar
            this.obtenerPrespuesto();
        }
    };

    // Agregar un nuevo gasto al state
    agregarGasto = gasto => {
        // Tomar una copia del state actual
        const gastos = {...this.state.gastos};

        // Agregar al gasto al objeto del state
        gastos[`gasto${Date.now()}`] = gasto;

        // Restar al presupuesto
        this.restarPresupuesto(gasto.cantidadGasto);

        // Ponerlo en state
        this.setState({
            gastos: gastos
        })
    };

    // Restar del presupuesto cuando un gasto se crea
    restarPresupuesto = cantidad => {
        // Leer el gasto
        let restar = Number(cantidad);

        // Tomar una copia del state actual
        let restante = this.state.restante;

        // lo restamos
        restante -= restar;

        restante = String(restante);

        // Agregamos el nuevo state
        this.setState({
            restante
        })

    };

    render() {
        return (
            <div className="App container">
                <Header
                    titulo='Gasto Semanal'
                />

                <div className="contenido-principal contenido">
                    <div className="row">
                        <div className="one-half column">
                            <FormularioGasto
                                agregarGasto={this.agregarGasto}
                            />
                        </div>
                        <div className="one-half column">
                            <Listado
                                gastos={this.state.gastos}
                            />
                            <ControlPresupuesto
                                presupuesto = {this.state.presupuesto}
                                restante = {this.state.restante}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
