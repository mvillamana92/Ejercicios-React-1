import React from 'react';
import MyLabel from './MyLabel';
import Boton from './Boton';

class Contador extends React.Component {

    constructor(props) {
        super(props);
        this.state = { numberOfClicks: 0 };
    }

    sumaClick = () => {
        this.setState({ ...this.state, numberOfClicks: this.state.numberOfClicks + 1 });
    }

    render() {
        return (
            <div className="alert alert-primary">
                <MyLabel numberOfClicks={this.state.numberOfClicks} />
                <Boton sumaClick={this.sumaClick} />
            </div>
        );
    }

};

export default Contador;