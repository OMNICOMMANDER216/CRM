import React from 'react';
import AsideCommentItem from './AsideCommentItem';

export default ({
  comments, editHandler, deleteHandler, currentUser, users,
}) => {
  comments = comments && comments.sort((c1, c2) => c2._id.localeCompare(c1._id));

  return (
    <div>
      { comments && comments.map(c => (
        <AsideCommentItem
          key={c._id}
          comment={c}
          editHandler={editHandler}
          deleteHandler={deleteHandler}
          currentUser={currentUser}
          users={users}
        />
      )) }
    </div>
  );
};
