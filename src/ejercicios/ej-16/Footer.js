import React from 'react';
import ContactData from './ContactData';

function Footer(props) {
  return <div>
  <ContactData email={props.contactEmail} phone={props.contactPhone} address={props.contactAddress} />
  <p>My Ecommerce © 2020</p>
  </div>
}

export default Footer;