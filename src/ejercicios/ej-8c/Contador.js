import React from 'react';
import Par from "./Par";
import Impar from './Impar';

class Contador extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }

    soyPar = (num) => {
        // Esta función regresa un TRUE si el número es par o FALSE si es impar. (No es necesario modificar esta función)
        console.log(num % 2 === 0);
        return num % 2 === 0;
    }

    sumaClick = () => {
        this.setState({ ...this.state, counter: this.state.counter + 1 });
    }

    // PISTA: Puedes utilizar operadores ternarios
    // PISTA 2: https://reactjs.org/docs/conditional-rendering.html

    render() {
        return (
            <div className="alert alert-primary">
                <p>Haz dado {this.state.counter} clicks</p>
                <button onClick={this.sumaClick}>suma 1</button>
                {this.soyPar(this.state.counter) ? <Par /> : <Impar />}
            </div>
        );
    }
};

export default Contador;