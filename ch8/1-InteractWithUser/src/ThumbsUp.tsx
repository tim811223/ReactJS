import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ThumbsUp = () => {
  let likes = 0;
  return (
    <button className="button is-primary" onClick={() => likes++}>
      <span className="icon">
        <FontAwesomeIcon icon={faThumbsUp} />
      </span>
      <span>{likes}</span>
    </button>
  );
};
