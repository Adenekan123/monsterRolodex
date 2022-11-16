import { Component } from "react";

class SearchBox extends Component {
  constructor() {
    super();
  }

  render() {
    const { onChangeHandler } = this.props;
    return (
      <>
        <input type="text" onChange={onChangeHandler} />
      </>
    );
  }
}

export default SearchBox;
