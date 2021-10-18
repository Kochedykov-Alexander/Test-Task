import React, { useContext, useEffect, useState } from 'react'
import styles from '../styles/Main.module.scss'
import Products from './Products'
import Tabs from './UI/Tabs'
import { IProduct } from "../types/IProduct";
import sentContext from '../shared/context';
import emailjs from 'emailjs-com';
import Order from './UI/Order';
import { useGeolocation } from '../hooks/useGeolocation';
import { useMutation } from '@apollo/client';
import { CREATE_ORDER } from '../mutations/order';
import { createRouteLoader } from 'next/dist/client/route-loader';


const Main: React.FC = () => {

	const {state, setState} = useContext(sentContext);
	const [newOrder] = useMutation(CREATE_ORDER);
	const [order, setOrder] = useState(null);
	
	
	useEffect(() => {
		if(state == true) {
			setTimeout(() => setState(false), 10000)
		}
	}, [state])

	const moment = require('moment');

	const now = moment();

	now.subtract('seconds', 7); // takes 7 seconds of the current time
	console.log(now.subtract('days', 7));    // takes 7 days of the current date
	now.subtract('months', 7);  // takes 7 months of the current date
	now.subtract('years', 7); 

	function sendEmail(e) {
		
		e.preventDefault();

		const form = document.getElementById('form');
		const full_name = form.querySelector('[name="name"]').value
		const email = form.querySelector('[name="email"]').value
		const phone = form.querySelector('[name="phone"]').value
		const street = form.querySelector('[name="street"]').value
		const apt = form.querySelector('[name="apt"]').value
		const city = form.querySelector('[name="city"]').value
		const country = form.querySelector('[name="country"]').value
		const zip = form.querySelector('[name="zip"]').value
		const card_number = form.querySelector('[name="card_number"]').value
		const expire_date = form.querySelector('[name="expire_date"]').value
		const security_code = form.querySelector('[name="security_code"]').value
		
		newOrder({
			variables: {
				input: {
					full_name, email, phone, street, apt, city, country, zip, card_number, expire_date, security_code
				}
			}
		}).then(({data}) => {
			console.log(data.createOrder)
			setOrder(data.createOrder.id)	
		})
		setState(true)
		emailjs.sendForm('service_owomoeu', 'template_x9ti2tv', e.target, 'user_CDqPOO792JWRicGOj2wWn')
		  .then((result) => { 
			  console.log(result.text);

		  }, (error) => {
			  console.log(error.text);
		  });
		  e.target.reset;
		 
	};

	return (
		<main className={styles.page}>
			<div className={styles.page__main + " " + styles.main}>
				
				<div className={styles.main__container + " " + styles._container}>
					<div className={styles.main__body}>
						<div className={styles.main__body__container}>

						
						<form id="form" className={styles.main__form} onSubmit={sendEmail}>
							{!state ? <Tabs/> : <Order order={order}/>}
							
						</form>
						<Products/>
					</div>
				</div>
			</div>
			</div>
		</main>
	)
}

export default Main;
