//function component쓸 때 'rsi' + tab키
import React, { memo } from 'react';

const HabitAddForm = memo((props) => {
  const inputRef = React.createRef();

  const onSubmit = (event) =>{
   
    event.preventDefault(); //기본적으로 submit이 발생하면 page가 refresh되거나 다른 page로 가는 걸 예상하고 있기 때문.
    const name = inputRef.current.value;
    name && props.onAdd(name);
    inputRef.current.value = '';
  };
  return (
     <form className="add-form" onSubmit={onSubmit}>
       <input ref = {inputRef}
         type="text"
         className="add-input"
         placeholder="Habit"
       />
       {/* form에서는 button이 눌리면 submit이라는 event가 발생한다! */}
       <button className="add-btn">Add</button>  
     </form>
   );
  }
);
export default HabitAddForm;



// 클래스 component 방식.
// import React, { PureComponent } from 'react';
// class HabitAddForm extends PureComponent {
//   inputRef = React.createRef();

//   onSubmit = (event) =>{
//     //기본적으로 submit이 발생하면 page가 refresh되거나 다른 page로 가는 걸 예상하고 있기 때문.
//     event.preventDefault();
//     const name = this.inputRef.current.value;
//     name && this.props.onAdd(name);
//     this.inputRef.current.value = '';
//   }

//   render() {
//     return (
//       <form className="add-form" onSubmit={this.onSubmit}>
//         <input ref = {this.inputRef}
//           type="text"
//           className="add-input"
//           placeholder="Habit"
//         />
//         {/* form에서는 button이 눌리면 submit이라는 event가 발생한다! */}
//         <button className="add-btn">Add</button>  
//       </form>
//     );
//   }
// }

// export default HabitAddForm;

