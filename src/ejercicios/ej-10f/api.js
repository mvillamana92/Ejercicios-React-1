const getIP = async () => {
    try {
        const response = await fetch(`https://api.ipify.org/pepe/?format=json`);

        if (!response.ok) {
            throw Error(response.statusText);
        }
        const data = await response.json();

        // console.log(response);
        // console.log(data);

        return data;

    } catch (error) {
        console.log(error);
        return "Error"
    }
};

export { getIP }