import { Header } from './components/Header'
import './App.css'
import { MainSection } from './components/MainSection'
import { Footer } from './components/Footer'

function App() {

  return (
    <>


      <section className='w-[281px] relative h-[844px] bg-white rounded-tr-2xl rounded-br-2xl '>
        <Header></Header>
        <MainSection></MainSection>
        <Footer></Footer>



      </section>
    </>
  )
}

export default App
