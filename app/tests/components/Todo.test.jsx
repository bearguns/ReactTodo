var $ = require('jQuery');
var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var Todo = require('Todo');

describe.only('todo', () => {
  it('should exist', ()=> {
    expect(Todo).toExist();
  });

  it('should call this.props.onToggle() when clicking a todo', ()=> {
    var todoData = {
      id: 199,
      text: 'Write todo test',
      completed: true
    };

    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(199);
  });
});