import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      message: ''
    };
  }
  componentDidCatch(error) {
    this.setState({ error: true, message: error.message });
  }

  render() {
    return (
          <div>{this.state.error && <p>{this.state.message}</p>}</div>
    );
  }
}
export default ErrorBoundary;
