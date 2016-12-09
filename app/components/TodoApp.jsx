var React = require('react');
var uuid = require('node-uuid');
var _  = require('lodash');

var AddTodo = require('AddTodo');
var TodoAPI = require('TodoAPI');
var TodoList = require('TodoList');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: TodoAPI.getTodos(),
      showCompleted: false,
      searchText: ''
    }
  },
  componentDidUpdate: function() {
    TodoAPI.setTodos(this.state.todos);
  },
  handleAddItem: function(text) {
    console.log(text);
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false
        }
      ]
    })
  },
  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  handleToggle: function(id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo; 
    });

    this.setState({
      todos: updatedTodos
    });
  },
  render: function() {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodo onAddItem={this.handleAddItem}/>
      </div>
    );
  }
});

module.exports = TodoApp;