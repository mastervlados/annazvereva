import SpecializationItem from '../../components/SpecializationItem'
import styles from './AreaOfExpertiseModule.module.scss'

function AreaOfExpertiseModule(){
  const data = [
    {
      key: '1s',
      text: 'похудение',
      image: {
        src: '',
        alt: ''
      }
    },
    {
      key: '2s',
      text: 'набор мышечной массы',
      image: {
        src: '',
        alt: ''
      }
    },
    {
      key: '3s',
      text: 'коррекция осанки',
      image: {
        src: '',
        alt: ''
      }
    },
    {
      key: '4s',
      text: 'составление программ тренировок и питания',
      image: {
        src: '',
        alt: ''
      }
    }
  ]
  return (
    <section className={styles.container}>
        <div className={'wrap'}>
            <h2 className={`section-heading`}>Специализация</h2>
              <div className={styles.insideContainer}>
                { data.map(item => <SpecializationItem {...item}/>)} 
              </div>
        </div>
    </section>
  )
}

export default AreaOfExpertiseModule