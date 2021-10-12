import Footer from "../components/Footer/Footer";
import Main from "../components/Main";
import Header from "../components/Navbar/Header";
import styles from '../styles/index.module.scss'

export default function Index() {
	return (
		<div className={styles.wrapper}>
			<Header></Header>
			<Main></Main>
			<Footer></Footer>
		</div>
	)
}
