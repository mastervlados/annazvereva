import InfiniteCarousel from '../../components/InfiniteCarousel/InfiniteCarousel';
import styles from './CustomersModule.module.scss'

function CustomersModule() {
    const clientsPhotos = [
        { src: 'https://light-vision.ucoz.ru/fairy/images/customers/badgirl_1.png', alt: 'Вертикальная тяга' },
        { src: 'https://light-vision.ucoz.ru/fairy/images/customers/badgirl_2.png', alt: 'Тяга Т-Грифа' },
        { src: 'https://light-vision.ucoz.ru/fairy/images/customers/badgirl_3.png', alt: 'Приседания со штангой' },
        { src: 'https://light-vision.ucoz.ru/fairy/images/customers/badgirl_4.png', alt: 'Приседания сумо в Смите' },
        { src: 'https://light-vision.ucoz.ru/fairy/images/customers/badgirl_5.png', alt: 'Румынская тяга' },
        { src: 'https://light-vision.ucoz.ru/fairy/images/customers/badgirl_6.png', alt: 'Ягодичный мост в Смите' },
        { src: 'https://light-vision.ucoz.ru/fairy/images/customers/badgirl_7.png', alt: 'Румынская тяга и выпады' },
        { src: 'https://light-vision.ucoz.ru/fairy/images/customers/badgirl_8.png', alt: 'Гакк приседания (обратные)' },
    ];
  return (
    <section>
        <div className={'wrap'}>
            <h2 className={`section-heading`}>Фотогалерея занятий</h2>
            <p className={styles.description}>То, чем мы действительно занимаемся на персональных тренировках</p>
            <InfiniteCarousel images={clientsPhotos}/>
        </div>
        
    </section>
  )
}

export default CustomersModule
