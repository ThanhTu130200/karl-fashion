import styles from "./CheckOutForm.module.scss"

function CheckOutForm() {
	const countries = ["United States", "United Kingdom", "Canada", "France", "Germany"]
	return (
		<div className={styles.container}>
			<form action="" method="POST" className={styles.form} id="billing-address-form">
				<h3 className={styles.heading}>Billing address</h3>
				<p className={styles.desc}>Enter your information</p>

				<div className={styles.space}></div>

				<div className={styles.formGroup + " " + styles.horizontal}>
					<div className={styles.name}>
						<div className={styles.formGroup}>
							<label htmlFor="first-name" className={styles.formLabel}>
								First name
							</label>
							<input
								id="first-name"
								name="first-name"
								rules="required"
								type="text"
								className={styles.formControl}
							/>
						</div>
						<div className={styles.formGroup}>
							<span className={styles.formMessage}></span>
							<label htmlFor="last-name" className={styles.formLabel}>
								Last name
							</label>
							<input
								id="last-name"
								name="last-name"
								rules="required"
								type="text"
								className={styles.formControl}
							/>
							<span className={styles.formMessage}></span>
						</div>
					</div>
				</div>

				<div className={styles.formGroup}>
					<label htmlFor="company-name" className={styles.formLabel}>
						Company name
					</label>
					<input
						id="company-name"
						name="company-name"
						type="text"
						className={styles.formControl}
					/>
					<span className={styles.formMessage}></span>
				</div>

				<div className={styles.formGroup}>
					<label htmlFor="province" className={styles.formLabel}>
						Country
					</label>
					<select
						id="province"
						rules="required"
						name="province"
						className={styles.formControl}>
						{countries.map((country) => (
							<option key={country} value={country}>
								{country}
							</option>
						))}
					</select>
					<span className="form-message"></span>
				</div>

				<div className={styles.formGroup}>
					<label htmlFor="post-code" className={styles.formLabel}>
						Postcode
					</label>
					<input
						id="post-code"
						name="post-code"
						type="text"
						className={styles.formControl}
					/>
					<span className={styles.formMessage}></span>
				</div>

				<div className={styles.formGroup}>
					<label htmlFor="town-city" className={styles.formLabel}>
						Town/City
					</label>
					<input
						id="town-city"
						name="town-city"
						type="text"
						className={styles.formControl}
					/>
					<span className={styles.formMessage}></span>
				</div>

				<div className={styles.formGroup}>
					<label htmlFor="province" className={styles.formLabel}>
						Province
					</label>
					<input
						id="province"
						name="province"
						type="text"
						className={styles.formControl}
					/>
					<span className={styles.formMessage}></span>
				</div>

				<div className={styles.formGroup}>
					<label htmlFor="phone-number" className={styles.formLabel}>
						Phone number
					</label>
					<input
						id="phone-number"
						name="phone-number"
						type="text"
						className={styles.formControl}
					/>
					<span className={styles.formMessage}></span>
				</div>

				<div className={styles.formGroup}>
					<div id="more" className={styles.more}>
						<div>
							<input
								name="more"
								type="checkbox"
								rules="required"
								value="terms-and-conditions"
								id="terms-and-conditions"
								className={styles.formControl}
							/>
							<label htmlFor="terms-and-conditions">Terms and Conditions</label>
						</div>
						<div>
							<input
								name="more"
								type="checkbox"
								rules="required"
								value="creat-an-account"
								id="creat-an-account"
								className={styles.formControl}
							/>
							<label htmlFor="creat-an-account">Create an account</label>
						</div>
						<div>
							<input
								name="more"
								type="checkbox"
								rules="required"
								value="subscribe"
								id="subscribe"
								className={styles.formControl}
							/>
							<label htmlFor="subscribe">Subscribe to our newsletter</label>
						</div>
					</div>
					<span className={styles.formMessage}></span>
				</div>
			</form>
		</div>
	)
}

export default CheckOutForm
