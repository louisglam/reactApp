import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';


class App extends React.Component{
    constructor(props){
      super(props);
      this.state = { color : "red" };

    }

    render(){
      return <h2>Hello,{this.props.color} App</h2>
    }
}

// ReactDOM.render(<App color="red"/>, document.getElementById('root'));


export default App;



  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );