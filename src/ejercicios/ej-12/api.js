const getFact = async () => {
    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/random`);

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

export { getFact }