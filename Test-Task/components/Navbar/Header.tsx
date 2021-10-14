import React from 'react'
import styles from '../../styles/Header.module.scss'
import logo from '../../img/header/logo.png';
import icon from '../../img/header/Shape.png';

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.header__container + " " + styles._container} >
				<div className={styles.header__logo}>
					<div className={styles.header__logo_icon}>
						<img src={logo} alt=""/>
					</div>
					<div className= {styles.header__logo_text}>
						
					</div>
				</div>
			<div className={styles.header__busket}>
				<div className={styles.header__busket_text}>
					cart
				</div>
				<div className={styles.header__busket_icon}>
					<img src={icon} alt=""/>
				</div>
				
			</div>
			</div>	
		</header>
	)
}

export default Header;
