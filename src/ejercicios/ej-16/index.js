import React from "react";
import MainPage from './MainPage';

/*https://es.reactjs.org/docs/composition-vs-inheritance.html*/
//No es necesario modificar este fichero (index.js)
const Ejercicio16 = () => {
    const contactData = {email: "contact@myecommerce.com", phone: "+34 654 321 321"};

    const companyData = {legalName: "My Ecommerce", address: "Fake Stret 123"};

    return (
        <div>
            <MainPage contactEmail={contactData.email} contactPhone={contactData.phone} 
                contactAddress={companyData.address}/>
        </div>
    );
}
export default Ejercicio16;