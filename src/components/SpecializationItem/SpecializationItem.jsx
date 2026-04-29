import styles from './SpecializationItem.module.scss'

function SpecializationItem({ id, text, image }){
  const { src, alt } = image
  const isOdd = id % 2 !== 0

  return (
    <figure key={id} className={[
      styles.container,
      isOdd ? styles.oddContainer : null
      ].join(' ')}>
      <div className={styles.imageContainer}>
        <img src={src} alt={alt} className={styles.image}/>
      </div>
      <div className={styles.headingContainer}>
        <span>👇</span>
        <h3 className={styles.heading}>{ text }</h3>
      </div>
      <figcaption styles={styles.figraptionContainer}>
        { alt }
      </figcaption>
    </figure>
  )
}

export default SpecializationItem