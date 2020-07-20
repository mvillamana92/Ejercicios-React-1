import React, { useState, useEffect } from 'react';
import { getIP } from "./api"

const MyComponent = () => {

    const [ipAddress, setIpAddress] = useState("...");

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