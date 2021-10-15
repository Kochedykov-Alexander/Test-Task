import emailjs from 'emailjs-com';
import React from 'react';
import sentContext from '../shared/context';


export default function sendEmail(e) {

	const {state, setState} = React.useContext(sentContext);


	e.preventDefault();
   
	emailjs.sendForm('service_owomoeu', 'template_x9ti2tv', e.target, 'user_CDqPOO792JWRicGOj2wWn')
      .then((result) => {
          () => setState(true)
          console.log(result.text);

      }, (error) => {
          console.log(error.text);
      });
	  e.target.reset;
};

