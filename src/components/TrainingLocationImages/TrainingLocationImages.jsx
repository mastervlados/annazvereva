import styles from './TrainingLocationImages.module.css'

function TrainingLocationImages() {

  return (
    <div className={styles.container}>
        <figure className={styles.fig}>
            <img 
                className={`${styles.image} ${styles.imageFullSize}`} 
                src="https://light-vision.ucoz.ru/fairy/images/gym/gym_1.jpg" 
                alt="Кардиозона" />
            <div className={styles.figBG}/>
            <figcaption className={styles.figcaption}>
                Кардиозона
            </figcaption>              
        </figure>
        <div className={styles.insideContainer}>
            <figure className={styles.fig}>
                <img 
                    className={`${styles.image} ${styles.imageHalfSize} ${styles.imageTop}`} 
                    src="https://light-vision.ucoz.ru/fairy/images/gym/gym_3.jpg" 
                    alt="Малый зал" />
                <div className={styles.figBG}/>
                <figcaption className={styles.figcaption}>
                    Малый зал 
                </figcaption>     
            </figure>
            <figure className={styles.fig}>
                <img 
                    className={`${styles.image} ${styles.imageHalfSize} ${styles.imageBottom}`} 
                    src="https://light-vision.ucoz.ru/fairy/images/gym/gym_2.jpg" 
                    alt="Тренажерный зал" />
                <div className={`${styles.figBG} ${styles.figBGHidden}`}/>
                <figcaption className={styles.figcaption}>
                    Тренажерный зал
                </figcaption>
            </figure>
        </div>
    </div>
  )
}

export default TrainingLocationImages