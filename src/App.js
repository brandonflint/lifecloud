import React, { Component } from 'react';
import './App.css';

import AddObjectForm from './components/AddObjectForm';
import Objects from './components/Objects';

class App extends Component {
  constructor() {
    super();

    this.addObj = this.addObj.bind(this);
    this.removeFromObjects = this.removeFromObjects.bind(this);
    this.state = {
      user: {
        self: {},
        social: {},
        settings: {}
      }
    };
  }

  componentWillMount() {
    // this.ref = base.syncState(`${this.props.params.storeId}/fishes`, {
    //   context: this,
    //   state: 'fishes'
    // });

    const localStorageRef = localStorage.getItem(`test`);
    if(localStorageRef) {
        this.setState({
          user: JSON.parse(localStorageRef)
        });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(`test`, JSON.stringify(nextState.user));
  }

  addObj(category, newEntry) {
    const user = {...this.state.user};
    user[category] ? Object.assign(user[category], newEntry) : user[category] = newEntry;
    this.setState({ user });
  }

  removeFromObjects(key) {
    const user = {...this.state.user};
    delete user[key];
    this.setState({ user });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Person</h2>
        </div>
        <div className="create-object">
          <AddObjectForm
            user={this.state.user}
            addObj={this.addObj} 
          />
        </div>
        <Objects 
          user={this.state.user}
          removeFromObjects={this.removeFromObjects}
        />
      </div>
    );
  }
}

export default App;
