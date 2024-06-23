/*
照檔案要以 Class Component方法呈現
*/
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";

interface Props {}

interface State {
  likes: number;
  dislikes: number;
}

export class ThumbsUpClasssCompenment extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      likes: 0,
      dislikes: 0,
    };
  }

  handleLikes = () => {
    this.setState((prevState) => ({ likes: prevState.likes + 1 }));
  };

  handleDisLikes = () => {
    this.setState((prevState) => ({ dislikes: prevState.dislikes + 1 }));
  };

  render() {
    return (
      <>
        <button className="button is-info" onClick={this.handleLikes}>
          <span className="icon">
            <FontAwesomeIcon icon={faThumbsUp} />
          </span>
          <span>{this.state.likes}</span>
        </button>

        <button className="button is-danger" onClick={this.handleDisLikes}>
          <span className="icon">
            <FontAwesomeIcon icon={faThumbsDown} />
          </span>
          <span>{this.state.dislikes}</span>
        </button>
      </>
    );
  }
}
