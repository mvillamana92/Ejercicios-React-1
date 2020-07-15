import React from 'react';

/*

Tal vez quieras ver esta documentación:
https://upmostly.com/tutorials/react-onclick-event-handling-with-examples
https://es.reactjs.org/docs/handling-events.html

*/

const Hijo = (props) => {
    const lukesMessage = "NOOOOOO!";

    return (
        <div className="alert alert-success">
            <h4>Hijo</h4>
            <button onClick={() => props.printCustomText(lukesMessage)} className="btn btn-info">¡Dar click aquí!</button>
        </div>
    );
};

export default Hijo;