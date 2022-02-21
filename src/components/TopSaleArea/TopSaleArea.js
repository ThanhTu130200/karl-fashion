import styles from './TopSaleArea.module.scss'
import Button from '../Button/Button'

function TopSaleArea () {
    return(
        <div className={`${styles.topSaleAreaContainer} grid`}>
            <div className={`${styles.topSaleArea} row no-gutters`}>
                <div
                    className={`${styles.topSaleAreaItem} col l-6 m-6 c-12`}
                    style={{
                        backgroundImage: 'url("/static/images/Products/product-5.jpg")',
                    }}
                >
                    <div className={styles.topSaleAreaItemContent}>
                        <h6>On accessories</h6>
                        <h1>Sale 30%</h1>
                        <Button>Shop now</Button>
                    </div>
                </div>
                <div
                    className={`${styles.topSaleAreaItem} col l-6 m-6 c-12`}
                    style={{
                        backgroundImage: 'url("/static/images/Products/product-4.jpg")',
                    }}
                >
                    <div className={styles.topSaleAreaItemContent}>
                        <h6>In bags excepting the new collection</h6>
                        <h1>Designer bags</h1>
                        <Button>Shop now</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopSaleArea