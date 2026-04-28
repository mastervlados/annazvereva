import Address from '../../components/Address/Address'
import TrainingLocationImages from '../../components/TrainingLocationImages'
import YandexMapWidget from '../../components/YandexMapWidget'
import styles from './TrainingLocationModule.module.css'

function TrainingLocationModule() {

  return (
    <section aria-labelledby="location-title" className={`wrap`}>
      <h2 className={`section-heading`}>Места проведения тренировок</h2>
      <Address/>
      <div className={`wrap ${styles.container}`}>
          <TrainingLocationImages/>
          <YandexMapWidget/>
      </div>
    </section>
  )
}

export default TrainingLocationModule
