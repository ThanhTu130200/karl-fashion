import { useState, useRef } from 'react'
import styles from './MiniCategories.module.scss'
import categories from '../FakeAPI/FakeAPICategories'

function MiniCategories() {

    const categoriesRef = useRef()

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
    
    const handleHide = () => {
        categoriesRef.current.classList.remove(styles.active)
    }

    return (
        <>
            <nav ref={categoriesRef} className={styles.miniCategoryListsWrap + " " + styles.active}>
                <h2 className={styles.miniCategoryHeader}>Categories</h2>
                <div className={styles.miniCategoryLists}>
                    {categories.map(category => (
                        <div
                            key={category.id}
                            className={`${styles.miniCategoryItem} item-${category.id} ${activeItems.includes(category.id) && styles.active
                                }`}
                        >
                            <label
                                className={styles.miniCategoryItemName}
                                onClick={() => handleActive(category.id)}
                            >
                                {category.name}
                                <i className={`${styles.arrowDown} ti-angle-down`}></i>
                            </label>
                            <ul className={`${styles.miniCategoryItemChildren}  ${activeItems.includes(category.id) && 'd-block'
                                }`}>
                                {category.children.map((child, index) => (
                                    <li
                                        key={index}
                                        className={`${styles.miniCategoryItemChild}`}
                                    >
                                        {child}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </nav>
        </>
    )
}

export default MiniCategories
