import React from 'react';
import { getIP } from "./api"

class MyClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ipAddress: '...' };
    }

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
            <div>
                {this.state.ipAddress === '...' ? <h1>Cargando...</h1> : <h1>Mi ip es {this.state.ipAddress}</h1>}
            </div>
        );
    }
}

export default MyClass;