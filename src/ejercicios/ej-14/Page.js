import React from 'react';
import NavigationBar from './NavigationBar';

function Page(props) {
  return <NavigationBar avatar={props.avatar} />;
}

export default Page;