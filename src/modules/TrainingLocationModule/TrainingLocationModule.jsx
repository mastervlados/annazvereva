import TrainingLocation from '../../components/TrainingLocation'
import YandexMapWidget from '../../components/YandexMapWidget'
import styles from './TrainingLocationModule.module.css'

function TrainingLocationModule() {

  return (
    <section aria-labelledby="location-title" className={`wrap`}>
      <h2 className={`section-heading`}>Места проведения тренировок</h2>
      <div className={`wrap ${styles.container}`}>
          <TrainingLocation/>
          <YandexMapWidget/>
      </div>
    </section>

  )
}

export default TrainingLocationModule
