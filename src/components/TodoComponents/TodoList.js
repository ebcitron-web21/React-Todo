// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js


import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends React.Component{
    constructor(props){
        super();
        this.state = {
            ...props
        }
        //console.log("TodoListProps: ", props);
    }

    render(){
        return(
            <>
            <div className = 'todoList'>
                {this.props.todos.map(todo => {
                    return <Todo task = {todo.task} id = {todo.id} completed ={todo.completed}  />
                })}
            </div>
            </>
        );
    }
}

export default TodoList;