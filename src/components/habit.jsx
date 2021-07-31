import React, { PureComponent } from 'react';

class Habit extends PureComponent {

    componentDidMount(){
      console.log(`habit : ${this.props.habit.name} mounted`);
    }

    componentWillUnmount(){
      console.log(`habit : ${this.props.habit.name} will unmount`);
    }

  //********************************************************
  // 부모 component로부터 전달받은 props로 전달받은 habit의 데이터를
  // 보여주기만 하는 component이기 때문에 이 component는 자체적으로 state를
  // 갖고 있을 필요가 전혀 없음!
  //********************************************************
  // state = {
  //   count: 0,
  // };

  handleIncrement = () =>{
    this.props.onIncrement(this.props.habit);
  }

  handleDecrement = () =>{  
    this.props.onDecrement(this.props.habit);
  }

  handleDelete = () =>{
    this.props.onDelete(this.props.habit);
  }

  render() {
    const {name, count} = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button className="habit-button habit-increase" onClick={this.handleIncrement}>
          <i className="fas fa-plus-square"></i>
        </button>
        <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
          <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habit-delete" onClick={this.handleDelete}>
          <i className="fas fa-trash"></i>
        </button>
      </li>
      
    );
  }
}

export default Habit;