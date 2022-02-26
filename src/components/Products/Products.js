import { useEffect } from "react"
import styles from "./Products.module.scss"
import products from "../FakeAPI/FakeAPIProducts"
import AddToCartModal from "../AddToCartModal/AddToCartModal"

function Products({ active, max = 6, m = 4 }) {
    const maxItems = max
    let countItems = 0
    const items = document.querySelectorAll('[class*="Products_product__"]')

    useEffect(() => {
        items.forEach((item) => {
            item.animate(
                [
                    // keyframes
                    {
                        transform: "translateY(600px)",
                        opacity: 0,
                    },
                    {
                        visibility: "visible",
                        transform: "translateY(0px)",
                        opacity: 1,
                    },
                ],
                {
                    // timing options
                    duration: 1000,
                    iterations: 1,
                }
            )
        })
    })

    const handleClickImg = (e, id) => {
        const modal = document.querySelector(`[class*=modal-${id}]`)
        modal.classList.add("d-flex")
    }

    const renderItem = (item) => {
        if (countItems >= maxItems) {
            return null
        } else {
            countItems++
        }
        return (
            <div
                key={item.id}
                className={`${styles.product} col l-4 m-${m} c-12`}
            >
                <div className={`${styles.productItem}`}>
                    <AddToCartModal item={item} />
                    <div
                        className={`${styles.productItemImg}`}
                        style={{ backgroundImage: `url(${item.imgPath[0]})` }}
                        onClick={(e) => handleClickImg(e, item.id)}
                    ></div>
                    <div className={styles.productItemPriceArea}>
                        <h3
                            className={styles.productItemPrice}
                        >{`$${item.price}`}</h3>
                        <h4
                            className={styles.productItemOldPrice}
                        >{`$${item.oldPrice}`}</h4>
                    </div>
                    <p className={styles.productItemName}>{item.name}</p>
                    <a href="#" className={styles.productItemAddToCart}>
                        Add to cart
                    </a>
                </div>
            </div>
        )
    }

    if (active === 0) {
        return (
            <div className={`${styles.products} row`}>
                {products.map((product) => product.items.map(renderItem))}
            </div>
        )
    }
    return (
        <div className={`${styles.products} row`}>
            {products[active - 1].items.map(renderItem)}
        </div>
    )
}

export default Products
