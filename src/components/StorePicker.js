import React from "react";
import PropTypes from "prop-types";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  static propTypes = {
    history: PropTypes.object
  };

  goToStore = event => {
    event.preventDefault();
    const storeName = this.myInput.value.value;
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.myInput}
          placeholder="Store Name"
          required
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store &rarr;</button>
      </form>
    );
  }
}

export default StorePicker;
