import React from "react";

class CatcherComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
          <div className="text-center">
            <h1 className="text-5xl mb-4">💥</h1>
            <p className="text-lg mb-6">Terjadi error, coba reload</p>
            <button
              onClick={this.handleReload}
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded"
            >
              Reload
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default CatcherComp;