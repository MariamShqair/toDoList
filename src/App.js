import React, { Component } from 'react';
import ShowList from "./component/showList";
import AddList from "./component/addList";
import './App.css';

class App extends Component {

  state = {
    term: {},
    items: []
  };
  handleInputChange = ({ target: input }) => {
    const term = {};
    term.id = Math.random() + input.value;

    term.title = input.value;
    term.checked = false;


    this.setState({ term });

  };
  handleAdd = (event) => {
    event.preventDefault();
    const term = this.state.term;

    this.setState({ items: [...this.state.items, term] });

  };
  handleDelete = id => {
    const items = this.state.items.filter(item => item.id !== id);
    this.setState({ items });

  };
  handleCheckBoxChange = (item) => {
    const index = this.state.items.map(i => i.id).indexOf(item.id);
    const items = [...this.state.items];
    items[index].checked = !items[index].checked;
    this.setState({ items });

  };
  titleStyle = checked => {

    const style = checked === false ? "none" : "line-through";
    return style;
  };

  render() {

    return (
      <div className="container">
        <div >
          <h1 className="h1 text-center">To Do List</h1>
          <AddList
            handleAdd={this.handleAdd}
            handleInputChange={this.handleInputChange}
          ></AddList>

          <ShowList
            items={this.state.items}
            handleCheckBoxChange={this.handleCheckBoxChange}
            handleDelete={this.handleDelete}
            titleStyle={this.titleStyle}
          />

        </div>
      </div>

    );
  }
}

export default App;
