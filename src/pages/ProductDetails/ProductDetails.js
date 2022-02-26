import { useState, useEffect, useRef } from "react"
import $ from "jquery"
import "slick-carousel"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import styles from "./ProductDetails.module.scss"
import products from "../../components/FakeAPI/FakeAPIProducts"
import AddToCartModal from "../../components/AddToCartModal/AddToCartModal"

function ProductDetails({ item = products[0].items[0] }) {
	const sizes = ["XS", "S", "M", "L", "XL", "XXL"]
	const [itemShow, setItemShow] = useState(item)
	const [inputValue, setInputValue] = useState(1)
	const [active, setActive] = useState(null)

	useEffect(() => {
		setItemShow(item)
	}, [item])

	$(document).ready(function () {
		$(".slider-product-details")
			.not(".slick-initialized")
			.slick({
				arrows: false,
				dots: true,
				appendDots: $(`.${styles.sliderSelects}`),
				cssEase: "ease-in-out",
			})
		$(".slider-related-products").not(".slick-initialized").slick({
			arrows: false,
			dots: false,
			cssEase: "ease-in-out",
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 3,
		})
	})

	useEffect(() => {
		$("html, body").animate(
			{
				scrollTop: $(".slider-product-details").offset().top - 22,
			},
			1000
		)
		// return $("html, body").stop()
	}, [])

	const handleClick = (size) => {
		size === active ? setActive(null) : setActive(size)
	}
	const handleAddToCart = (id) => {
		const modal = document.querySelector(`[class*=modal-${id}]`)
		modal.classList.add("d-flex")
	}
	const handleBack = () => {
		window.history.back()
	}

	return (
		<div className={styles.container}>
			<style>
				{`.${styles.sliderSelects} .slick-active {
                        border: 2px solid var(--primary-color);
                    }
					/* the slides */
					.${styles.related} .slick-slide {
						margin: 20px 12px 0;
					}
					/* the parent */
					.${styles.related} .slick-list {
						margin: 20px -12px 0;
					}
				`}
			</style>
			{products.map((product) =>
				product.items.map((item) => <AddToCartModal item={item} key={item.id} />)
			)}
			<div className={styles.productDetails}>
				<div className="grid wide">
					<div className="row">
						<div className="col l-12 m-12 c-12">
							{/* <h4 className={styles.link}>Home/Details</h4> */}
							<div className={styles.back}>
								<i className="ti-angle-double-left" />
								<p onClick={handleBack}>Back</p>
							</div>
						</div>
					</div>
					<div className={styles.productDetailsWrap + " row "}>
						<div className="col l-6 m-6 c-12">
							<div className={styles.sliders + " slider-product-details"}>
								{itemShow.imgPath.map((path) => (
									<div
										key={path}
										className={styles.img}
										style={{
											backgroundImage: `url(${path})`,
										}}></div>
								))}
							</div>
							<div className={styles.sliderSelects}>
								{itemShow.imgPath.map((path) => (
									<div
										key={path}
										className={styles.imgSelect}
										style={{
											backgroundImage: `url(${path})`,
										}}></div>
								))}
							</div>
						</div>
						<div className="col l-6 m-6 c-12">
							<div className={styles.content}>
								<h1>{itemShow.name}</h1>
								<h2>{`$${itemShow.price}`}</h2>
								<div className={styles.availability}>
									<p className={styles.availabilityTag}>Available:</p>
									<p className={styles.availabilityValue}>In Stock</p>
								</div>
								<div className={styles.rating}>
									<span>★</span>
									<span>★</span>
									<span>★</span>
									<span>★</span>
									<span>★</span>
								</div>
								<div className={styles.sizeArea}>
									<h3>Size</h3>
									<div className={styles.sizes}>
										{sizes.map((size) => (
											<div
												key={size}
												className={
													styles.size +
													" " +
													(active === size ? styles.active : "")
												}
												onClick={() => handleClick(size)}>
												{size}
											</div>
										))}
									</div>
								</div>
								<div className={styles.cart}>
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
									<div
										className={styles.addToCart}
										href=""
										onClick={() => handleAddToCart(item.id)}>
										Add to cart
									</div>
									<div className={styles.favorite}>
										<i className={styles.favoriteIcon + " ti-heart"} />
									</div>
								</div>
								<div className={styles.line} />
								<div className={styles.info}>
									<h1>Information</h1>
									<p>{item.detail}</p>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col l-12 m-12 c-12">
							<div className={styles.related}>
								<h1 className={styles.relatedHeader}>Related Products</h1>
								<div className={styles.slidersRelated + " slider-related-products"}>
									{products.map((product) =>
										product.items.map(
											(item) =>
												item !== itemShow && (
													<div
														key={item.id}
														className={styles.relatedProduct}>
														<a
															className={styles.img}
															style={{
																backgroundImage: `url(${item.imgPath[0]})`,
															}}
															href={`/product-details/item-${item.id}`}
															// onClick={() => setItemShow(item)}
															// onClick={() =>
															// 	handleAddToCart(item.id)
															// }
														></a>
														<div className={styles.priceArea}>
															<h3
																className={
																	styles.price
																}>{`$${item.price}`}</h3>
															<h4
																className={
																	styles.oldPrice
																}>{`$${item.oldPrice}`}</h4>
														</div>
														<p className={styles.name}>{item.name}</p>
														<div
															href="#"
															className={styles.addToCart}
															onClick={() =>
																handleAddToCart(item.id)
															}>
															Add to cart
														</div>
													</div>
												)
										)
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductDetails
