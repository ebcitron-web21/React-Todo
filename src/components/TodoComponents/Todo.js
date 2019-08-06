import React, { Component } from 'react'

class Todo extends React.Component {
    constructor(props){
        super();
        this.state = {
          
           task: props.task,
           id: props.id,
           completed: props.completed
        }
    }
        toggleComplete = () => {
                   console.log("ToggleCompleteState: ", this.state);
                   this.setState({...this.state, completed: !this.state.completed}) 
    }

    render(){
        return(
        <>
         <button onClick = {this.toggleComplete} className="todo">

             <h4 style = {this.state.completed?{color: 'darkRed', textDecoration: 'line-through'}:{color: 'black'}}
                className = "todoText">Task: {this.state.task}
            </h4>
        </button>
        </>
     );
         }
}

export default Todo;