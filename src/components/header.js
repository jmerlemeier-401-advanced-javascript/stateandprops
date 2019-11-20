import React from 'react';

//dumb component, does not have state. 
//function that rerurns JSX
//props originates in APP and goes to header

const Header = (props) => {
  return (
    //'title' key comees from App in teh render function return
    <h1>{props.title}</h1>
  )
}

//OR could do this:
// class Header extends React.Component {
//   render() {
//     return (
//       <h1>{this.props.title}</h1>
//     )
//   }
// }

export default Header;