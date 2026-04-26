import MainContent from '../MainContent/MainContent'
import MainPoster from '../MainPoster/MainPoster'
import MainVideo from '../MainVideo/MainVideo'
import styles from './ContentWithOverlay.module.css'

function ContentWithOverlay() {

  return (
    <main className={styles.container}>
        <div>
            <MainPoster/>
            <MainVideo/>
        </div>
        <div className={styles.overlay}/>
        <div className={styles.contentArea}>
            <MainContent/>
        </div>
    </main>
  )
}

export default ContentWithOverlay
