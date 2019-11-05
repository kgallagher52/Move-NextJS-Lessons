import React, { Component } from 'react'

//Function Components
//WHEN TO USE:
// 1.For smaller components
// 2.Reusable components
// 3.Presntional components , partialy right, we can use HOOKS and specify state  
// const About = () => {
//   return(
//     <h1>Hello I am a class component.</h1>
//   )
// }

//Class component
class About extends Component {
  render () {
    return (
      <h1>Hello I am a class component.</h1>
    )
  }
}

export default About