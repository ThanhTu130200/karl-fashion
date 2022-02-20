import { useEffect, useRef } from 'react'
import styles from './Products.module.scss'
import products from './FakeAPIProducts'
import AddToCartModal from '../AddToCartModal/AddToCartModal'

function Products({ active }) {

    let itemToCart = null
    const maxItems = 6
    let countItems = 0
    const items = document.querySelectorAll('[class*="Products_product__"]')

    useEffect(() => {
        items.forEach(item => {
            const itemAnimate = item.animate([
                // keyframes
                {   
                    transform: 'translateY(600px)',
                    opacity: 0,
                },
                {   
                    visibility: 'visible',
                    transform: 'translateY(0px)',
                    opacity: 1
                }
            ], {
                // timing options
                duration: 1000,
                iterations: 1,
            })
            
        })
    })

    const renderItem = item => {
        if (countItems >= maxItems) {
            return null
        } else {countItems++}
        return (
        <div key={item.id} className={`${styles.product} col l-4 m-4 c-12`}>
            <AddToCartModal />
            <div className={`${styles.productItem}`}>
                <div
                    className={`${styles.productItemImg}`}
                    style={{ backgroundImage: `url(${item.imgPath})` }}
                    onClick={() => {itemToCart = item}}
                >
                </div>
                <h3 className={styles.productItemPrice}>{`$${item.price}`}</h3>
                <p className={styles.productItemDetail}>{item.name}</p>
                <a href="#" className={styles.productItemAddToCart}>Add to cart</a>
            </div>
        </div>
    )}

    if (active === 0) {
        return (
            <div className={`${styles.products} row`}>
                {products.map(product => (
                    product.items.map(renderItem)
                ))}
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