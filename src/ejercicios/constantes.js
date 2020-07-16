const exData = [
    {
        title: "Ejercicio 1 - Envío de propiedades",
        description: "Enviar la variable text=\"Hola Mundo\" mediante props del componente <Padre> al componente <Hijo> e imprimirlo dentro del un tag <h1>.",
        url: "ej-1"
    },
    {
        title: "Ejercicio 2 - Enviar una función como propiedad",
        description: "Ejecuta la función printText del componente <Padre> al dar click en el botón del componente <Hijo>.",
        url: "ej-2"
    },
    {
        title: "Ejercicio 3 - Enviar una función como propiedad (parte 2)",
        description: "Ejecuta la función printCustomText del componente <Padre> al dar click en el botón del componente <Hijo>. La función debe recibir como parámetro la variable lukesMessage declarada en el componente <Hijo>",
        url: "ej-3"
    },
    {
        title: "Ejercicio 4 - Enviar una función como propiedad (parte 3)",
        description: "Ejecuta la función printCustomText del componente <Padre> al dar click en el botón del componente <Hijo>. La función debe recibir como parámetro la variable lukesMessage declarada en el componente <Hijo>. El parámetro de <Hijo> que recibe la función debe llamarse \"myFunction\"",
        url: "ej-4"
    },
    {
        title: "Ejercicio 5 - Uso de estados",
        description: "Crea un nuevo estado dentro del componente <MyState> llamado \"myText\" con el valor por defecto \"Hola Mundo\". Despliega el valor del estado dentro de la etiqueta <p>.",
        url: "ej-5"
    },
    {
        title: "Ejercicio 6 - Uso de estados (Contador)",
        description: "Modifica el componente <Contador> para poder mostrar cuántos clicks ha dado el usuario. Debes almacenar el número de clicks en un estado del componente.",
        url: "ej-6"
    },
    {
        title: "Ejercicio 7 - Uso de estados (Contador) parte 2",
        description: "Al igual que en el ejercicio 6 debes implementar un contador utilizando estados, pero en esta ocasión el botón y el texto estarán en componentes separados, utliza tus conociminetos de estados y props para obtener el mismo resultado.",
        url: "ej-7"
    },
    {
        title: "Ejercicio 8 - Renderizado condicional",
        description: "Modifica el componente <Contador> para que cuando el estado \"counter\" sea número par se muestre el componente <Par> y, si el número es non, mostrar el componente <Impar>",
        url: "ej-8"
    },
    {
        title: "Ejercicio 1C - Envío de propiedades",
        description: "Enviar la variable text=\"Hola Mundo\" mediante props del componente <Padre> al componente <Hijo> e imprimirlo dentro del un tag <h1>.",
        url: "ej-1c"
    },
    {
        title: "Ejercicio 2C - Enviar una función como propiedad",
        description: "Ejecuta la función printText del componente <Padre> al dar click en el botón del componente <Hijo>.",
        url: "ej-2c"
    },
    {
        title: "Ejercicio 3C - Enviar una función como propiedad (parte 2)",
        description: "Ejecuta la función printCustomText del componente <Padre> al dar click en el botón del componente <Hijo>. La función debe recibir como parámetro la variable lukesMessage declarada en el componente <Hijo>",
        url: "ej-3c"
    },
    {
        title: "Ejercicio 4C - Enviar una función como propiedad (parte 3)",
        description: "Ejecuta la función printCustomText del componente <Padre> al dar click en el botón del componente <Hijo>. La función debe recibir como parámetro la variable lukesMessage declarada en el componente <Hijo>. El parámetro de <Hijo> que recibe la función debe llamarse \"myFunction\"",
        url: "ej-4c"
    },
    {
        title: "Ejercicio 5C - Uso de estados",
        description: "Crea un nuevo estado dentro del componente <MyState> que incluya un estado llamado \"myText\" con el valor por defecto \"Hola Mundo\". Despliega el valor del estado dentro de la etiqueta <p>.",
        url: "ej-5c"
    },
    {
        title: "Ejercicio 6C - Uso de estados (Contador)",
        description: "Modifica el componente <Contador> para poder mostrar cuántos clicks ha dado el usuario. Debes almacenar el número de clicks en un estado del componente.",
        url: "ej-6c"
    },
    {
        title: "Ejercicio 7C - Uso de estados (Contador) parte 2",
        description: "Al igual que en el ejercicio 6 debes implementar un contador utilizando estados, pero en esta ocasión el botón y el texto estarán en componentes separados, utliza tus conociminetos de estados y props para obtener el mismo resultado.",
        url: "ej-7c"
    },
    {
        title: "Ejercicio 8C - Renderizado condicional",
        description: "Modifica el componente <> para que cuando el contador sea número par se muestre el componente <Par> y, si el número es non, mostrar el componente <Impar>",
        url: "ej-8c"
    },
    {
        title: "Ejercicio 9 - Async/await consultar mi ip",
        description: "Añadir los cambios necesarios para mostrar por pantalla tu ip haciendo uso del api https://api.ipify.org/?format=json",
        url: "ej-9"
    },
    {
        title: "Ejercicio 10 - Async/await consultar mi ip con error",
        description: "Con lo aprendido en el ejercicio anterior, utilizar un api que falla https://api.ipify.org/pepe/?format=json y que en caso de error mostrar como ip 'Error'.",
        url: "ej-10"
    },
    {
        title: "Ejercicio 11 - Async/await consultar mi ip con renderizado condicional",
        description: "Aplicar la solución del Ejercicio 9 para que cuando carguemos la página se muestre Cargando... hasta que recuperemos la ip con el api.",
        url: "ej-11"
    },
    {
        title: "Ejercicio 12 - Async/await sobre botón",
        description: "Al hacer clic sobre el botón, llamar a la API, recuperar el texto de la propiedad 'value' y mostrarlo por pantalla. API: https://api.chucknorris.io/jokes/random",
        url: "ej-12"
    },
    {
        title: "Ejercicio 9F - Async/await consultar mi ip",
        description: "Añadir los cambios necesarios para mostrar por pantalla tu ip haciendo uso del api https://api.ipify.org/?format=json",
        url: "ej-9f"
    },
    {
        title: "Ejercicio 10F - Async/await consultar mi ip con error",
        description: "Con lo aprendido en el ejercicio anterior, utilizar un api que falla https://api.ipify.org/pepe/?format=json y que en caso de error mostrar como ip 'Error'.",
        url: "ej-10f"
    },
    {
        title: "Ejercicio 11F - Async/await consultar mi ip con renderizado condicional",
        description: "Aplicar la solución del Ejercicio 9 para que cuando carguemos la página se muestre Cargando... hasta que recuperemos la ip con el api.",
        url: "ej-11f"
    },
    {
        title: "Ejercicio 12F - Async/await sobre botón",
        description: "Al hacer clic sobre el botón, llamar a la API, recuperar el texto de la propiedad 'value' y mostrarlo por pantalla. API: https://api.chucknorris.io/jokes/random",
        url: "ej-12f"
    }
];

export default exData;