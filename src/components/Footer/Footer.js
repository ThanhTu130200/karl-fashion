import styles from "./Footer.module.scss"

function Footer() {
	return (
		<>
			<div className="grid wide">
				<div className={styles.container + " row"}>
					<div className="col l-4 m-6 c-12">
						<div className={styles.logoArea}>
							<div
								className={styles.logo}
								style={{ backgroundImage: 'url("/static/images/logo.png")' }}
							/>
							<p>
								Copyright ©2022 All rights reserved | Made with ❤ by
								<a href="#">Nguyen Thanh Tu</a>
							</p>
						</div>
					</div>
					<div className="col l-2 m-3 c-6">
						<div className={styles.connections}>
							<a>About</a>
							<a>Blog</a>
							<a>F&Q</a>
							<a>Returns</a>
							<a>Contact</a>
						</div>
					</div>
					<div className="col l-2 m-3 c-6">
						<div className={styles.info}>
							<a>My Account</a>
							<a>Shipping</a>
							<a>Our Policies</a>
							<a>Affiliate</a>
						</div>
					</div>
					<div className={styles.subscribeAreaWrap + " col l-4 m-12 c-12"}>
						<div className={styles.subscribeArea}>
							<h3>Subscribe to our newsletter</h3>
							<div className={styles.subscribeInputArea}>
								<input type="text" placeholder="Your email here" />
								<button>Subscribe</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="grid wide">
				<div className="row">
					<div className={styles.line + " l-10 l-o-1 m-10 m-o-1 c-8 c-o-2"}></div>
				</div>
			</div>
			<div className={styles.footerSocials}>
				<a className={styles.footerSocial}>
					<i className="ti-pinterest-alt" />
				</a>
				<a className={styles.footerSocial}>
					<i className="ti-facebook" />
				</a>
				<a className={styles.footerSocial}>
					<i className="ti-twitter-alt" />
				</a>
				<a className={styles.footerSocial}>
					<i className="ti-linkedin" />
				</a>
			</div>
		</>
	)
}

export default Footer
