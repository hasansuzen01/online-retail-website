import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Anasayfa from './pages/Anasayfa';
import Hakkımızda from './pages/Hakkımızda';
import Special from './pages/special';
import Tabaklar from './pages/Tabaklar';
import Logo from './images/ES.png'
import {motion} from 'framer-motion';
import Wrongpath from './pages/wrongpath';
import Uretim from './pages/Uretim';

function App() {


  return (
    <motion.div
    initial={{opacity:0 , translateY:30}}
    animate={{opacity:1 , translateY:0}}
    
    >
      <div>
        <div className='w-full flex items-center justify-center'>
          <img className='w-56 ' src={Logo} alt="" />
        </div>
        <div>
          <nav className='flex items-center justify-center responsiveNav'>
            <Link className='mr-12 linkHover' to="/">Anasayfa</Link>
            <Link className='mr-12 linkHover' to="/tabaklar">Tabaklar</Link>
            <Link className='mr-12 linkHover' to="/özelseriler">Özel Seriler</Link>
            <Link className='mr-12 linkHover' to="/üretimaşaması">Üretim Aşamaları</Link>
            <Link className='mr-12 linkHover' to="/hakkımızda">Hakkımızda</Link>
            <a href='https://api.whatsapp.com/send/?phone=905320000000&text&type=phone_number&app_absent=0' className='linkHover' >İletişim</a>
          </nav>
        </div>
        

      </div>
      <Routes>
        <Route path="/" element={<Anasayfa />} />
        <Route path="/hakkımızda" element={<Hakkımızda />} />
        <Route path="/özelseriler" element={<Special/>} />
        <Route path="/tabaklar" element={<Tabaklar />} />
        <Route path="/üretimaşaması" element={<Uretim/>} />
        <Route path="*" element={<Wrongpath/>} />

      </Routes>
    </motion.div>


  )
}

export default App
