import React from 'react';

export default class Square extends React.Component {
    // TODO: remove the constructor
    constructor(props) {
      super(props);
      this.state = {
        value: null,
      };
    }
  
    render() {
      // TODO: use onClick={this.props.onClick}
      // TODO: replace this.state.value with this.props.value
      return (
        <button className="square bg-blue-600 hover:bg-lynx-dark px-4 rounded focus:outline-none text-white  font-semibold py-2 px-4" onClick={() => this.setState({value: 'X'})}>
          {this.state.value}
        </button>
      );
    }
  }
  