import React from "react";
import { withRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSms } from "@fortawesome/free-solid-svg-icons";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import "./navBar.css";

library.add(faSms);
library.add(faInbox);

class UserIcons extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="userIcons">
        <span>
          <FontAwesomeIcon icon="sms" />
        </span>
        <span>
          <FontAwesomeIcon icon="inbox" />
        </span>
        <button onClick={ev => this.props.createButton(ev)}>Create</button>
      </div>
    );
  }
}

export default withRouter(UserIcons);
