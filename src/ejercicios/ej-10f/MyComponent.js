import React from 'react';

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {ipAddress: '...'};
    }

    // Intersante lectura relacionada con el manejo de errores con await https://javascript.info/async-await#error-handling

    render() {
        return (
            <h1>Mi ip es {this.state.ipAddress}</h1>
        );
    }
}

export default MyComponent;