import React from 'react'
import styles from '../../styles/Header.module.scss'
import logo from '../../img/header/logo.png';
import icon from '../../img/header/Shape.png';

export default function Header() {
	return (
		<header class={styles.header}>
			<div class={styles.header__container + " " + styles._container} >
				<div class={styles.header__logo}>
					<div class={styles.header__logo_icon}>
						<img src={logo} alt=""/>
					</div>
					<div class= {styles.header__logo_text}>
						
					</div>
				</div>
			<div class={styles.header__busket}>
				<div class={styles.header__busket_text}>
					cart
				</div>
				<div class={styles.header__busket_icon}>
					<img src={icon} alt=""/>
				</div>
				
			</div>
			</div>	
		</header>
	)
}
