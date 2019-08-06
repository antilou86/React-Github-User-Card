import React from 'react';
import axios from 'axios'
import UserCard from './components/UserCard'
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      userData: {},
    }
  }

  componentDidMount() {
    this.fetchGitData();
  }

  fetchGitData = () => {
    axios.get(`https://api.github.com/users/antilou86`).then(
      (res) => {
        console.log('info.data: ', res.data);
        this.setState({ userData: res.data }) 
        })
      .catch(
        (err) => {
          console.log('the error is: ' + err);
        })
  }

  render() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <h1>Github User Card: now with ReactJs! </h1>
      {/* </header> */}

      <div><p>user card goes here</p></div>
      <UserCard userData={this.state.userData}/>

      <div><p>graph here</p></div>

      <div><p>followers here</p></div>
    </div>
  );
};
} 

export default App;
