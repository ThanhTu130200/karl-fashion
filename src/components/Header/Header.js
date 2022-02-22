import styles from './Header.module.scss'
import Categories from '../Categories/Categories'
import categoriesStyles from '../Categories/Categories.module.scss'

function Header() {

    const handleShowCategories = () => {
        document.querySelector(`.${categoriesStyles.headerCategoryListsWrap}`).classList.add(categoriesStyles.active)
    }

    return (
        <div className="header grid wide">
            <div className={`${styles.headerContainer} row`}>
                <div className={`${styles.headerLogo} col l-4 l-o-4 m-6 c-6`}>
                    <img src="/static/images/logo.png" alt="logo" />
                </div>
                <div className={`${styles.headerBagAndCategoryIcon} col l-2 l-o-2 m-4 m-o-2 c-6`}>
                    <span className={styles.yourBagLabelAndIcon}>
                        <i className={`${styles.headerBagIcon} ti-bag`}></i>
                        <span className={styles.yourBagLabel}>Your Bag</span>
                        <div className={styles.yourBag}>
                            <ul className={styles.listsItem}>
                                <li className={styles.item}>
                                    <img className={styles.thumbnail} src="/static/images/Products/product-1.jpg" alt="Product 1" />
                                    <div className={styles.details}>
                                        <h5 className={styles.productName}>Jeans midi cocktail dress</h5>
                                        <div className={styles.amountAndPrice}>
                                            <p className={styles.amount}>1</p>
                                            <p className={styles.multiplier}>x</p>
                                            <p className={styles.price}>$39.90</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className={styles.yourBagFooter}>
                                <div className={styles.cartAndCheckout}>
                                    <div className={styles.cart}>Cart</div>
                                    <div className={styles.checkout}>Checkout</div>
                                </div>
                                <p className={styles.total}>TOTAL: $39.90</p>
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