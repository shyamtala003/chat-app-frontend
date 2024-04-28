import { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: false, errorInfo: null };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }
  render() {
    if (this.state.errorInfo) {
      return (
        <div className="h-screen p-6 bg-black bg-opacity-60 backdrop-blur-md">
          <h2 className="text-red-400">Something went wrong.</h2>
          <p className="mt-1 text-xl text-red-400">
            {this.state.error && this.state.error.toString()}
          </p>
          <p className="mt-2 text-red-400 text-md">
            {this.state.errorInfo.componentStack}
          </p>
        </div>
      );
    }
    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }
}

export default ErrorBoundary;
