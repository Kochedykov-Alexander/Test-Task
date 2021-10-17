import React, { useState, useEffect} from 'react'
import styles from '../../styles/Header.module.scss'
import { useQuery } from '@apollo/client';
import { IProduct } from '../../types/IProduct';
import { GET_ALL_PRODUCTS } from '../../query/product';



const Header: React.FC = () => {

	const [selectedProducts, setSelectedProducts] = useState<IProduct[]>([])
	const {data, loading, error, refetch} = useQuery(GET_ALL_PRODUCTS, {pollInterval: 500});
	

	useEffect(() => {
		if (!loading) {
			setSelectedProducts(data.getAllProducts)
		}	
	}, [data])

	return (
		<header className={styles.header}>
			<div className={styles.header__container + " " + styles._container} >
				<div className={styles.header__logo}>
					<div className={styles.header__logo_icon}>
						<img src='../../logo.png' alt=""/>
					</div>
					<div className= {styles.header__logo_text}>
					</div>
				</div>
			<div className={styles.header__busket}>
				<div className={styles.header__busket_text}>
					cart
				</div>
				<div className={styles.header__busket_icon}>
					<img src='../../basket.png' alt=""/>
					<span className={styles.header__busket_count}>{selectedProducts ? selectedProducts.length : '0'}</span>
				</div>
			</div>
			</div>	
		</header>
	)
}

export default Header;
