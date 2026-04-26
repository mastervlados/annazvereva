import ButtonContactMe from '../../components/ButtonContactMe'
import PartnershipOptions from '../../components/PartnershipOptions'
import IconInstagram from '../../components/ui/IconInstagram'
import IconTelegram from '../../components/ui/IconTelegram'
import IconVK from '../../components/ui/IconVK'
import styles from './ContactMeModule.module.scss'

function ContactMeModule() {

  const vkButtonProps = {
    type: 'vk',
    href: 'https://vk.com/anyachokavo',
    alt: 'Страница тренера Вконтакте',
    text: 'Напишите Вконтакте',
    icon: <IconVK width={30} height={30} color={'#FFFFFF'}/>
  }

  const igButtonProps = {
    type: 'ig',
    href: 'https://www.instagram.com/anyachokavo/',
    alt: 'Instagram тренера',
    text: 'Оставьте DM в Instagram',
    icon: <IconInstagram  width={30} height={30} color={'#FFFFFF'}/>
  }

  const tgButtonProps = {
    type: 'tg',
    href: 'https://t.me/anyachokavo',
    alt: 'Продолжить в Telegram мессенджере',
    text: 'Продолжим в Telegram',
    icon: <IconTelegram  width={29} height={29} color={'#FFFFFF'}/>
  }

  return (
    <section className={styles.section}>
        <div className={`wrap ${styles.container}`}>
          <PartnershipOptions/>
          <div className={styles.buttonsContainer}>
            <ButtonContactMe {...vkButtonProps}/>
            <ButtonContactMe {...igButtonProps}/>
            <ButtonContactMe {...tgButtonProps}/>
          </div>
          <div className={styles.dummyDiv}/>
        </div>
        <img src="https://light-vision.ucoz.ru/fairy/images/friendly.png" className={styles.image} alt="Персональная тренировка" />
    </section>
  )
}

export default ContactMeModule
