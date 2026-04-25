import styles from './YandexMapWidget.module.css'

function YandexMapWidget() {
    return (
        <div className={styles.container}>
            <a href="https://yandex.ru/maps/org/fitness_house/1470092606/?utm_medium=mapframe&utm_source=maps" 
                className={styles.link}>Fitness House</a>
            <iframe 
                src="https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=30.357985%2C59.877418&mode=search&oid=1470092606&ol=biz&sctx=ZAAAAAgBEAAaKAoSCRNHHogsUj5AER1XI7vS8k1AEhIJj3IwmwDD3j8RHmtGBrmLwj8iBgABAgMEBSgKOABAv54BSAFqAnJ1nQHNzMw9oAEAqAEAvQGbC3MlwgEFvqr%2FvAWCAiNGaXRuZXNzIEhvdXNlINGD0LsuINCk0YPRh9C40LrQsCwgMooCAJICATKaAgxkZXNrdG9wLW1hcHOqAj4yMDU4MDA4ODI3LDYwMDI5NTAsNjAwMjY0NSw4OTczMjI4MTIyMSwxMzYzODM3MTYyLDEyMzc3MjYzNjIwOLACAdoCKAoSCWR1q%2BekWz5AEewPGjlP8E1AEhIJALi3UyG7jj8RAIDzsIoWdD%2FgAgE%3D&sll=30.357985%2C59.877418&sspn=0.016210%2C0.004889&text=Fitness%20House%20%D1%83%D0%BB.%20%D0%A4%D1%83%D1%87%D0%B8%D0%BA%D0%B0%2C%202&z=16.89" 
                frameBorder="0" 
                allowFullscreen="true" 
                className={styles.iframe}/>
        </div>
    )
}

export default YandexMapWidget