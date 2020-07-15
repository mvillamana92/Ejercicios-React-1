import React from 'react';

class MyState extends React.Component {

    constructor(props) {
        super(props);
        this.state = { myText: "Hola Mundo" };
    }

    render() {
        return (
            <div className="alert alert-primary" >
                <p>El valor por defecto del estado es: {this.state.myText}</p>
            </div>
        );
    }
};

export default MyState;