import React from 'react';


const PostsGrid = (props) => {

    return (<div className="border">
        <h1>Posts Grid</h1>
        {props.children}
    </div>)
}

export { PostsGrid }