import styles from './EducationItem.module.scss'

function EducationItem({ key, organization, about, icon: Icon }){
  return (
    <div key={key} className={styles.container}>
        <div className={styles.iconContainer}>
            { Icon }
        </div>
        <div className={styles.descriptionContainer}>
            <h4 className={styles.organization}>{ organization }</h4>
            <h3 className={styles.about}>{ about }</h3>
        </div>
    </div>
  )
}

export default EducationItem