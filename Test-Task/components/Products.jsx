import React, { useState } from 'react'
import styles from '../styles/Products.module.scss'
import img from '../img/products/sumka.png';

export default function Products() {

	const [selectedProducts, setSelectedProducts] = useState([{id: 1, name: 'Сумка', description: 'cool sumka', price: 300}, {id: 4, name: 'Сумка', description: 'cool sumka', price: 300}, {id: 6, name: 'Сумка', description: 'cool sumka', price: 300}, {id: 3, name: 'Сумка', description: 'cool sumka', price: 300}, {id: 2, name: 'Сумкаssads', description: 'cool sumkdasdsaa', price: 350}, {id: 1, name: 'Сумка', description: 'cool sumka', price: 300}, {id: 4, name: 'Сумка', description: 'cool sumka', price: 300}, {id: 6, name: 'Сумка', description: 'cool sumka', price: 300}, {id: 3, name: 'Сумка', description: 'cool sumka', price: 300}, {id: 2, name: 'Сумкаssads', description: 'cool sumkdasdsaa', price: 350}])
	const [loading, setLoading] = useState(false);

	return (

		<div class={styles.main__products}>
			<div class={styles.products__text}>
				<div class={styles.products__text_title}>
					Order summary
				</div>
				<a class={styles.products__text_edit}>
					edit order
				</a>
			</div>
			<ul class={styles.products__items}>
				{!loading &&  selectedProducts.map(product => 
					<li class={styles.products__product}>
						<div class={styles.product__image}>
							<img src={img} alt=""/>
						</div>
						<div class={styles.product__content}>
							<div class={styles.product__content_name}>
								{product.name}
							</div>
							<div class={styles.product__content_description}>
								{product.description}
							</div>
							<div class={styles.product__content_quantity}>
								Quantity: 1
							</div>
						</div>
							<div class={styles.product__price}>
								${product.price}
							</div>
								
					</li>

				)}

			</ul>
				<div class={styles.products__cost}>
					<div class={styles.cost__subtotal}>
						<div class={styles.subtotal__text}>
							Subtotal
						</div>
						<div class={styles.subtotal__count}>
							${!loading && selectedProducts.reduce((acc, cur) => { return acc + cur.price }, 0)}
						</div>
					</div>
					<div class={styles.cost__shipping}>
						<div class={styles.shipping__text}>
							Shipping
						</div>
						<div class={styles.shipping__count}>
							Free
						</div>
					</div>
					<div class={styles.cost__taxes}>
						<div class={styles.taxes__text}>
							Taxes
						</div>
						<div class={styles.taxes__count}>
							{!loading && selectedProducts.reduce((acc, cur) => acc + cur.price, 0)*0.03}
						</div>
					</div>
					<div class={styles.cost__total}>
						<div class={styles.total__text}>
							Total
						</div>
						<div class={styles.total__count}>
							${!loading && selectedProducts.reduce((acc, cur) => acc + cur.price, 0) + selectedProducts.reduce((acc, cur) => acc + cur.price, 0)*0.03}
						</div>
					</div>
				</div>
				<footer class={styles.products__information}>
					All purchases are subject to our Terms and Conditions.
				</footer>
		</div>
	)
}
