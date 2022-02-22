import { Link } from 'react-router-dom'
import styles from './SuvHeader.module.scss'

function SuvHeader() {
    return (
        <div className={`${styles.suvHeader} grid wide`}>
            <div className={`${styles.suvHeaderContainer} row`}>
                <div className={`${styles.socials} ${styles.suvHeaderItem} col l-2 m-4 c-12`}>
                    <div href="#" className={`${styles.socialsLink}`}>
                        <i className={`${styles.pinterest} ${styles.socialsIcon} ti-pinterest-alt`}></i>
                    </div>
                    <div href="#" className={`${styles.socialsLink}`}>
                        <i className={`${styles.facebook} ${styles.socialsIcon} ti-facebook`}></i>
                    </div>
                    <div href="#" className={`${styles.socialsLink}`}>
                        <i className={`${styles.twitter} ${styles.socialsIcon} ti-twitter-alt`}></i>
                    </div>
                    <div href="#" className={`${styles.socialsLink}`}>
                        <i className={`${styles.linkedin} ${styles.socialsIcon} ti-linkedin`}></i>
                    </div>
                </div>
                <div className={`${styles.suvHeaderMenuIcon} ${styles.suvHeaderItem} col m-4 c-12`}>
                    <i className={`${styles.menuIcon} ti-menu`}></i>
                </div>
                <div className={`${styles.mainMenu} col l-6 l-o-1 m-0 c-0`}>
                    {/* Add class `hot` to element Hot */}
                    <div className={`${styles.mainMenuLink}`}>Home</div>
                    <div className={`${styles.mainMenuLink} ${styles.mainMenuPagesLink}`}>
                        Pages
                        <i className={`${styles.showMoreIcon} ti-angle-down`}></i>
                        <ul className={styles.pagesMenu}>
                            <Link to="/" className={styles.pagesMenuItem}>Home</Link>
                            <Link to="/shop-page" className={styles.pagesMenuItem}>Shop</Link>
                            <Link to='/product-details-page' className={styles.pagesMenuItem}>Product Details</Link>
                            <Link to="/cart-page" className={styles.pagesMenuItem}>Cart</Link>
                            <Link to="/checkout-page" className={styles.pagesMenuItem}>Checkout</Link>
                        </ul>
                    </div>
                    <div className={`${styles.mainMenuLink}`}>Dresses</div>
                    <div className={`${styles.mainMenuLink}`}>Shoes</div>
                    <div className={`${styles.mainMenuLink}`}>Contact</div>
                </div>
                <div className={`${styles.phoneNumber} ${styles.suvHeaderItem} col l-2 l-o-1 m-4 c-12`}>
                    <a href="tel:+346573556778" className={`${styles.phoneNumberLink}`}>
                        <i className="ti-headphone-alt"></i>
                        +34 657 3556 778
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SuvHeader