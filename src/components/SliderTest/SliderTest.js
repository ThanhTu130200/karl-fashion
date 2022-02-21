import 'slick-carousel'
import $ from 'jquery'
import styles from './SliderTest.module.scss'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function SliderTest() {
    $(document).ready(function () {
        $('.your-class').slick({
            // infinite: true,
            slidesToShow: 2,
            // slidesToScroll: 1,
            prevArrow: `<button type='button' class='slick-prev pull-left ${styles.slickArrow} ${styles.slickArrowPrev}'><i class='fa fa-angle-left' aria-hidden='true'></i></button>`,
            nextArrow: `<button type='button' class='slick-next pull-right ${styles.slickArrow} ${styles.slickArrowNext}'><i class='fa fa-angle-right' aria-hidden='true'></i></button>`
        })
    })
    return (
        <div className={styles.container}>
            <div className={styles.sliders + " your-class"}>
                <div className={styles.slider}>
                    <span>1</span>
                </div>
                <div className={styles.slider}>
                    <span>2</span>
                </div>
                <div className={styles.slider}>
                    <span>3</span>
                </div>
                <div className={styles.slider}>
                    <span>4</span>
                </div>
                <div className={styles.slider}>
                    <span>5</span>
                </div>
                <div className={styles.slider}>
                    <span>6</span>
                </div>
            </div>
        </div>
    )
}

export default SliderTest