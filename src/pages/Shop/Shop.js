import Products from '../../components/Products/Products'
import MiniCategories from '../../components/MiniCategories/MiniCategories'
import Pagination from '../../components/Pagination/Pagination'
import FilterPrice from '../../components/Filters/FilterPrice/FilterPrice'
import FilterColor from '../../components/Filters/FilterColor/FilterColor'
import FilterSize from '../../components/Filters/FilterSize/FilterSize'
import styles from './Shop.module.scss'

function Shop () {
    return (
        <div className="grid wide">
            <div className={styles.container + " row"}>
                <div className="col l-3 m-4 c-12">
                    <div className={styles.miniCategories + ' ' + styles.component}>
                        <MiniCategories />
                    </div>
                    <div className={styles.filterPrice + ' ' + styles.component}>
                        <FilterPrice />
                    </div>
                    <div className={styles.filterColor + ' ' + styles.component}>
                        <FilterColor />
                    </div>
                    <div className={styles.filterSize + ' ' + styles.component}>
                        <FilterSize />
                    </div>
                </div>
                <div className="col l-9 m-8 c-12">
                    <div className={styles.products}>
                        <Products active={0} max={9} m={6} />
                    </div>
                    <div className={styles.pagination}>
                        <Pagination />
                    </div>
                </div>
            </div>
            <div className={styles.line} />
        </div>
    )
}

export default Shop