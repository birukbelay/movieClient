import React from "react";
import RSContainer from "./RSContainer";

class RightSideBar extends React.Component {
  render() {
    return (
      <div className="ui-theme-settings">
        <button
          type="button"
          id="TooltipDemo"
          className="btn-open-options btn btn-warning"
        >
          <i className="fa fa-cog fa-w-16 fa-spin fa-2x" />
        </button>
        <div className="theme-settings__inner">
          <RSContainer/>
        </div>
      </div>
    );
  }
}

export default RightSideBar;
