import React from 'react';

class Objects extends React.Component {
  constructor() {
    super();
    this.renderObject = this.renderObject.bind(this);
  }

  renderObject(key) {
    const obj = this.props.objects[key];
    const removeButton = <button className="button-remove" onClick={ () => this.props.removeFromObjects(key) }>&times;</button>
    const keys = Object.keys(obj);

    return (
      <li key={key} className="item">
        {keys[0]} {obj[keys[0]]}
        {removeButton}
      </li>
    )
  }

  render() {
    const objectIds = Object.keys(this.props.objects);
    if (objectIds.length < 1) {
      return (
        <div></div>
      )
    }

    return (
        <div className="objects-view">
          <ul className="objects">
            {Object.keys(this.props.objects).map(this.renderObject)}
          </ul>
        </div>
    )
  }
}

export default Objects;