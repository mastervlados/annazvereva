import ButtonTile from '../ui/ButtonTile/ButtonTile'
import IconTelegram from '../ui/IconTelegram'
import IconVK from '../ui/IconVK'
import IconInstagram from '../ui/IconInstagram'
import styles from './Footer.module.css'

function Footer() {

  return (
    <footer>
        <div className={`wrap ${styles.container}`}> 
            <div className={[styles.container]}>
                <h3 className={[styles.heading]}>Подпишись:</h3>
                <div style={{ display: 'flex', gap: '12px'}}>
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