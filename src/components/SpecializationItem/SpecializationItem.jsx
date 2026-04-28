import styles from './SpecializationItem.module.scss'

function SpecializationItem({ key, text, image }){
  const { src, alt } = image
  return (
    <div className={styles.container}>
      {key}
      {text}
      {src}
      {alt}
    </div>
  )
}

export default SpecializationItem