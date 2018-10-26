import React, { Component } from 'react';

class List extends Component {


  render() {
    return (<form onSubmit={this.props.handleAdd}>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <button className="btn btn-outline-secondary"
            type="submit"
            id="button-addon1">Button</button>
        </div>
        <input type="text"
          className="form-control"
          placeholder=""
          aria-label="Example text with button addon"
          aria-describedby="button-addon1" onChange={this.props.handleInputChange}>
        </input>
      </div>

    </form>);
  }

}




export default List;