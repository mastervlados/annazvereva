import ButtonAppStore from '../ButtonAppStore/ButtonAppStore'
import styles from './MainContent.module.css'

function MainContent() {
    return (
        <main className={`wrap ${styles.container}`}>
            <h1 className={`alt-text ${styles.heading}`}>Анна Зверева</h1>
            <h2 className={`alt-text ${styles.position}`}>💪Фитнес-тренер</h2>
            <p className={styles.description}>В своих тренировочных программах делаю акцент на ягодицы и осанку</p>
            <p className={`alt-text ${styles.promo}`}>Начните БЕСПЛАТНО прямо сейчас!</p>
            <div className={styles.buttonsContainer}>
                <ButtonAppStore store={'rustore'}/>
                <ButtonAppStore store={'appgallery'}/>
            </div>
        </main>  
    )
}

export default MainContent