import React from 'react';
import Hijo from "./Hijo";

class Padre extends React.Component {

    printText = () => {
        console.log("Luke, yo soy tu padre");
    };

    render() {
        return (
            <div className="alert alert-primary">
                <h4>Padre</h4>
                <Hijo printText={this.printText} />
            </div>
        );

    }
};

export default Padre;