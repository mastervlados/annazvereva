import IconPlace from '../ui/IconPlace'
import styles from './Address.module.scss'

function Address({ type = 'dark' }){
  return (
    <p className={styles.container}>
        <IconPlace width={20} height={20} color={type === 'light' ? '#F8F9FA' : '#4A4A4A'}/>
        <address className={[
          styles.address,
          type === 'light' ? 'alt-text' : null
        ].join(' ')}>Санкт-Петербург, Клуб Fitness House, ул. Фучика, 2</address>
    </p>
  )
}

export default Address