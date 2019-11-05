import React from 'react';
//Function component
//Using multple lines reqire you to use brackets
const About = () => {
	const message = 'Hello World';
	return React.createElement('div', null, 'I am generating this with createElement');
};

export default About;
