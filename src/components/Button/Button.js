import styles from './Button.module.scss'

function Button({ className, children }) {
    return <button className={styles.button + ' ' + className}>{children}</button>
}

export default Button