import styles from "./OrderDetails.module.scss"
import cart from "../../components/FakeAPI/FakeAPICart"

function OrderDetails() {
	const total = cart
		.reduce((total, product) => total + product.info.price * product.quantity, 0)
		.toFixed(2)
	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>Your Order</h1>
			<p className={styles.desc}>The Details</p>
			<div className={styles.orderField + " " + styles.orderHeader}>
				<p>Product</p>
				<p>Total</p>
			</div>
			{cart.map((product) => (
				<div key={product.info.id} className={styles.orderField}>
					<div className={styles.nameAndQuantity}>
						<p>{product.info.name}</p>
						<p>x</p>
						<p>{product.quantity}</p>
					</div>
					<p>{"$" + (product.info.price * product.quantity).toFixed(1)}</p>
				</div>
			))}
			<div className={styles.orderField}>
				<p>Shipping</p>
				<p>Free</p>
			</div>
			<div className={styles.orderField + " " + styles.orderTotal}>
				<p>Total</p>
				<p>{"$" + total}</p>
			</div>
			<div className={styles.orderField + " " + styles.orderPayment}>
				<div>
					<input name="more" type="radio" id="paypal" className={styles.input} />
					<label htmlFor="paypal">Paypal</label>
				</div>
				<div>
					<input
						name="more"
						type="radio"
						id="cash-on-delivery"
						className={styles.input}
						defaultChecked
					/>
					<label htmlFor="cash-on-delivery">Cash on delivery</label>
				</div>
				<div>
					<input name="more" type="radio" id="credit-card" className={styles.input} />
					<label htmlFor="credit-card">Credit card</label>
				</div>
				<div>
					<input
						name="more"
						type="radio"
						id="direct-bank-transfer"
						className={styles.input}
					/>
					<label htmlFor="direct-bank-transfer">Direct bank transfer</label>
				</div>
			</div>
			<button className={styles.orderBtn}>Order</button>
		</div>
	)
}

export default OrderDetails
