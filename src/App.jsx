import Autumn from "./components/Autumn"
import BigBend from "./components/BigBend"
import Closing from "./components/Closing"
import Cont1 from "./components/Cont1"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Mountain from "./components/Mountain"
import NavBar from "./components/NavBar"
import './app.css'

function App() {


  return (

   <div className="app">
      <NavBar/>
     <Hero/>
     <Cont1/>
     <BigBend/>
     <Autumn/>
     <Mountain/>
     <Closing/>
     <Footer/>
   </div>

  )
}

export default App
