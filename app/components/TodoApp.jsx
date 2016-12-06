var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {id: 1, text: "Walk the dog"},
        {id: 2, text: "Make fake todos"},
        {id: 3, text: "Pass full props to the todo component"}
      ]
    }
  },
  render: function() {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    );
  }
});

module.exports = TodoApp;