import EducationItem from '../../components/EducationItem'
import IconCertificate from '../../components/ui/IconCertificate'
import IconGraduateCap from '../../components/ui/IconGraduateCap'
import IconTelegram from '../../components/ui/IconTelegram'
import styles from './EducationModule.module.scss'

function EducationModule(){
    const iconColor = '#E2E4E8'
    const iconSize = 28
    const education = [
        {
            key: 'edu1',
            organization: 'НГУ им. П. Ф. Лесгафта (бывш. СПбГУФК)',
            about: 'Адаптивная физическая культура',
            icon: <IconGraduateCap width={iconSize} height={iconSize} color={iconColor}/>
        },
        {
            key: 'edu2',
            organization: 'СПб ГБПОУ «Медицинский техникум № 2»',
            about: 'Сестринское дело. Медицинская сестра',
            icon: <IconGraduateCap width={iconSize} height={iconSize} color={iconColor}/>
        },
        {
            key: 'edu3',
            organization: 'ООО «Анатомия»',
            about: 'Персональный тренер тренажерного зала. Консультант по спортивному питанию',
            icon: <IconCertificate width={iconSize} height={iconSize} color={iconColor}/>
        },
        {
            key: 'edu4',
            organization: 'ЧОУ ДПО «Корус»',
            about: 'Функциональный тренинг',
            icon: <IconCertificate width={iconSize} height={iconSize} color={iconColor}/>
        },
        {
            key: 'edu5',
            organization: 'Международная академия нутрициологии',
            about: 'Нутрициолог',
            icon: <IconCertificate width={iconSize} height={iconSize} color={iconColor}/>
        }
    ]
  return (
    <section>
        <div className={'wrap'}>
            <h2 className={`section-heading`}>Образование</h2>
            <div className={styles.container}>
                { education.map(item => <EducationItem {...item}/>) }
            </div>
        </div>
    </section>
  )
}

export default EducationModule

