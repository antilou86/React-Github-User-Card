import React from 'react';
import axios from 'axios'
import UserCard from './components/UserCard'
import Followers from './components/Followers'
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      userData: {},
      followerData: []
    }
  }

  componentDidMount() {
    this.fetchGitData();
    this.fetchFollowerData();
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

    fetchFollowerData = () => {
      axios.get(`https://api.github.com/users/antilou86/followers`).then(
        (result) => {
          console.log('follower data: ', result.data)
          this.setState( {followerData: result.data} )
        })
        .catch(
          (error) => {
            console.log(error)}
            )
    }
 
  render() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <h1>Github User Card: now with ReactJs! </h1>
      {/* </header> */}

      <h3>Meet {this.state.userData.login}: </h3>
      <UserCard userData={this.state.userData}/>

      <h3>Followers: </h3>
      <Followers followerData={this.state.followerData}/>
    </div>
  );
};
} 

export default App;
