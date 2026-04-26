import ButtonContactMe from '../../components/ButtonContactMe'
import IconInstagram from '../../components/ui/IconInstagram'
import IconTelegram from '../../components/ui/IconTelegram'
import IconVK from '../../components/ui/IconVK'
import { calulateNumberYearsElapsed } from '../../utils/helpers'
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
    <section>
        <p>Для тебя я буду не только тренером, который поможет в достижении результатов, но и хорошим другом!</p>
        <p>Стаж с 2021 года ({calulateNumberYearsElapsed(2021)})</p>
        <div className={styles.buttonsContainer}>
          <ButtonContactMe {...vkButtonProps}/>
          <ButtonContactMe {...igButtonProps}/>
          <ButtonContactMe {...tgButtonProps}/>
        </div>

    </section>
  )
}

export default ContactMeModule
