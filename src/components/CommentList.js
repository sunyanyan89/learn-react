import React from 'react'

function CommentList({comments, onDeleteComment}){

  return (
    <div className="comment-list-component">
      <label>留言列表</label>
      <ul className="list-group mb-3">
        {
          comments && comments.map((e, i) => 
            <li className="list-group-item" key={i} onClick={() => onDeleteComment(i)}>
              <span>{e}</span>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default CommentList