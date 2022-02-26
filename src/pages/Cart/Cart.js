import { Link } from "react-router-dom"
import styles from "./Cart.module.scss"
import Button from "../../components/Button/Button"
import cart from "../../components/FakeAPI/FakeAPICart"

function Cart() {
	const total = cart
		.reduce((total, product) => total + product.info.price * product.quantity, 0)
		.toFixed(2)
	return (
		<div className={styles.container}>
			<div className="grid wide">
				<div className={styles.header + " row"}>
					<div className="col l-7 m-6 c-6">
						<h1 className={styles.headerProducts}>Product</h1>
					</div>
					<div className={styles.headerInfo + " col l-5 m-6 c-6"}>
						<h1 className={styles.headerPrice}>Price</h1>
						<h1 className={styles.headerQuantity}>Quantity</h1>
						<h1 className={styles.headerTotal}>Total</h1>
					</div>
				</div>
				{cart.map((product) => (
					<div key={product.info.id} className={styles.product + " row"}>
						<div className={styles.productContainer + " col l-7 m-6 c-6"}>
							<div
								className={styles.productImg}
								style={{
									backgroundImage: `url(${product.info.imgPath[0]})`,
								}}
							/>
							<h3 className={styles.productName}>{product.info.name}</h3>
						</div>
						<div className={styles.productInfo + " col l-5 m-6 c-6"}>
							<h1 className={styles.productPrice}>{"$" + product.info.price}</h1>
							<h1 className={styles.productQuantity}>{product.quantity}</h1>
							<h1 className={styles.productTotal}>{`$${(
								product.info.price * product.quantity
							).toFixed(1)}`}</h1>
						</div>
					</div>
				))}
				<div className={styles.cartFooter + " row"}>
					<div className={styles.cartFooterContinue + " col l-7 m-6 c-12"}>
						<Button isLink>Continue shopping</Button>
					</div>
					<div className={styles.cartFooterClearAndUp + " col l-5 m-6 c-12"}>
						<Button>Clear cart</Button>
						<Button>Update cart</Button>
					</div>
				</div>
				<div className="row">
					<div className={styles.couponCode + " col l-4 m-6 c-12"}>
						<h1>Coupon code</h1>
						<p>Enter your coupon code</p>
						<div className={styles.couponInputArea}>
							<input type="text" placeholder="Your coupon code here" />
							<button>Apply</button>
						</div>
					</div>
					<div className={styles.shippingMethod + " col l-4 m-6 c-12"}>
						<h1>Shipping Method</h1>
						<p>Select the one you want</p>
						<div className={styles.shippingInputArea}>
							<label htmlFor="next-day-delivery" className={styles.shippingOption}>
								<input
									type="radio"
									id="next-day-delivery"
									name="shipping-radio"
									value="next-day-delivery"
								/>
								<div className={styles.shippingLabel}>
									<label htmlFor="next-day-delivery">Next day delivery</label>
									<label htmlFor="next-day-delivery">$4.99</label>
								</div>
							</label>

							<label htmlFor="standard-delivery" className={styles.shippingOption}>
								<input
									type="radio"
									id="standard-delivery"
									name="shipping-radio"
									value="standard-delivery"
								/>
								<div className={styles.shippingLabel}>
									<label htmlFor="standard-delivery">Standard delivery</label>
									<label htmlFor="standard-delivery">$1.99</label>
								</div>
							</label>

							<label htmlFor="personal-pickup" className={styles.shippingOption}>
								<input
									type="radio"
									id="personal-pickup"
									name="shipping-radio"
									value="personal-pickup"
									defaultChecked
								/>
								<div className={styles.shippingLabel}>
									<label htmlFor="personal-pickup">Personal pickup</label>
									<label htmlFor="personal-pickup">Free</label>
								</div>
							</label>
						</div>
					</div>
					<div className={styles.cartTotal + " col l-4 m-12 c-12"}>
						<h1>Cart total</h1>
						<p>Final info</p>
						<div className={styles.cartTotalContent}>
							<div className={styles.cartTotalSubtotal + " " + styles.cartTotalField}>
								<p>Subtotal</p>
								<p>{"$" + total}</p>
							</div>
							<div className={styles.cartTotalShipping + " " + styles.cartTotalField}>
								<p>Shipping</p>
								<p>Free</p>
							</div>
							<div className={styles.cartTotalTotal + " " + styles.cartTotalField}>
								<p>Total</p>
								<p>{"$" + total}</p>
							</div>
						</div>
						<Link to="/checkout-page">Proceed to checkout</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cart
