import React from 'react';

class Hijo extends React.Component {
    render() {
        return (
            <div className="alert alert-success" >
                <h4>Hijo</h4>
                <button onClick={this.props.printText} className="btn btn-info">¡Dar click aquí!</button>
            </div>
        );
    }
};

export default Hijo;