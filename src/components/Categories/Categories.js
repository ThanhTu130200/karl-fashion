import { useState, useRef } from 'react'
import styles from './Categories.module.scss'
import categories from '../FakeAPI/FakeAPICategories'

function Categories() {

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
            <nav ref={categoriesRef} className={styles.headerCategoryListsWrap}>
                <div className={styles.headerCategoryClose} onClick={handleHide}>
                    <i className={`${styles.headerCategoryCloseIcon} ti-close`} />
                </div>
                <h2 className={styles.headerCategoryHeader}>Categories</h2>
                <div className={styles.headerCategoryLists}>
                    {categories.map(category => (
                        <div
                            key={category.id}
                            className={`${styles.headerCategoryItem} item-${category.id} ${activeItems.includes(category.id) && styles.active
                                }`}
                        >
                            <label
                                className={styles.headerCategoryItemName}
                                onClick={() => handleActive(category.id)}
                            >
                                {category.name}
                                <i className={`${styles.arrowDown} ti-angle-down`}></i>
                            </label>
                            <ul className={`${styles.headerCategoryItemChildren}  ${activeItems.includes(category.id) && 'd-block'
                                }`}>
                                {category.children.map((child, index) => (
                                    <li
                                        key={index}
                                        className={`${styles.headerCategoryItemChild}`}
                                    >
                                        {child}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </nav>
            <div className={styles.headerCategoryOverlay} onClick={handleHide}></div>
        </>
    )
}

export default Categories
