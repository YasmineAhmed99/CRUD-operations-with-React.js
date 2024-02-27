import React from 'react';


const DeleteConfirmation = ({ post, onConfirm, onCancel }) => {
  return (
    <div className="delete-confirmation">
      <h2>Delete Confirmation</h2>
      <p>Are you sure you want to delete post "{post.name}"?</p>
      <div className="confirmation-buttons">
        <button className="confirm-btn" onClick={onConfirm}>
          Confirm
        </button>
        <button className="cancel-btn" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmation;