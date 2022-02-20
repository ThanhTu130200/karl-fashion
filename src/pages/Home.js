import Header from '../components/Header/Header'
import SuvHeader from '../components/SuvHeader/SuvHeader'
import TopDiscountArea from '../components/TopDiscountArea/TopDiscountArea'
import WelcomeArea from '../components/WelcomeArea/WelcomeArea'
import TopSaleArea from '../components/TopSaleArea/TopSaleArea'
import NewArrivals from '../components/NewArrivals/NewArrivals'

function Home() {
    return (
        <>
            <Header />
            <SuvHeader />
            <TopDiscountArea />
            <WelcomeArea />
            <TopSaleArea />
            <NewArrivals />
        </>
    )
}

export default Home