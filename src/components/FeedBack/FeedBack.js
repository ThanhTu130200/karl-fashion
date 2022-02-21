import 'slick-carousel'
import $ from 'jquery'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styles from './FeedBack.module.scss'

function FeedBack() {
    $(document).ready(function () {
        $('.sliderWrap').slick({
            waitForAnimate: false,
            arrows: false,
            dots: true,
            speed: 1000,
            appendDots: $(`.${styles.sliderDots}`),
            cssEase: 'ease-in-out',
        })
    })

    return (
        <div className="grid wide">
            <div className={styles.container + " row"}>
                <div className="col l-2 m-2 c-0">
                    <div className={styles.sliderDots}></div>
                </div>
                <div className="col l-8 m-8 c-12">
                    <div className={styles.contentWrap}>
                        <div className="sliderWrap">
                            <div className={styles.content}>
                                <h1>FeedBack</h1>
                                <h2>"</h2>
                                <p>Ordered in December for delivery date of January 4th.
                                    By mid-Jan, there was no update to the order so emailed the
                                    customer service mailbox. They had no idea when it would ship,
                                    told me to wait a week. After the week, emailed again,
                                    and had the same response. Seeing as this bag is available
                                    for purchase online and is in stock on the website,
                                </p>
                                <div className={styles.customer}>
                                    <div className={styles.img}></div>
                                    <div className={styles.details}>
                                        <h3>Emma Waston</h3>
                                        <h4>Customer, New York</h4>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.content}>
                                <h1>FeedBack</h1>
                                <h2>"</h2>
                                <p>Ordered in December for delivery date of January 4th.
                                    By mid-Jan, there was no update to the order so emailed the
                                    customer service mailbox. They had no idea when it would ship,
                                    told me to wait a week. After the week, emailed again,
                                    and had the same response. Seeing as this bag is available
                                    for purchase online and is in stock on the website,
                                    I thought something must be wrong. Called the customer service line,
                                    the lady also had no idea what was happening with the order but said
                                    I could cancel and try going in-store where there was stock.
                                    I live out of state and since this is a gift this wasn’t possible.
                                    Hung up and placed an order on Farfetch since I didn’t want to play
                                    phone/email tag all week again.
                                </p>
                                <div className={styles.customer}>
                                    <div className={styles.img}>
                                        <div className={styles.details}>
                                            <h3>Emma Waston</h3>
                                            <h4>Customer, New York</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.content}>
                                <h1>FeedBack</h1>
                                <h2>"</h2>
                                <p>Ordered in December for delivery date of January 4th.
                                    By mid-Jan, there was no update to the order so emailed the
                                    customer service mailbox. They had no idea when it would ship,
                                    told me to wait a week. After the week, emailed again,
                                    and had the same response. Seeing as this bag is available
                                    for purchase online and is in stock on the website,
                                    I thought something must be wrong. Called the customer service line,
                                    the lady also had no idea what was happening with the order but said
                                    I could cancel and try going in-store where there was stock.
                                    I live out of state and since this is a gift this wasn’t possible.
                                    Hung up and placed an order on Farfetch since I didn’t want to play
                                    phone/email tag all week again.
                                </p>
                                <div className={styles.customer}>
                                    <div className={styles.img}>
                                        <div className={styles.details}>
                                            <h3>Emma Waston</h3>
                                            <h4>Customer, New York</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedBack