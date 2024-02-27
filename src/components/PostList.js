// components/PostList.js
import React from 'react';

const PostList = ({ posts, onEdit, onDelete }) => {
  return (
    <div className="post-list">
      <h2>Posts</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.name}</td>
              <td>
                <img src={post.image} alt={post.name} className="post-image" />
              </td>
              <td>
                <button className="edit-btn" onClick={() => onEdit(post)}>
                  Edit
                </button>
                <button className="delete-btn" onClick={() => onDelete(post)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostList;