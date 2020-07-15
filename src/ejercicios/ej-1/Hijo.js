import React from 'react';

// HOLA 2

const Hijo = (props) => {
    return (
        <div className="alert alert-success">
            <h4>Hijo</h4>
            <h1>{props.text}</h1>
        </div>
    );
};

export default Hijo;