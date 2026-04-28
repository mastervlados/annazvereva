import { calulateNumberYearsElapsed } from '../../utils/helpers'
import Address from '../Address/Address'
import styles from './PartnershipOptions.module.scss'

function PartnershipOptions() {

  return (
    <div className={styles.container}>
        <p className={`alt-text ${styles.description}`}>Для тебя я буду не только тренером, который поможет в достижении результатов, но и хорошим другом!</p>
        <p className={styles.service}>
            {`Стаж ${calulateNumberYearsElapsed(2021)} (с 2021 года)`}
        </p>
        <h3 className={`alt-text`}>Варианты сотрудничества:</h3>
        <ul className={styles.ul}>
            <h3 className={`alt-text ${styles.heading}`}>Персональные тренировки в Клубе Fitness House</h3>
            <Address type='light'/>
            <h3 className={`alt-text ${styles.heading}`}>Онлайн, будем работать удаленно</h3>
        </ul>
    </div>
  )
}

export default PartnershipOptions
