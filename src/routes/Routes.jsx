import { HashRouter,Routes,Route } from 'react-router-dom'
import NotFound from '../pages/NotFound'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Service from '../pages/Service'

export default function MyRoutes() {
  return (
    <HashRouter>
      <Navbar/>
      <Routes>
        <Route path="*" element={<NotFound/>} />
        <Route index element={<Home />} />
        <Route path='servicios' element={<Service/>} />
        <Route path="contacto" element={<Contact/>} />
      </Routes>
    </HashRouter>
  )
}
