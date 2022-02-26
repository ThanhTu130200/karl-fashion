import { Link } from "react-router-dom"
import styles from "./Button.module.scss"

function Button({ className, children, isLink = false, path = "/" }) {
	if (isLink)
		return (
			<Link to={path}>
				<button className={styles.button + " " + className}>{children}</button>
			</Link>
		)
	return <button className={styles.button + " " + className}>{children}</button>
}

export default Button
