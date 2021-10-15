import * as React from "react"
import styles from '../styles/index.module.scss';
import Footer from "../components/Footer/Footer";
import Main from "../components/Main";
import Header from "../components/Navbar/Header";



const Index: React.FC = () => {
	return (
		<div className={styles.wrapper}>
			<Header></Header>
			<Main></Main>
			<Footer></Footer>
		</div>
	)
}

export default Index;
