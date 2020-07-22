import React from 'react';
import exData from "./constantes";

const Ejercicio = (props) => {
    const { children, index } = props;
    const { title, description, descriptionList } = exData[index];

    return (
        <div>
            <a href="/">Volver al inicio</a>
            <h1>{title}</h1>
            <p>{description}</p>
            {
                descriptionList &&
                <ul>
                    {descriptionList.map( line => <li>{line}</li>)}
                </ul>
            }
            {children}
        </div>
    );
};

export default Ejercicio;