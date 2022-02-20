import { useState } from 'react'
import styles from './Header.module.scss'
import categories from './FakeAPIHeader'

function Header() {

    const [activeItems, setActiveItems] = useState([])

    const handleActive = (id) => {
        if (activeItems.includes(id)) {
            setActiveItems(activeItems.filter(activeItem => activeItem !== id))
        } else {
            setActiveItems([
                ...activeItems,
                id
            ])
        }
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
                    <label htmlFor="categoryCheckbox" className={`${styles.headerCategory}`}>
                        <i className={`${styles.headerCategoryIcon} ti-menu`}></i>
                    </label>
                    <input type="checkbox" id="categoryCheckbox" className={styles.categoryCheckbox} hidden/>
                    <label htmlFor="categoryCheckbox" className={styles.headerCategoryOverlay}></label>
                    <nav className={styles.headerCategoryListsWrap}>
                        <label htmlFor="categoryCheckbox" className={styles.headerCategoryClose}>
                            <i className={`${styles.headerCategoryCloseIcon} ti-close`} />
                        </label>
                        <h2 className={styles.headerCategoryHeader}>Categories</h2>
                        <div className={styles.headerCategoryLists}>
                            {categories.map(category => (
                                <div
                                    key={category.id}
                                    className={`${styles.headerCategoryItem} item-${category.id} ${activeItems.includes(category.id) && styles.active
                                        }`}
                                >
                                    <label
                                        className={styles.headerCategoryItemName}
                                        onClick={() => handleActive(category.id)}
                                    >
                                        {category.name}
                                        <i className={`${styles.arrowDown} ti-angle-down`}></i>
                                    </label>
                                    <ul className={`${styles.headerCategoryItemChildren}  ${
                                            activeItems.includes(category.id) && 'd-block'
                                        }`}>
                                        {category.children.map((child, index) => (
                                            <li
                                                key={index}
                                                className={`${styles.headerCategoryItemChild}`}
                                            >
                                                {child}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header