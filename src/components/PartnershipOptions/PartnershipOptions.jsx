import { calulateNumberYearsElapsed } from '../../utils/helpers'
import styles from './PartnershipOptions.module.scss'

function PartnershipOptions() {

  return (
    <div className={styles.container}>
        <p className={styles.description}>Для тебя я буду не только тренером, который поможет в достижении результатов, но и хорошим другом!</p>
        <p className={styles.service}>
            {`Стаж ${calulateNumberYearsElapsed(2021)} (с 2021 года)`}
        </p>
        <h3 className={styles.heading}>Варианты сотрудничества:</h3>
        <ul className={styles.ul}>
            <li>Персональные тренировки в Клубе FitnessHouse</li>
            <li>Онлайн, будем работать удаленно</li>
        </ul>
    </div>
  )
}

export default PartnershipOptions
