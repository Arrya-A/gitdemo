
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Arrya from './pages/Arrya'
import Nissy from './pages/Nissy'
import Akhil from './pages/Akhil'



function App() {

  return (
    <>
    <Header/>
      <Routes>
       <Route path='/' element={<Arrya/>} />
       <Route path='/nissy' element={<Nissy/>} />
       <Route Path='/' elements={<Akhil/>} />
       {/*<Route path='' element={} /> */}
       {/* <Route path='' element={} /> */}
       {/* <Route path='' element={} /> */}
      </Routes>
      <Footer/>
    </>

  )
}

export default App
