import React, {Component} from 'react';
import Gasto from "./Gasto";

class Listado extends Component {
    render() {
        return (
            <div className="gastos-realizados">
                <h2>Listado</h2>
                {console.log(this.props.gastos)}
                <Gasto/>
            </div>
        )
    }
}

export default Listado;