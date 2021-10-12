import React from 'react'
import styles from '../styles/Main.module.scss'
import Products from './Products'
import Tabs from './UI/Tabs'


export default function Main() {
	return (
		<main class={styles.page}>
			<div class={styles.page__main + " " + styles.main}>
				
				<div class={styles.main__container + " " + styles._container}>
					<div class={styles.main__body}>
						<div class={styles.main__body__container}>

						
						<form action="#" class={styles.main__form}>
							<Tabs></Tabs>
						</form>
						<Products></Products>
						
					</div>
				</div>
			</div>
			</div>
		</main>
	)
}
