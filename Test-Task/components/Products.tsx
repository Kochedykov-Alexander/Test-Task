import React, { useState } from 'react'
import styles from '../styles/Products.module.scss'
import { IProduct } from '../types/IProduct';
import Image from 'next/image';

interface ProductsItemsProps {
	products: IProduct[];
}
const Products: React.FC<ProductsItemsProps> = ({products}) => {

	const [selectedProducts, setSelectedProducts] = useState<IProduct[]>(products)
	const [loading, setLoading] = useState<boolean>(false);

	return (

		<div className={styles.main__products}>
			<div className={styles.products__text}>
				<div className={styles.products__text_title}>
					Order summary
				</div>
				<a className={styles.products__text_edit}>
					edit order
				</a>
			</div>
			<ul className={styles.products__items}>
				{!loading &&  selectedProducts.map(product => 
					<li className={styles.products__product} key={product.id}>
						<div className={styles.product__image}>
							<Image src= '/../public/sumka.png' width={45} height={45} alt=""/>
						</div>
						<div className={styles.product__content}>
							<div className={styles.product__content_name}>
								{product.name}
							</div>
							<div className={styles.product__content_description}>
								{product.description}
							</div>
							<div className={styles.product__content_quantity}>
								Quantity: 1
							</div>
						</div>
							<div className={styles.product__price}>
								${product.price}
							</div>
								
					</li>

				)}

			</ul>
				<div className={styles.products__cost}>
					<div className={styles.cost__subtotal}>
						<div className={styles.subtotal__text}>
							Subtotal
						</div>
						<div className={styles.subtotal__count}>
							${!loading && selectedProducts.reduce((acc, cur) => { return acc + cur.price }, 0)}
						</div>
					</div>
					<div className={styles.cost__shipping}>
						<div className={styles.shipping__text}>
							Shipping
						</div>
						<div className={styles.shipping__count}>
							Free
						</div>
					</div>
					<div className={styles.cost__taxes}>
						<div className={styles.taxes__text}>
							Taxes
						</div>
						<div className={styles.taxes__count}>
							{!loading && selectedProducts.reduce((acc, cur) => acc + cur.price, 0)*0.03}
						</div>
					</div>
					<div className={styles.cost__total}>
						<div className={styles.total__text}>
							Total
						</div>
						<div className={styles.total__count}>
							${!loading && selectedProducts.reduce((acc, cur) => acc + cur.price, 0) + selectedProducts.reduce((acc, cur) => acc + cur.price, 0)*0.03}
						</div>
					</div>
				</div>
				<footer className={styles.products__information}>
					All purchases are subject to our Terms and Conditions.
				</footer>
		</div>
	)
}

export default Products;
