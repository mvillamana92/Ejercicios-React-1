import React, { useState, useEffect } from 'react';
import { PostsGrid } from "./components/PostsGrid"
import { Post } from "./components/Post"
import { UsersContext } from "./context/UsersContext"
import { PostsContext } from "./context/PostsContext"
import { getPosts } from "./api/get-posts"
import { getUsers } from "./api/get-users"




const App = () => {

    const [posts, setPosts] = useState();
    const [users, setUsers] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const postsData = await getPosts();
            setPosts(postsData);

            const usersData = await getUsers();
            setUsers(usersData);
        }
        fetchData();
        console.log("Se ha cargado la página")
    }, [])


    return (
        <div>
            <UsersContext.Provider value={users}>

                <PostsContext.Provider value={posts}>
                    <PostsGrid>
                        <Post />
                    </PostsGrid>
                </PostsContext.Provider>

            </UsersContext.Provider>
        </div>
    );
};

export default App;