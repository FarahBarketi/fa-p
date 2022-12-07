import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_comments } from "../../Redux/Action/CommentAction";

import CommentCard from "./CommentCard";
const CommentList = ({ el },{role}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_comments());
  }, []);
  const comment = useSelector((state) => state.CommentReducer.comments);
  console.log(comment);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {comment?.map((comments) =>
        el._id == (comments.articleId && comments.articleId._id) ? (
          <div key={comments._id}>
            <CommentCard comments={comments} role={role} />
          </div>
        ) : null
      )}
    </div>
  );
};

export default CommentList;
