import React, { useState, useEffect } from 'react';
import { getIP } from "./api"

const MyComponent = () => {

    const [ipAddress, setIpAddress] = useState('...');

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
        <div>
            {ipAddress === '...' ? <h1>Cargando...</h1> : <h1>Mi ip es {ipAddress}</h1>}
        </div>
    );

}

export default MyComponent;