import "bulma/css/bulma.min.css";
import { ThumbsUp } from "./ThumbsUp";
import { ThumbsDown } from "./ThumbsDown";
//import { ThumbsUpClasssCompenment } from "./ThumbsUpClasssCompenment";

export const App = () => {
  return (
    <div className="section">
      <div className="container">
        <ThumbsUp />
        <ThumbsDown />
      </div>
    </div>
  );
};
