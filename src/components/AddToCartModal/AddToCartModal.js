import { useRef, useState } from 'react'
import styles from './AddToCartModal.module.scss'

function AddToCartModal({ item }) {

    const modal = useRef()
    const [inputValue, setInputValue] = useState(1)

    const hideModal = () => {
        modal.current.classList.remove('d-flex')
    }

    return (
        <div ref={modal} className={styles.addToCartModalContainer + ` modal-${item.id}`}>
            <div className={styles.overlay} onClick={hideModal}/>
            <div className={styles.addToCartModal}>
                <div className="grid">
                    <div className="row">
                        <div className={styles.addToCartImgWrap + " col l-5 m-5 c-12"}>
                            <div className={styles.addToCartImg} style={{
                                backgroundImage: `url(${item.imgPath})`
                            }} />
                        </div>
                        <div className={styles.addToCartContent + " col l-7 m-7 c-12"}>
                            <div className={styles.addToCartDescription}>
                                <h1>{item.name}</h1>
                                <div className={styles.addToCartRating}>
                                    <span>★</span>
                                    <span>★</span>
                                    <span>★</span>
                                    <span>★</span>
                                    <span>★</span>
                                </div>
                                <div className={styles.addToCartContentPrice}>
                                    <h2>{'$' + item.price}</h2>
                                    <h3>{'$' + item.oldPrice}</h3>
                                </div>
                                <p>{item.detail}</p>
                                <a href="#">View Full Product Details</a>
                            </div>
                            <div className={styles.cart}>
                                <div className={styles.quantity}>
                                    <button className={styles.minusBtn} onClick={() => {if(inputValue > 0) setInputValue(inputValue - 1)}}>-</button>
                                    <input type="number" min="0" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
                                    <button className={styles.plusBtn} onClick={() => {setInputValue(inputValue + 1)}}>+</button>
                                </div>
                                <a href="">Add to cart</a>
                                <div className={styles.favorite}>
                                    <i className={styles.favoriteIcon + " ti-heart"} />
                                </div>
                            </div>
                            <div className={styles.shareArea}>
                                <h4>Share with Friend</h4>
                                <div className={styles.socials}>
                                    <i className={styles.socialIcon + " ti-facebook"} />
                                    <i className={styles.socialIcon + " ti-twitter-alt"} />
                                    <i className={styles.socialIcon + " ti-pinterest-alt"} />
                                    <i className={styles.socialIcon + " ti-linkedin"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddToCartModal