import React, { useState, useEffect } from 'react';


const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        info();
    }, []);

    const info = async () => {
        try {
            const res = await fetch(`/data.json`);
            const posts = await res.json();
            setPosts(posts);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1>Post List</h1>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
};

export default PostList;
