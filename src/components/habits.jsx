import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
  // state = {
  //   habits : [
  //     {id : 1, name : 'Reading', count: 0},
  //     {id : 2, name : 'Running', count: 0},
  //     {id : 3, name : 'Coding', count: 0},
  //   ],
  // };

  handleIncrement = (habit) =>{
   this.props.onIncrement(habit);
  }

  handleDecrement = (habit) =>{  
    this.props.onDecrement(habit);

  }

  handleDelete = (habit) =>{
    this.props.onDelete(habit);

  }

  handleAdd = (name) =>{
    this.props.onAdd(name);
  }

  handleReset = ()=>{
    this.props.onReset();
  }

  render() {
    return (
      <div>
      <HabitAddForm
        onAdd={this.handleAdd}
      />
      <ul>
        {this.props.habits.map(habit => 
          <Habit          //Habit Component안에 key, habit, onIncrement,,,등의 'object'를 전달해줌.
            key={habit.id} 
            habit={habit} 
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          /> //props 사용!
        )}
      </ul>
      <button className="reset-btn" onClick={this.handleReset}>Reset All</button>
    </div>
    );
  }
}

export default Habits;

