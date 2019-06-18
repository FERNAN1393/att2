/**
*   Description: Main app Container. Routes for app.
**/
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forgotPassModal: false
    };
  }
  
  render() {
    return (
      <div>
        Learn React
      </div>
    );
  }
}

export default App;
