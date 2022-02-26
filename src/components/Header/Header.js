import { Link } from "react-router-dom"
import cart from "../../components/FakeAPI/FakeAPICart"
import styles from "./Header.module.scss"
import Categories from "../Categories/Categories"
import categoriesStyles from "../Categories/Categories.module.scss"

function Header() {
	const total = cart
		.reduce((total, product) => total + product.info.price * product.quantity, 0)
		.toFixed(2)
	const handleShowCategories = () => {
		document
			.querySelector(`.${categoriesStyles.headerCategoryListsWrap}`)
			.classList.add(categoriesStyles.active)
	}

	return (
		<div className="header grid wide">
			<div className={`${styles.headerContainer} row`}>
				<Link to="/" className={`${styles.headerLogo} col l-4 l-o-4 m-6 c-6`}>
					<img src="/static/images/logo.png" alt="logo" />
				</Link>
				<div className={`${styles.headerBagAndCategoryIcon} col l-2 l-o-2 m-4 m-o-2 c-6`}>
					<span className={styles.yourBagLabelAndIcon}>
						<i className={`${styles.headerBagIcon} ti-bag`}></i>
						<span className={styles.yourBagLabel}>Your Bag</span>
						<div className={styles.yourBag}>
							<ul className={styles.listsItem}>
								{cart.map((product) => (
									<li key={product.info.id} className={styles.item}>
										<img
											className={styles.thumbnail}
											src={product.info.imgPath[0]}
											alt={"Product-" + product.info.id}
										/>
										<div className={styles.details}>
											<h5 className={styles.productName}>
												{product.info.name}
											</h5>
											<div className={styles.amountAndPrice}>
												<p className={styles.amount}>{product.quantity}</p>
												<p className={styles.multiplier}>x</p>
												<p className={styles.price}>{product.info.price}</p>
											</div>
										</div>
									</li>
								))}
							</ul>
							<div className={styles.yourBagFooter}>
								<div className={styles.cartAndCheckout}>
									<Link to="/cart-page" className={styles.cart}>
										Cart
									</Link>
									<Link to="/checkout-page" className={styles.checkout}>
										Checkout
									</Link>
								</div>
								<p className={styles.total}>{`TOTAL: $${total}`}</p>
							</div>
						</div>
					</span>
					<div className={`${styles.headerCategory}`} onClick={handleShowCategories}>
						<i className={`${styles.headerCategoryIcon} ti-menu`}></i>
					</div>
				</div>
			</div>
			<Categories />
		</div>
	)
}

export default Header
