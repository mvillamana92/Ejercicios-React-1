import React from 'react';

const Layout = (props) => {
    return (
        <div className="alert alert-primary">
            <p>Header</p>
            {props.children}
            <p>Footer</p>
        </div>
    );
};

export default Layout;