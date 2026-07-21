import { Outlet } from 'react-router-dom'
import './App.css'
import MainNavbar from './assets/common/MainNavbar'
import Footer from './assets/home/footer'


const App = () => {

  return (
    <>
      <MainNavbar/>
      <main className='animate-in fade-in duration-500'>
      <Outlet/>
      </main>
      <Footer/>

    </>
  )
}

export default App
