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

  removeFromObjects(key, item) {
    const user = {...this.state.user};
    //console.log(user[key][item]);
    delete user[key][item];
    if (Object.keys(user[key]).length === 0 && user[key].constructor === Object) {
      delete user[key];
    }
    this.setState({ user });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header"> <h2>Person</h2> </div>
        <AddObjectForm user={this.state.user} addObj={this.addObj} />
        <Objects user={this.state.user} removeFromObjects={this.removeFromObjects} />
      </div>
    );
  }
}

export default App;
