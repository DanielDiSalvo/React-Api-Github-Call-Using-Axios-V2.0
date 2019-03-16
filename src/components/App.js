//Dependencies
import React, { Component } from 'react';
import axios from 'axios';

//CSS & Components 
import './App.css';
import FormUser from './FormUser';
 
class App extends Component {

  state = {
    id: null,
    location: null,
    avatar: null
  }

  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value.toLowerCase().replace(/ /g, ""); // Sanitize our user variable with no spaces in between and lowercase.
    if(user) { 
      axios(`https://api.github.com/users/${user}`)
      .then((res) => {
        const id = res.data.id;
        const location = res.data.location;
        const avatar = res.data.avatar_url;
        this.setState({
          id,
          location,
          avatar
        })
      }) 
    } else return; // If-Else structure allow us to submit only in case of we enter a username text

    document.getElementById("myForm").reset(); // This will allow us to reset our form.
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>GitHub User Search</h1>
        </header>
        <FormUser getUser={this.getUser} />
        {this.state.id ? 
        // This ternary operator will show us our user data in a table only in case
        //there exist data in our state, if not will show <p>Complete with username.</p>
          <table>
            <tbody>
              <tr>
                <th>Id Number</th>
                <th>Location</th> 
                <th>Avatar</th> 
              </tr>
              <tr>
                <td>{this.state.id}</td>
                <td>{this.state.location}</td>
                <td>
                  <img 
                    className="avatar"
                    src={this.state.avatar}
                    alt={"Avatar"}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        :
        <p>Complete with username.</p>
        }
      </div>
    );
  }
}

export default App;
