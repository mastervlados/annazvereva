import ButtonTile from '../ui/ButtonTile/ButtonTile'
import IconTelegram from '../ui/IconTelegram'
import IconVK from '../ui/IconVK'
import IconInstagram from '../ui/IconInstagram'
import styles from './Footer.module.css'

function Footer() {

  return (
    <footer>
        <div className={`wrap ${styles.main}`}> 
            <div className={`${styles.container}`}>
                <h3 className={[styles.ulHeading]}>Образование:</h3>
                <ul className={[styles.ul]}>
                    <li>НГУ. Им. Лесгафта. Адаптивная физическая культура</li>
                    <li>Медицинский колледж №2</li>
                    <li>ООО «Анатомия»</li>
                    <li>ЧОУ ДПО «Корус»</li>
                    <li>Международная академия нутрициологии</li>
                </ul>
            </div>
            <div className={[styles.container]}>
                <h3 className={[styles.ulHeading]}>Специализация:</h3>
                <ul className={[styles.ulEmoji]}>
                    <li>похудение</li>
                    <li>набор мышечной массы</li>
                    <li>составление программ тренировок и питания</li>
                    <li>коррекция осанки</li>
                </ul>
            </div>
            <div className={[styles.container]}>
                <h3 className={[styles.ulHeading]}>Подпишись:</h3>
                <div style={{ display: 'flex', gap: '8px'}}>
                    <ButtonTile icon={() => <IconTelegram width={19} height={19} color="#FFFFFF"/>} href={'https://t.me/anyagymrat'}/>
                    <ButtonTile icon={() => <IconVK width={20} height={20} color="#FFFFFF"/>} href={'https://vk.com/anyachokavo'}/>
                    <ButtonTile icon={() => <IconInstagram width={20} height={20} color="#FFFFFF"/>} href={'https://www.instagram.com/anyachokavo/'}/>
                </div>
            </div>
        </div> 
    </footer>
  )
}

export default Footer