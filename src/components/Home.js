import React from 'react';
import exData from "../ejercicios/constantes";

const Home = () => {
    return (
        <div>
            <h1>Bienvenido a la prueba de React</h1>
            <p>En este proyecto encontrarás diversos ejercicios básicos para aprender a usar React.</p>
            <p>Los temas que se cubren son los siguientes</p>
            <div className="card">
                <div className="card-body text-left">
                    <ul>
                        <li>Propiedades de los componentes (Props)</li>
                        <li>Estado de los componenetes (State)</li>
                        <li>Ciclo de vida los componentes</li>
                        <li>Efectos (hooks, useEffect)</li>
                        <li>Uso de componentes funcionales y de clase</li>
                        <li>(Pronto más temas...)</li>
                    </ul>
                </div>
            </div>
            <p>Dentro del directorio src/ejercicios encontrarás todos los componenetes necesarios para realizar el ejercicio, cada uno se encuentra separado dentro de su propio directorio.</p>
            <p className="font-weight-bold">
                Modifica UNICAMENTE los archivos que se encuentran dentro de los directorios de los ejercicios (src/ejercicios/ej-n).
            </p>
            <p className="font-weight-bold">
                Para resolver los ejercicios que terminan en "C", el alumno tendrá que resolver el mismo problema que el ejercicio original pero convirtiendolo a componentes de clase. Ejemplo: Ejercicio 1C es igual a Ejercicio 1 pero resolviéndolo con clases.
            </p>
            <p className="font-weight-bold">
                Para resolver los ejercicios que terminan en "F", el alumno tendrá que resolver el mismo problema que el ejercicio original pero convirtiendolo a componentes funcionales. Ejemplo: Ejercicio 9F es igual a Ejercicio 9 pero resolviéndolo con funciones.
            </p>
            <p>Una vez descargado el proyecto por primera vez ejecuta el comando <b>'npm install'</b> dentro del directorio del proyecto para instalar todas las dependencias antes de que inicies.</p>
            <p className="text-left">
                Ejercicios disponibles:
                {exData.map(({title, url},i) => 
                    <li key={`key-list-home-${i}`}><a href={`/${url}`}>{title}</a></li>
                )}
            </p>
        </div>
    );
};

export default Home;