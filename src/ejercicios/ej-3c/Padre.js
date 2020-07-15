import React from 'react';
import Hijo from "./Hijo";

class Padre extends React.Component {
    printCustomText = (text) => {
        console.log(text);
    };

    render() {
        return (
            <div className="alert alert-primary" >
                <h4>Padre</h4>
                <Hijo printCustomText={this.printCustomText} />
            </div>
        );
    }
};

export default Padre;