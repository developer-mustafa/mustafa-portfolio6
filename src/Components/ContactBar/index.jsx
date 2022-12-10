import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from "./styles.module.css";

function ContactBar() {
	return (
		<div className={styles.contact_bar_wrapper}>
			<div className={styles.contact_bar}>
				<a href="https://www.linkedin.com/in/developer-mustafa" target="blank" className={styles.icon} >
					<LinkedInIcon  />
				</a>
				<a href="https://github.com/developer-mustafa" target="blank" className={styles.icon} >
					<GitHubIcon  />
				</a>
				<a href="https://www.instagram.com/developer_mustafa_rahman/" target="blank" className={styles.icon} >
					<InstagramIcon  />
				</a>
				<a href="https://twitter.com/Mustafa75869102" target="blank" className={styles.icon} >
					<TwitterIcon  />
				</a>
				<div className={styles.line}></div>
			</div>
			<div className={styles.contact_bar}>
				<a href="mailto:mustafarahman792@gmail.com" className={styles.email}>
					mustafarahman792@gmail.com
				</a>
				<div className={styles.line}></div>
			</div>
		</div>
	);
}

export default ContactBar;
