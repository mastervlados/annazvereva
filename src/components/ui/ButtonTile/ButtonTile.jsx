import styles from './ButtonTile.module.css'

function ButtonTile({ icon: Icon, href }) {

  return (
    <a href={href} target='_blank' className={styles.buttonTile}>
        {Icon && <Icon/>}
    </a>
  )
}

export default ButtonTile
