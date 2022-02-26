import { useState } from "react"
import styles from "./FilterSize.module.scss"

function FilterSize() {
    const sizes = ["XS", "S", "M", "L", "XL", "XXL"]

    const [active, setActive] = useState([])

    const handleClick = (x) => {
        active.includes(x)
            ? setActive((prev) => prev.filter((activeId) => activeId !== x))
            : setActive([...active, x])
    }
    const isActive = (x) => {
        return active.includes(x) ? styles.active : ""
    }

    return (
        <div className={styles.container}>
            <h1>Filter by size</h1>
            <div className={styles.sizes}>
                {sizes.map((size) => (
                    <div
                        key={size}
                        className={styles.size + " " + isActive(size)}
                        onClick={() => handleClick(size)}>
                        {size}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FilterSize
