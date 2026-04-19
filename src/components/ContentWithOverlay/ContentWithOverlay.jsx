import MainPoster from '../MainPoster/MainPoster'
import MainVideo from '../MainVideo/MainVideo'
import styles from './ContentWithOverlay.module.css'

function ContentWithOverlay() {

  return (
    <div className={styles.container}>
        <div>
            <MainPoster/>
            <MainVideo/>
        </div>
        <div className={styles.overlay}/>
        <div className={styles.contentArea}>

        </div>
    </div>
  )
}

export default ContentWithOverlay
