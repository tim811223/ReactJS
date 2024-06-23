import { faThumbsDown, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const ThumbsUp = () => {
  const [likes, setlikes] = useState<number>(0);
  const [dislikes, setDislikes] = useState<number>(0);
  return (
    <>
      <button className="button is-primary" onClick={() => setlikes(likes + 1)}>
        <span className="icon">
          <FontAwesomeIcon icon={faThumbsUp} />
        </span>
        <span>{likes}</span>
      </button>
      <button
        className="button is-danger"
        onClick={() => setDislikes(dislikes + 1)}
      >
        <span className="icon">
          <FontAwesomeIcon icon={faThumbsDown} />
        </span>
        <span>{dislikes}</span>
      </button>
    </>
  );
};
