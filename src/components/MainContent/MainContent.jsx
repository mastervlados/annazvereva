import ButtonAppStore from '../ButtonAppStore/ButtonAppStore'
import styles from './MainContent.module.css'

function MainContent() {
    return (
        <div className={`wrap ${styles.container}`}>
            <h1 className={styles.heading}>Анна Зверева</h1>
            <p className={styles.position}>💪Персональный тренер тренажерного зала</p>
            <p className={styles.description}>В своих тренировочных программах делаю акцент на ягодицы и осанку</p>
            <p className={styles.promo}>Начните БЕСПЛАТНО прямо сейчас!</p>
            <div className={styles.buttonsContainer}>
                <ButtonAppStore store={'rustore'}/>
                <ButtonAppStore store={'appgallery'}/>
            </div>
        </div>  
    )
}

export default MainContent