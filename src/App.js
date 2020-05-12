import React from 'react';
import './App.css';
import axios from "axios";
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username:null
        };
    }

  componentDidMount() {
      axios('http://localhost:3001/api')
          .then( res => {
            // console.log(res.data.username);
            this.setState({username : res.data.username})
          })
  }

  render() {
    const {username} = this.state;
    return (
        <div className="App">
          <header className="App-header">
            {username ? `Hello ${username}` : 'Hello World'}
          </header>
        </div>
    );
    ;
  }
}

export default App;