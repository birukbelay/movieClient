import React from "react";

class RSh extends React.Component {
  render() {
    return (
      <h3 className="themeoptions-heading">
        <div>Header Options</div>
        <button
          type="button"
          className="btn-pill btn-shadow btn-wide ml-auto btn btn-focus btn-sm switch-header-cs-class"
          data-class
        >
          Restore Default
        </button>
      </h3>
    );
  }
}

export default RSh;
