import IconPlace from '../ui/IconPlace'
import styles from './TrainingLocation.module.css'

function TrainingLocation() {

  return (
    <div className={styles.container}>
        <p className={styles.addressContainer}>
            <IconPlace width={20} height={20} color='#333'/>
            <address className={styles.address}>Санкт-Петербург, FitnessHouse, ул. Фучика, 2</address>
        </p> 
    </div>
  )
}

export default TrainingLocation
