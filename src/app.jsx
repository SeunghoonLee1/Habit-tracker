import './app.css';
import Habits from './components/habits';
import React, { Component } from 'react';
import Navbar from './components/navbar';
import HabitAddForm from './components/habitAddForm';

class App extends Component {
  state = {
    habits : [
      {id : 1, name : 'Readings', count: 0},
      {id : 2, name : 'Running', count: 0},
      {id : 3, name : 'Coding', count: 0},
    ],
    totalCount : 0,
  };


  handleIncrement = (habit) =>{
    //새로운 array를 만들고 기존 state의 habits안에 값들을 복사해옴 Spread operator(...)을 이용해서
    //이때 새로운 habits와 기존habits array안에있는 object는 동일한 Object이다!
    // const habits = [...this.state.habits];  
    // const index = habits.indexOf(habit);
    // habits[index].count++;
    // this.setState({totalCount: this.state.totalCount + 1});
    
    //위와 같은 결과이지만, habit을 PureCompoenet로 바꿔준 뒤, 이렇게 해야 +버튼을 눌렀을때 habit이 re-rendering이 일어난다.
    //기존꺼는 habit안의 data를 변경해줄 뿐, reference는 차이가 없기때문에 PureComponent인 Habit은 re-rendering이 발생하지않음!
    //하지만 아래와 같이 새로 object를 copy해서 만들어 줌으로써 Habit에 re-render가 일어나게 됨!
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id){
        return {...habit, count : habit.count + 1}; //id가 동일하다면 새로운 habit을 return함. count는 1 증가시키고 ...('deconstructing object')
      }
      return item;
    });
    
    this.setState({habits: habits});  //key : value(local variable habits)
    //위와 같이 key, value가 동일하면 하나로 생략 가능 -> this.setState(habits);

  };

  handleDecrement = (habit) =>{  
    // const habits = [...this.state.habits];  
    // const index = habits.indexOf(habit);
    // const count = habits[index].count - 1;
    // habits[index].count = (count > 0 ? count : 0);

    const habits = this.state.habits.map(item => {
      if(item.id === habit.id){
        const count = habit.count - 1;
        return {...habit, count : count < 0 ? 0: count}; //id가 동일하다면 새로운 habit을 return함. count는 1 증가시키고 ...('deconstructing object')
      }
      return item;
    });


    this.setState({habits: habits});
    
  }

  handleDelete = (habit) =>{
    const habits = [...this.state.habits];  
    const index = habits.indexOf(habit);
    habits.splice(index, 1);
    this.setState({habits: habits});  
  }


  handleAdd = (name) =>{
    const habits = [...this.state.habits, {id: Date.now(), name: name, count: 0}];
    this.setState({habits});
  }

  handleReset = ()=>{
    // const habits = [...this.state.habits];
    // habits.map(habit => {
    //   habit.count = 0
    //   return habit;
    // })

    const habits = this.state.habits.map(habit => {
      if(habit.count !== 0){
        return {...habit, count : 0};
      }else{
        return habit;
      }
    });


    this.setState({habits});
  }


  render() {
    return (
      <div>
        <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length}/>
        <Habits 
          habits={this.state.habits} 
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </div>
    );
  }
}

export default App;
