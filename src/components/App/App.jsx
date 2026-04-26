import ContactMeModule from '../../modules/ContactMeModule/ContactMeModule'
import CustomersModule from '../../modules/CustomersModule'
import TrainingLocationModule from '../../modules/TrainingLocationModule'
import ContentWithOverlay from '../ContentWithOverlay'
import Footer from '../Footer'
import styles from './App.module.css'

function App() {

  return (
    <>
     <ContentWithOverlay/>
     <div className={styles.roof}></div>
     <ContactMeModule/>
     <CustomersModule/>
     <TrainingLocationModule/>
     <ContactMeModule/>
     <Footer/>
    </>
  )
}

export default App
