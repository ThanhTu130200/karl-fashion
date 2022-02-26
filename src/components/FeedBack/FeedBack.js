import "slick-carousel"
import $ from "jquery"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styles from "./FeedBack.module.scss"
import customers from "../FakeAPI/FakeAPICustomers"

function FeedBack() {
	$(document).ready(function () {
		$(".sliderWrap")
			.not(".slick-initialized")
			.slick({
				arrows: false,
				dots: true,
				appendDots: $(`.${styles.sliderDots}`),
				cssEase: "ease-in-out",
			})
	})

	return (
		<div className={styles.container}>
			<div className="grid wide">
				<div className="row">
					<div className="col l-2 m-2 c-0">
						<div className={styles.sliderDots}></div>
					</div>
					<div className="col l-8 m-8 c-12">
						<div className={styles.contentWrap}>
							<h1>FeedBacks</h1>
							<div className="sliderWrap">
								{customers.map((customer) => (
									<div key={customer.id} className={styles.content}>
										<h2>"</h2>
										<p>{customer.feedback}</p>
										<div className={styles.customer}>
											<div
												className={styles.img}
												style={{
													backgroundImage: `url(${customer.imgPath})`,
												}}></div>
											<div className={styles.details}>
												<h3>{customer.name}</h3>
												<h4>{`Customer, ${customer.address}`}</h4>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FeedBack
