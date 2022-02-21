import styles from './OfferArea.module.scss'
import Button from '../Button/Button'

function OfferArea () {
    return (
        <div className="grid">
            <div className="row">
                <div className={styles.img} style={{
                    backgroundImage: 'url(/static/images/OfferArea/bg-1.jpg)'
                }}>
                    <div className={styles.content + " col l-5 l-o-6 m-8 m-o-2 c-10 c-o-1"}>
                        <div className={styles.contentWrap}>
                            <div className={styles.tag}>hot</div>
                            <h1>White T-shirt</h1>
                            <p>* Free shipping until 25 Dec 2017</p>
                            <div className={styles.priceArea}>
                                <h2 className={styles.oldPrice}>$25.90</h2>
                                <h2 className={styles.price}>$15.90</h2>
                            </div>
                            <Button>Shop now</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OfferArea