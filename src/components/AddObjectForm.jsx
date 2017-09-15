import React from 'react';

class AddObjectForm extends React.Component {
  static test() {
    console.log('test');
  }

  constructor() {
    super();

    this.dropDownOptions = this.dropDownOptions.bind(this);
    this.createDropDown = this.createDropDown.bind(this);
  }

  createItem(event) {
    event.preventDefault();
    const obj = {
      [this.key.value]: this.value.value,
    };

    this.props.addObj(this.name.value, obj);
    this.objectForm.reset();
  }

  dropDownOptions() {
    for (const prop in this.props.user) {
      console.log(prop)
    }
    
    return (
      console.log('a')
      //Object.keys(this.props.user)
      //  .map(key => <option key={key} value={key}>{key}</option>)
    );
  }

  createDropDown() {
    return (
      <div className="category-list">
        <select
          ref={(input) => { this.category = input; }}
          name="category"
          id="category"
          defaultValue="new"
        >
          <option key="new" value="new">create new</option>
          {this.dropDownOptions()}
        </select>
      </div>
    );
  }

  renderFields() {
    return (
      <div className="objectPair">
        <input ref={(input) => { this.key = input; }} type="text" placeholder="key" />
        <input ref={(input) => { this.value = input; }} type="text" placeholder="value" />
      </div>
    );
  }

  render() {
    return (
      <div className="create-object">
        <form ref={(input) => { this.objectForm = input; }} onSubmit={e => this.createItem(e)}>
          {this.createDropDown()}
          <input ref={(input) => { this.name = input; }} type="text" required placeholder="Name" />
          {this.renderFields()}
          <button type="button" onClick={this.test}>+</button>
          <button type="submit">Finish</button>
        </form>
      </div>
    );
  }
}

export default AddObjectForm;
