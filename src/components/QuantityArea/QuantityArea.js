import { useState } from "react"
import styles from "./QuantityArea.module.scss"

function QuantityArea() {
	const [inputValue, setInputValue] = useState(1)

	return (
		<div className={styles.quantity}>
			<button
				className={styles.minusBtn}
				onClick={() => {
					if (inputValue > 0) setInputValue(inputValue - 1)
				}}>
				-
			</button>
			<input
				type="number"
				min="0"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<button
				className={styles.plusBtn}
				onClick={() => {
					setInputValue(inputValue + 1)
				}}>
				+
			</button>
		</div>
	)
}

export default QuantityArea
