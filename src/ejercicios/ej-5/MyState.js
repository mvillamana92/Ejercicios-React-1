import React, { useState } from 'react';

const MyState = () => {
    const [myText, setMyText] = useState("Hola Mundo");
    return (
        <div className="alert alert-primary">
            <p>El valor por defecto del estado es: {myText}</p>
        </div>
    );
};

export default MyState;