import { useState } from 'react'
import styles from './AddToCartModal.module.scss'

function AddToCartModal({ }) {
    const [show, setShow] = useState(false)
    if (show) {
        return (
            <div className={styles.addToCartModalContainer}>
                <div className={styles.overlay}/>
                <div className={styles.addToCartModal}>
                    <div className="grid">
                        <div className="row">
                            <div className={styles.addToCartImgWrap + " col l-5 m-5 c-12"}>
                                <div className={styles.addToCartImg} style={{
                                    backgroundImage: 'url("/static/images/Products/product-3.jpg")'
                                }} />
                            </div>
                            <div className={styles.addToCartContent + " col l-7 m-7 c-12"}>
                                <div className={styles.addToCartDescription}>
                                    <h1>Boutique Silk Dress</h1>
                                    <div className={styles.addToCartRating}>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </div>
                                    <div className={styles.addToCartContentPrice}>
                                        <h2>$120.99</h2>
                                        <h3>$130</h3>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia expedita quibusdam aspernatur, sapiente consectetur accusantium perspiciatis praesentium eligendi, in fugiat?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia expedita quibusdam aspernatur, sapiente consectetur accusantium perspiciatis praesentium eligendi, in fugiat?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia expedita quibusdam aspernatur, sapiente consectetur accusantium perspiciatis praesentium eligendi, in fugiat?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia expedita quibusdam aspernatur, sapiente consectetur accusantium perspiciatis praesentium eligendi, in fugiat?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia expedita quibusdam aspernatur, sapiente consectetur accusantium perspiciatis praesentium eligendi, in fugiat?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia expedita quibusdam aspernatur, sapiente consectetur accusantium perspiciatis praesentium eligendi, in fugiat?</p>
                                    <a href="#">View Full Product Details</a>
                                </div>
                                <div className={styles.cart}>
                                    <div className={styles.quantity}>
                                        <button className={styles.minusBtn}>-</button>
                                        <input type="number" min="0"/>
                                        <button className={styles.plusBtn}>+</button>
                                    </div>
                                    <a href="">Add to cart</a>
                                    <div className={styles.favorite}>
                                        <i className={styles.favoriteIcon + " ti-heart"}/>
                                    </div>
                                </div>
                                <div className={styles.shareArea}>
                                    <h4>Share with Friend</h4>
                                    <div className={styles.socials}>
                                        <i className={styles.socialIcon + " ti-facebook"}/>
                                        <i className={styles.socialIcon + " ti-twitter-alt"}/>
                                        <i className={styles.socialIcon + " ti-pinterest-alt"}/>
                                        <i className={styles.socialIcon + " ti-linkedin"}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className={styles.addToCartModal}>

            </div>
        )
    }
}

export default AddToCartModal