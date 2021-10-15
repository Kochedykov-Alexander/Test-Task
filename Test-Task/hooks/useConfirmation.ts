import emailjs from 'emailjs-com';


export default function sendEmail(e) {
	e.preventDefault();
	emailjs.sendForm('service_owomoeu', 'template_x9ti2tv', e.target, 'user_CDqPOO792JWRicGOj2wWn')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
	  e.target.reset;
};

