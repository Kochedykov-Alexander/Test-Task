import React, {FC} from 'react'
import styles from '../../styles/Order.module.scss'

const Order: React.FC = () => {
	return (
		<div className={styles.order}>
			<div className={styles.order__title}>
				Thank you for your order!
			</div>
			<div className={styles.order__number}>
				Order number is: 188787788
			</div>
			<div className={styles.order__text}>
				Your will recieve an email confirmation shortly to <a href="">jonathan.smith@gmail.com</a>
			</div>
			<div className={styles.order__estimated}>
				Estimated delivery Day is <p className={styles.bold}>Friday 1st April 2016</p>
			</div>	
			<a className={styles.order__print_recipe}>Print Recipe</a>
			
		</div>

		
	)
}

export default Order;
