import React from "react";

export default class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }
  render() {
    if (this.state.hasError) {
      <div className="flex justify-center flex-col items-center align-middle w-screen h-screen">
        <h3 className="text-3xl font-semibold text-orange-500">
          We are sorry, looks like something unexpectedly happen when loading
          the page, please try again later.
        </h3>
      </div>;
    }
    return this.props.children;
  }
}
