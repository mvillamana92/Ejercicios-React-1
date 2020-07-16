import React from 'react';

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {ipAddress: '...'};
    }

    render() {
        return (
            <div>
                <h1>Cargando...</h1>
                <h1>Mi ip es {this.state.ipAddress}</h1>
            </div>
        );
    }
}

export default MyComponent;