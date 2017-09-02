import React from 'react';

class AddObjectForm extends React.Component {
  constructor() {
    super();

    this.createOptionsCategory = this.createOptionsCategory.bind(this);
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
    console.log(this.category.value);
  }
  
  createOptionsCategory() {
    const namesArr = [];
    Object.keys(this.props.curObjs)
      .map((key) => namesArr.push( <option key={key} value={key}>{key}</option> ));
    return(namesArr);
  }
  
  createDropDown() {
    return (
      <div className="category-list">
        <select ref={(input) => this.category = input} name="category" id="category">
          <option value="new" selected>create new</option>
          {this.createOptionsCategory()}
        </select>
      </div>
    )
  }

  render() {
    return (
      <div>
        <form ref={(input) => this.objectForm = input} onSubmit={(e) => this.createObj(e)}>

          {this.createDropDown()}
          <input ref={(input) => this.name = input} type="text" required placeholder="Name" />
          {this.renderFields()}

          <button type="button" onClick={this.test}>Add field</button>
          <button type="submit">Create</button>
        </form>
      </div>
    )
  }
}

export default AddObjectForm;