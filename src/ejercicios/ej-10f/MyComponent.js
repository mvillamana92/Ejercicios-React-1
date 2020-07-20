import React, { useState, useEffect } from 'react';
import { getIP } from "./api"

const MyComponent = () => {

    const [ipAddress, setIpAddress] = useState('...');

    // Intersante lectura relacionada con el manejo de errores con await https://javascript.info/async-await#error-handling

    useEffect(() => {
        const fetchData = async () => {
            const ipData = await getIP();
            if (ipData !== "Error") {
                const { ip } = ipData;
                setIpAddress(ip);
            } else {
                setIpAddress(ipData)
            }
        }
        fetchData();
    })

    return (
        <h1>Mi ip es {ipAddress}</h1>
    );

}

export default MyComponent;