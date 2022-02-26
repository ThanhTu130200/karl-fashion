import styles from "./CheckOut.module.scss"
import CheckOutForm from "../../components/CheckOutForm/CheckOutForm"
import OrderDetails from "../../components/OrderDetails/OrderDetails"

function CheckOut() {
	return (
		<>
			<div className="grid wide">
				<div className={styles.container + " row"}>
					<div className="col l-6 m-6 c-12">
						<CheckOutForm />
					</div>
					<div className="col l-6 m-6 c-12">
						<OrderDetails />
					</div>
				</div>
			</div>
			<div className={styles.line}></div>
		</>
	)
}

export default CheckOut
