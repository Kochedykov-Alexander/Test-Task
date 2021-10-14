import React from 'react'
import styles from '../styles/Main.module.scss'
import Products from './Products'
import Tabs from './UI/Tabs'
import { IProduct } from "../types/IProduct";


const Main: React.FC = () => {

	const products: IProduct[] = [{id: 1, name: 'Сумка', description: 'Крутая сумка', price: 300 }, {id: 2, name: 'Сумка', description: 'Крутая сумка 2', price: 300 }, {id: 3, name: 'Сумка', description: 'Крутая сумка 3', price: 300 }, {id: 4, name: 'Сумка', description: 'Крутая сумка 4', price: 300 }]
	
	return (
		<main className={styles.page}>
			<div className={styles.page__main + " " + styles.main}>
				
				<div className={styles.main__container + " " + styles._container}>
					<div className={styles.main__body}>
						<div className={styles.main__body__container}>

						
						<form action="#" className={styles.main__form}>
							<Tabs></Tabs>
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
