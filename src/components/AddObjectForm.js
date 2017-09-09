import React from 'react';

class AddObjectForm extends React.Component {
  constructor() {
    super();

    this.dropDownOptions = this.dropDownOptions.bind(this);
    this.createDropDown = this.createDropDown.bind(this);
    this.test = this.test.bind(this);
  }

  createObj(event) {
    event.preventDefault();
    const obj = {
      [this.key.value]: this.value.value
    };

    this.props.addObj(this.name.value, obj);
    this.objectForm.reset();
  }

  renderFields() {
    return (
      <div className="objectPair">
        <input ref={(input) => this.key = input} type="text" placeholder="key" />
        <input ref={(input) => this.value = input} type="text" placeholder="value" />
      </div>
    )
  }
  
  test() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.pop();
    var mystring = fruits.join(" * ");
    console.log(mystring);
  }
  
  dropDownOptions() {
    console.log(this.props.user)
    return(
      Object.keys(this.props.user)
        .map( (key) => <option key={key} value={key}>{key}</option> )
    );
  }
  
  createDropDown() {
    return (
      <div className="category-list">
        <select ref={(input) => this.category = input} name="category" id="category" defaultValue="new">
          <option value="new">create new</option>
          { this.dropDownOptions() }
        </select>
      </div>
    )
  }

  render() {
    return (
      <div className="create-object">
        <form ref={(input) => this.objectForm = input} onSubmit={(e) => this.createObj(e)}>

          {this.createDropDown()}
          <input ref={(input) => this.name = input} type="text" required placeholder="Name" />
          {this.renderFields()}

          <button type="button" onClick={this.test}>+</button>
          <button type="submit">Finish</button>
        </form>
      </div>
    )
  }
}

export default AddObjectForm;