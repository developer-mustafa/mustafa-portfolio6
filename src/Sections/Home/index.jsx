import styles from "./styles.module.css";

function Home() {
	return (
		<section className={styles.home_section} id="home">
			<p className={styles.greet}>Hi, my name is</p>
			<h1 className={styles.heading_1}>Mustafa Rahman</h1>
			<h1 className={styles.heading_2}>Full stack web developer.</h1>
			<p className={styles.desc}>
			Full-stack web developer with a specialization in front-end and back-end web development. Adaptable to new technology to enhance my skills and capabilities.
			</p>
			<a href="#work">
				<button className={styles.btn}>Check out my work !</button>
			</a>
		</section>
	);
}

export default Home;
