import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Ejercicio1, Ejercicio2, Ejercicio3, Ejercicio4, Ejercicio5, Ejercicio6, Ejercicio7, Ejercicio8, 
    Ejercicio1c, Ejercicio2c, Ejercicio3c, Ejercicio4c, Ejercicio5c, Ejercicio6c, Ejercicio7c, Ejercicio8c, 
    Ejercicio9, Ejercicio10, Ejercicio11, Ejercicio12, Ejercicio9F, Ejercicio10F, Ejercicio11F, Ejercicio12F,
    Ejercicio13, Ejercicio14 } from "./ejercicios/";
import Ejercicio from "./ejercicios/Ejercicio"
import Home from './components/Home';
import exData from "./ejercicios/constantes";

const Routes = () => {

    const exercises = [
        Ejercicio1,
        Ejercicio2,
        Ejercicio3,
        Ejercicio4,
        Ejercicio5,
        Ejercicio6,
        Ejercicio7,
        Ejercicio8,
        Ejercicio1c,
        Ejercicio2c,
        Ejercicio3c,
        Ejercicio4c,
        Ejercicio5c,
        Ejercicio6c,
        Ejercicio7c,
        Ejercicio8c,
        Ejercicio9,
        Ejercicio10,
        Ejercicio11,
        Ejercicio12,
        Ejercicio9F,
        Ejercicio10F,
        Ejercicio11F,
        Ejercicio12F,
        Ejercicio13,
        Ejercicio14
    ]

    return (
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            {
                exercises.map((Component, i) =>
                    <Route exact key={"route-dynamic-" + i} path={`/${exData[i].url}`}>
                        <Ejercicio index={i}>
                            <Component />
                        </Ejercicio>
                    </Route>
                )
            }
        </Switch >
    );
};

export default Routes;