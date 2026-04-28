import styles from './ButtonContactMe.module.scss'

function ButtonContactMe({ type, href, alt, icon: Icon, text }) {

  return (
    <a 
        href={href} 
        className={[
            styles.button,
            type === 'vk' ? styles.vkButton : null,
            type === 'ig' ? styles.igButton : null,
            type === 'tg' ? styles.tgButton : null
        ].filter(Boolean).join(' ')}
        target="_blank"
        alt={alt}
    >
        <p className={styles.insideContainer}>
            <span className={styles.iconContainer}>{ Icon }</span>
            <span className={`alt-text ${styles.buttonText}`}>{ text }</span>
        </p>
    </a>
  )
}

export default ButtonContactMe