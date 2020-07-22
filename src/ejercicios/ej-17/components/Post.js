import React, { useContext } from 'react';
import { UsersContext } from "../context/UsersContext"
import { PostsContext } from "../context/PostsContext"

const Post = () => {


    const usersData = useContext(UsersContext);
    const postsData = useContext(PostsContext);


    const getUserById = (id) => {
        const result = usersData.find(value => value.id === id);
        return result.email;
    }


    return (<div className="border">
        {postsData && usersData ?
            postsData.map((value) => {
                return (<div className="card">
                    <div className="card-header">{getUserById(value.userId)}</div>
                    <div className="card-body">
                        <h2>{value.title}</h2>
                        <p>{value.body}</p>
                    </div>
                </div>)
            })
            : <p>Cargando Posts...</p>}

    </div>)


}



export { Post }