import styles from './TopDiscountArea.module.scss'

function TopDiscountArea() {
    return (
        <div className="grid">
            <div className={`${styles.topDiscountArea} row`}>
                <div className={`${styles.singleDiscount} col l-4 m-4 c-12`}>
                    <h2>Free Shipping & Returns</h2>
                    <p>BUY NOW</p>
                </div>
                <div className={`${styles.singleDiscount} col l-4 m-4 c-12`}>
                    <h2>20% Discount for all dresses</h2>
                    <p>USE CODE: Colorlib</p>
                </div>
                <div className={`${styles.singleDiscount} col l-4 m-4 c-12`}>
                    <h2>20% Discount for students</h2>
                    <p>USE CODE: Colorlib</p>
                </div>
            </div>
        </div>
    )
}

export default TopDiscountArea