import styles from './ButtonAppStore.module.css'

function ButtonAppStore({ store }) {
    const content = {
        rustore: {
            storeName: 'RuStore',
            text: 'Скачайте из',
            link: 'https://www.rustore.ru/catalog/app/com.vladelizarov.gymbro',
            iconSrc: 'https://light-vision.ucoz.ru/fairy/market/RuStore.png',
            backgroundColor: '#ffffff',
            textColor: '#000000',

        },
        appgallery: {
            storeName: 'AppGallery',
            text: 'Доступно в',
            link: 'https://appgallery.huawei.com/app/C117233503',
            iconSrc: 'https://light-vision.ucoz.ru/fairy/market/AppGallery.png',
            backgroundColor: '#000000',
            textColor: '#ffffff'
        }
    }
    
    return (
        <a 
            href={content[store].link} 
            target="_blank" 
            className={styles.link}
            style={{ backgroundColor: content[store].backgroundColor }}
            alt={`Программы тренировок для женщин - скачайте в ${content[store].storeName}`}
        >
            <div className={styles.container}>
                <img src={content[store].iconSrc} className={styles.image} alt={`${content[store].storeName} logo`}/>
                <div className={styles.content}>
                    <p 
                        className={styles.textAlternate}
                        style={{ color: content[store].textColor }}

                    >
                        {content[store].text}
                    </p>
                    <p 
                        className={styles.text}
                        style={{ color: content[store].textColor }}
                    >
                        {content[store].storeName}
                    </p>
                </div>
            </div>
        </a>
    )
}

export default ButtonAppStore