import React from 'react';
class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    message: '',
  };
  componentDidCatch = (error, info) => {
    this.setState({ hasError: true, message: error });
  };
  render() {
    if (this.state.hasError) {
      return <h2>{this.state.message}</h2>;
    } else {
      return this.props.children;
    }
  }
}
export default ErrorBoundary;
