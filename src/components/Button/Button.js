import { Link } from "react-router-dom"
import styles from "./Button.module.scss"

function Button({ className, children, isLink = false, path = "/", isBack }) {
	if (isLink)
		return (
			<Link to={path}>
				<button className={styles.button + " " + className}>{children}</button>
			</Link>
		)
	if (isBack)
		return (
			<button
				onClick={() => {
					window.history.back()
				}}
				className={styles.button + " " + className}>
				{children}
			</button>
		)
	return <button className={styles.button + " " + className}>{children}</button>
}

export default Button
