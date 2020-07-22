import React from 'react';
import Footer from './Footer';

function MainPage(props) {
  return (<div>
    <h1>My Ecommerce</h1>
    <p>We sell awesome shoes!!</p>
    <div >
      <img style={{width:'60%'}} src="https://st2.depositphotos.com/1177973/6501/i/950/depositphotos_65015437-stock-photo-many-various-female-shoes.jpg"></img>
    </div>

    <Footer contactEmail={props.contactEmail} contactPhone={props.contactPhone}
      contactAddress={props.contactAddress} />
  </div>);
}

export default MainPage;