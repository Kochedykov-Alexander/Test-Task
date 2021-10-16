import React, { useContext, useEffect } from 'react'
import styles from '../styles/Main.module.scss'
import Products from './Products'
import Tabs from './UI/Tabs'
import { IProduct } from "../types/IProduct";
import sentContext from '../shared/context';
import emailjs from 'emailjs-com';
import Order from './UI/Order';
import { useGeolocation } from '../hooks/useGeolocation';


const Main: React.FC = () => {

	const {state, setState} = useContext(sentContext);
	const geo = useGeolocation();

	
	useEffect(() => {
		if(state == true) { 
			setTimeout(() => setState(false), 10000)
		}
	}, [state])


	function sendEmail(e){
		setState(true)
		e.preventDefault();
		emailjs.sendForm('service_owomoeu', 'template_x9ti2tv', e.target, 'user_CDqPOO792JWRicGOj2wWn')
		  .then((result) => {
			  
			  console.log(result.text);

		  }, (error) => {
			  console.log(error.text);
		  });
		  e.target.reset;
	
		 
	};

	
	const products: IProduct[] = [{id: 1, name: 'Сумка', description: 'Крутая сумка', price: 300 }, {id: 2, name: 'Сумка', description: 'Крутая сумка 2', price: 300 }, {id: 3, name: 'Сумка', description: 'Крутая сумка 3', price: 300 }, {id: 4, name: 'Сумка', description: 'Крутая сумка 4', price: 300 }]
	
	return (
		<main className={styles.page}>
			<div className={styles.page__main + " " + styles.main}>
				
				<div className={styles.main__container + " " + styles._container}>
					<div className={styles.main__body}>
						<div className={styles.main__body__container}>

						
						<form className={styles.main__form} onSubmit={sendEmail}>
							{!state ? <Tabs geolocation={geo}/> : <Order/>}
						</form>
						<Products products = {products}></Products>
					</div>
				</div>
			</div>
			</div>
		</main>
	)
}

export default Main;
