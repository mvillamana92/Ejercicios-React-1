import React, { useState } from 'react';

const Boton = (props) => {

    return (
        <button className="btn btn-info" onClick={props.sumaClick}>suma 1</button>
    );
};

export default Boton;