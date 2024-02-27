import React, { useState } from 'react';
import './App.css';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import EditPost from './components/EditPost';
import DeleteConfirmation from './components/DeleteConfirmation';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [editPost, setEditPost] = useState(null);
  const [deletePost, setDeletePost] = useState(null);

  const handleCreatePost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const handleEditPost = (post) => {
    setEditPost(post);
  };

  const handleUpdatePost = (updatedPost) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === updatedPost.id) {
        return { ...post, ...updatedPost };
      }
      return post;
    });
    setPosts(updatedPosts);
    setEditPost(null);
  };

  const handleDeletePost = (post) => {
    setDeletePost(post);
  };

  const confirmDeletePost = () => {
    const updatedPosts = posts.filter((post) => post.id !== deletePost.id);
    setPosts(updatedPosts);
    setDeletePost(null);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Post Manager</h1>
      <div className="app-content">
        <CreatePost onCreate={handleCreatePost} />
        <PostList posts={posts} onEdit={handleEditPost} onDelete={handleDeletePost} />
        {editPost && <EditPost post={editPost} onUpdate={handleUpdatePost} />}
        {deletePost && (
          <DeleteConfirmation post={deletePost} onConfirm={confirmDeletePost} onCancel={() => setDeletePost(null)} />
        )}
      </div>
    </div>
  );
};

export default App;