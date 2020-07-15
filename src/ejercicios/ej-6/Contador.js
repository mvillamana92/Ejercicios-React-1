import React, { useState } from 'react';

const Contador = () => {

    const [numberOfClicks, setNumberOfClicks] = useState(0);

    const sumaClick = () => {
        // Ingresa aquí tu código para aumentar el contador
        setNumberOfClicks(numberOfClicks + 1);
    }

    return (
        <div className="alert alert-primary">
            <p><b>Has dado {numberOfClicks} clicks</b></p>
            <button className="btn btn-info" onClick={sumaClick}>suma 1</button>
        </div>
    );
};

export default Contador;