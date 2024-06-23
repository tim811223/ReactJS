import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ThumbsUp = () => {
  let likes = 0;
  return (
    <button className="button">
      <span className="icon">
        <FontAwesomeIcon icon={faThumbsUp} />
        <i className="fab fa-github"></i>
      </span>
      <span>GitHub</span>
    </button>
  );
};
