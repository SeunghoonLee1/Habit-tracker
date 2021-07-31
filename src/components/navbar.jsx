import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
  render() {
    return (
      <>
      <nav className="navbar">
        <i className="navbar-logo fas fa-leaf"></i>
        <span>Habit Tracker</span>
        <span className="navbar-count">{this.props.totalCount}</span>
      </nav>
      </>
    );
  }
}

export default Navbar;


{/* 
  <div className="navbar">
<span className="logo">
  <i class="fas fa-leaf"></i>
</span>
<span className="app-name">
  Habit Tracker
</span>
<span className="habit-count-total">
  0
</span>
</div>
<div className="habit__input">
<input type="text" className="input__area" placeholder="Habit"/>
<button className="add__btn">Add</button>
</div> 
*/}