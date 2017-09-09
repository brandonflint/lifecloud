import React from 'react';

class Objects extends React.Component {
  constructor() {
    super();
    this.renderObject = this.renderObject.bind(this);
  }

  renderObject(key) {
    const obj = this.props.user[key];

    return (
      <div className="category">
        <h2 className="category-title">{key}</h2>
        {Object.keys(obj).map( (item) => 
          <li className="item">
            <strong>{item}</strong>{': '}{obj[item]}
            <button className="button-remove" onClick={ () => this.props.removeFromObjects(key, item) }>&times;</button>
          </li>) 
        }
      </div>
    )
  }

  render() {
    const objectIds = Object.keys(this.props.user);
    if (objectIds.length < 1) {
      return (
        <div></div>
      )
    }

    return (
        <div className="objects-view">
          {Object.keys(this.props.user).map(this.renderObject)}
        </div>
    )
  }
}

export default Objects;