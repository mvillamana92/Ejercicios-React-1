import React from 'react';
import { getIP } from "./api"

class MyClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ipAddress: '...' };
    }

    // Intersante lectura relacionada con el manejo de errores con await https://javascript.info/async-await#error-handling
    async componentDidMount() {
        const ipData = await getIP();
        if (ipData !== "Error") {
            const { ip } = ipData;
            this.setState({ ...this.state, ipAddress: ip })
        } else {
            this.setState({ ...this.state, ipAddress: ipData })
        }
    }

    render() {
        return (
            <h1>Mi ip es {this.state.ipAddress}</h1>
        );
    }
}

export default MyClass;