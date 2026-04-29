import SpecializationItem from '../../components/SpecializationItem'
import styles from './AreaOfExpertiseModule.module.scss'

function AreaOfExpertiseModule(){
  const data = [
    {
      id: 1,
      text: 'похудение',
      image: {
        src: 'https://light-vision.ucoz.ru/fairy/images/specialization/spec_1.png',
        alt: 'Следить за питанием и весом, регулярно заниматься'
      }
    },
    {
      id: 2,
      text: 'набор мышечной массы',
      image: {
        src: 'https://light-vision.ucoz.ru/fairy/images/specialization/spec_2.png',
        alt: 'Хорошо кушать и ходить на силовые тренировки'
      }
    },
    {
      id: 3,
      text: 'коррекция осанки',
      image: {
        src: 'https://light-vision.ucoz.ru/fairy/images/specialization/spec_3.png',
        alt: 'Поработаем над тем, что важнее всего'
      }
    },
    {
      id: 4,
      text: <>составление <br/> программ тренировок и питания</>,
      image: {
        src: 'https://light-vision.ucoz.ru/fairy/images/specialization/spec_4.png',
        alt: 'Какие упражнения выполнять и как дополнить свои тренировки правильным питанием для достижения лучшего результата'
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