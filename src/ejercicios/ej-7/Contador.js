import React, { useState } from 'react';
import MyLabel from './MyLabel';
import Boton from './Boton';

const Contador = () => {

    const [numberOfClicks, setNumberOfClicks] = useState(0);

    const sumaClick = () => {
        // Ingresa aquí tu código para aumentar el contador
        setNumberOfClicks(numberOfClicks + 1);
    }

    return (
        <div className="alert alert-primary">
            <MyLabel numberOfClicks={numberOfClicks} />
            <Boton sumaClick={sumaClick} />
        </div>
    );
};

export default Contador;