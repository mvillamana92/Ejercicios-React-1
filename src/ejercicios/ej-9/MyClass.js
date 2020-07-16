import React from 'react';

class MyClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {ipAddress: '...'};
    }

    render() {
        return (
            <h1>Mi ip es {this.state.ipAddress}</h1>
        );
    }
}

export default MyClass;