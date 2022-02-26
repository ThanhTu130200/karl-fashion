import { useState } from 'react'
import styles from './FilterColor.module.scss'

function FilterColor () {

    const [active, setActive] = useState([])

    const handleClick = (x) => {
        active.includes(x) ? setActive(prev => prev.filter(activeId => activeId !== x)) : setActive([ ...active, x])
    }
    const isActive = (x) => {
        return active.includes(x) ? styles.active : ''
    }

    return (
        <div className={styles.container}>
            <h1>Filter by color</h1>
            <div className={styles.colors}>
                <div className={styles.color + ' ' + (isActive(1))} onClick={() => handleClick(1)}>
                    <p>(3)</p>
                </div>
                <div className={styles.color + ' ' + (isActive(2))} onClick={() => handleClick(2)}>
                    <p>(41)</p>
                </div>
                <div className={styles.color + ' ' + (isActive(3))} onClick={() => handleClick(3)}>
                    <p>(10)</p>
                </div>
                <div className={styles.color + ' ' + (isActive(4))} onClick={() => handleClick(4)}>
                    <p>(20)</p>
                </div>
                <div className={styles.color + ' ' + (isActive(5))} onClick={() => handleClick(5)}>
                    <p>(40)</p>
                </div>
                <div className={styles.color + ' ' + (isActive(6))} onClick={() => handleClick(6)}>
                    <p>(70)</p>
                </div>
            </div>
        </div>
    )
}

export default FilterColor