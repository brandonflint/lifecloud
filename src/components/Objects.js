import React from 'react';

class Objects extends React.Component {
  constructor() {
    super();
    this.renderObject = this.renderObject.bind(this);
  }

  renderObject(key) {
    const removeButton = <button className="button-remove" onClick={ () => this.props.removeFromObjects(key) }>&times;</button>
    const obj = this.props.user[key];
    //const keys = Object.keys(obj);
    
    return (
      <div className="category">
        <h2 className="category-title">{key}</h2>
        {Object.keys(obj).map( (item) => 
          <li className="item">
            <strong>{item}</strong>{': '}{obj[item]}{removeButton}
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
          <ul className="objects">
            {Object.keys(this.props.user).map(this.renderObject)}
          </ul>
        </div>
    )
  }
}

export default Objects;