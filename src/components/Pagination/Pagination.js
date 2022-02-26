import styles from "./Pagination.module.scss"

function Pagination() {
	return (
		<div className={styles.container}>
			<div className={styles.page + " " + styles.active}>1</div>
		</div>
	)
}

export default Pagination
