import AreaOfExpertiseModule from '../../modules/AreaOfExpertiseModule'
import ContactMeModule from '../../modules/ContactMeModule/ContactMeModule'
import CustomersModule from '../../modules/CustomersModule'
import EducationModule from '../../modules/EducationModule'
import TrainingLocationModule from '../../modules/TrainingLocationModule'
import ContentWithOverlay from '../ContentWithOverlay'
import Footer from '../Footer'
import styles from './App.module.css'

function App() {

  return (
    <>
     <ContentWithOverlay/>
     <AreaOfExpertiseModule/>
     <ContactMeModule/>
     <CustomersModule/>
     <EducationModule/>
     <TrainingLocationModule/>
     <ContactMeModule/>
     <Footer/>
    </>
  )
}

export default App
