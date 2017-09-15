import React from 'react';

class Objects extends React.Component {
  constructor() {
    super();
    this.renderItem = this.renderItem.bind(this);
  }

  renderItem(key) {
    const category = this.props.user[key];

    return (
      <div className="category">
        <h1 className="category-title">{key}</h1>
        {Object.keys(category).map(item =>
          (<li className="item">
            <strong>{item}</strong>{': '}{category[item]}
            <button className="button-remove" onClick={() => this.props.removeFromUser(key, item)}>&times;</button>
          </li>))
        }
      </div>
    );
  }

  render() {
    if (Object.keys(this.props.user).length < 1) {
      return (null);
    }

    return (
      <div className="categories-view">
        {Object.keys(this.props.user).map(this.renderItem)}
      </div>
    );
  }
}

export default Objects;
