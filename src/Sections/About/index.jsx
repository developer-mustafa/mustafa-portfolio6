import Heading from "../../Components/Heading";
import styles from "./styles.module.css";

function About() {
	return (
		<section id="about">
			<Heading index="01" heading="About Me" />
			<div className={styles.container}>
				<div className={styles.left}>
					<p className={styles.desc}>
					This is Mustafa Rahman. I'm a Full-Stack Web Developer from Programming Hero Batch-6 with Jhanker Mahbub.

I believe that the power of technology can make people's lives easier and that new frameworks and technology make developers more productive to the tech community. 
					</p>
					<p className={styles.desc}>
					build HTML CSS and JavaScript from my programming journey, piqued my interest in coding. Since then my life has been about pursuing a career in coding and web development.
					</p>
				</div>
				<div className={styles.right}>
					<img style={{width:"56%",boxShadow:"5px 5px 10px skyblue"}}
						src="./images/profile.png"
						alt="profile"
						className={styles.profile_img}
					/>
					<div className={styles.img_border}></div>
				</div>
			</div>
		</section>
	);
}

export default About;
