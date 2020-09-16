import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import Church from "./Pages/Church";
import ErrorBoundary from "./Components/Hoc/ErrorBoundary";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ErrorBoundary>
          <Church />
        </ErrorBoundary>
      </BrowserRouter>
    );
  }
}

export default App;
