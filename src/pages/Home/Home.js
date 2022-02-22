import WelcomeArea from '../../components/WelcomeArea/WelcomeArea'
import TopSaleArea from '../../components/TopSaleArea/TopSaleArea'
import NewArrivals from '../../components/NewArrivals/NewArrivals'
import OfferArea from '../../components/OfferArea/OfferArea'
import FeedBack from '../../components/FeedBack/FeedBack'

function Home() {
    return (
        <>
            <WelcomeArea />
            <TopSaleArea />
            <NewArrivals />
            <OfferArea />
            <FeedBack />
        </>
    )
}

export default Home