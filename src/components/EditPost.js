
import React, { useState } from 'react';

const EditPost = ({ post, onUpdate }) => {
  const [name, setName] = useState(post.name);
  const [image, setImage] = useState(post.image);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPost = {
      id: post.id,
      name,
      image,
    };
    onUpdate(updatedPost);
  };

  return (
    <div className="edit-post">
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Image URL:
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        </label>
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditPost;