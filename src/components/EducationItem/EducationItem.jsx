import styles from './EducationItem.module.scss'

function EducationItem({ key, organization, about, icon: Icon }){
  return (
    <div key={key} className={styles.container}>
        <div className={styles.iconContainer}>
            { Icon }
        </div>
        <div className={styles.descriptionContainer}>
            <h3 className={styles.organization}>{ organization }</h3>
            <h4 className={styles.about}>{ about }</h4>
        </div>
    </div>
  )
}

export default EducationItem