import { useState, useEffect, useRef, useLayoutEffect } from 'react'

import styles from './NewArrivals.module.scss'
import products from '../Products/FakeAPIProducts'
import Products from '../Products/Products'

function NewArrivals() {

    const menu = useRef()

    const [show, setShow] = useState(false)
    const [active, setActive] = useState(0)

    useEffect(() => {

        const menuOffsetBottom = menu.current.offsetTop + menu.current.offsetHeight

        const handleScroll = () => {
            (window.scrollY + window.innerHeight) &&
                (window.scrollY + window.innerHeight >= menuOffsetBottom + 30) &&
                setShow(true)
        }

        window.addEventListener('scroll', handleScroll)
    }, [])

    const handleChangeMenu = (id) => {
        setActive(id)
    }

    return (
        <div className={`${styles.newArrivalsContainer} grid wide`}>
            <div className={`${styles.newArrivalsWrap} row`}>
                <div className={`${styles.newArrivals} col l-10 l-o-1 m-10 m-o-1 c-12`}>
                    <h1>New arrivals</h1>
                    <div ref={menu} className={`${styles.newArrivalsMenu}`}>
                        <button
                            className={`${styles.newArrivalsMenuItem} ${active === 0 && styles.active
                                }`}
                            onClick={() => handleChangeMenu(0)}
                        >
                            All
                        </button>
                        {products.map(product => (
                            <button
                                key={product.id}
                                className={`${styles.newArrivalsMenuItem} ${active === product.id && styles.active
                                    }`}
                                onClick={() => handleChangeMenu(product.id)}
                            >
                                {product.type}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <Products active={active} />
        </div>
    )
}

export default NewArrivals