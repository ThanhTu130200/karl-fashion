import styles from './FilterPrice.module.scss'
import { useState, useEffect } from 'react'

function FilterPrice() {

    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(2000)
    const [range, setRange] = useState([value1, value2])

    useEffect(() => {
        value1 > value2 ? setRange([value2, value1]) : setRange([value1, value2])
    }, [value1, value2])

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Filter by price</h1>
            <section className={styles.rangeSlider}>
                <input
                    className={styles.inputRange}
                    defaultValue={value1}
                    min="0"
                    max="2000"
                    step="10"
                    type="range"
                    onChange={e => setValue1(Number(e.target.value))}
                />
                <input
                    className={styles.inputRange}
                    defaultValue={value2}
                    min="0"
                    max="2000"
                    step="10"
                    type="range"
                    onChange={e => setValue2(Number(e.target.value))}
                />
                <h2 className={styles.rangeValues}>{`Price: $${range[0]} - $${range[1]}`}</h2>
            </section>
        </div>
    )
}

export default FilterPrice