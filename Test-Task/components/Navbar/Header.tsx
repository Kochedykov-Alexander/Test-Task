import React from 'react'
import styles from '../../styles/Header.module.scss'



const Header: React.FC = () => {
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
					<span className={styles.header__busket_count}>4</span>
				</div>
				
			</div>
			</div>	
		</header>
	)
}

export default Header;
