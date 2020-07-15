import React from 'react';

const Hijo = (props) => {
    return (
        <div className="alert alert-success">
            <h4>Hijo</h4>
            <button onClick={props.printText} className="btn btn-info">¡Dar click aquí!</button>
        </div>
    );
};

export default Hijo;