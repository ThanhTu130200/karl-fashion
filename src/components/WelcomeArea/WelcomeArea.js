import { useState, useEffect } from 'react'
import data from '../FakeAPI/FakeAPIWelcomeArea'
import styles from './WelcomeArea.module.scss'
import Button from '../Button/Button'

function WelcomeArea () {

    const [active, setActive] = useState(1)

    useEffect(() => {
        const timerId = setTimeout(() => {
            if (active >= 3) {
                setActive(1)
            } else {
                setActive(prev => prev + 1)
            }
        }, 5000)

        return () => clearInterval(timerId)
    }, [active])

    return (
        <div className={`${styles.welcomeAreaContainer} grid`}>
            <div className={`${styles.welcomeArea} row`}>
                <div className={styles.options}>
                    {data.map(item => (
                        <span
                            key={item.id}
                            className={`${styles.option}`}
                            style={{
                                color: item.id === active ? 'var(--primary-color)' : '#fff'
                            }}
                            onClick={() => {
                                setActive(item.id)
                            }}
                        >
                            ●
                        </span>
                    ))}
                </div>
                {data.map(item => (
                    <div
                        key={item.id}
                        className={`${styles.welcomeAreaSlide} col l-12 m-12 c-12`}
                        style={{
                            display: item.id === active ? 'block' : 'none',
                            backgroundImage: `
                                linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                                url(${item.imgPath})
                            `,
                        }}
                    >
                        <h1 className={`${styles.offer}`}>{item.offer}</h1>
                        <h1 className={`${styles.title}`}>{item.title}</h1>
                        <Button className={`${styles.action}`}>{item.action}</Button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WelcomeArea