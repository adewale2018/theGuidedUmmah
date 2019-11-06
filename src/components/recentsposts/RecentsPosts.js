import React from "react";
import { Link } from "react-router-dom";
import "./RecentsPosts.css";

const RecentsPosts = ({ posts }) => {
  return (
    <div className='RecentsPosts'>
      <h1>RECENTS POSTS</h1>
      <ul>
        {posts.map(post => (
          <Link to={post.title}>
            <li key={post.id}>{post.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default RecentsPosts;
