import React from 'react'
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';
import Rick from '../images/rickandmorty.jpg'
import { FaMapLocationDot } from 'react-icons/fa6';
import { BsPhoneFill } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';


function Hakkımızda() {
  return (
    <motion.div
    initial={{opacity:0 , translateX:-100}}
    animate={{opacity:1 , translateX:0}}
    >
      <div className='flex justify-center items-center mt-10'>
        <ReactPlayer
          className='videoPlayer'
          url="video.mp4"
          controls={true}
          width="60%"
          height="60%"
        />
      </div>
      <div className='hakkimizdaYazi'>
        <div className='flex justify-center items-center m-10'>
          <img className='w-2/5 rounded-lg' src={Rick} />
          <p className='ml-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In totam molestias inventore nulla dolorem vel doloribus, expedita eaque exercitationem veritatis non aspernatur incidunt temporibus repellendus numquam vero, reiciendis cupiditate sequi, sapiente fugit nemo excepturi esse provident pariatur. Vitae, voluptatem itaque.</p>
        </div>
      </div>
      <div className='flex space-x-64'>
        <div className='bg-white w-96 h-px mt-6'></div>
        <div className='bg-white w-96 h-px mt-6'></div>
      </div>
      <footer className=''>
        <div className=' flex justify-center items-center'>
          <h1 className='  mt-2 text-2xl'>Esra El Sanatları</h1>
        </div>
        <div className='flex p-5 w-full'>
          <div>
            <div className=' flex mt-5 ml-5 mb-7'>
              <FaMapLocationDot className='w-6' />
              <p className='  ml-2 text-sm w-full' > Yeni Mahalle Nilüfer Hatun Çini Çarşısı No:13 2/E İznik / Bursa</p>
            </div>
            <div className=' flex mt-5 ml-5'>
              <BsPhoneFill className='mt-px' />
              <p className='  ml-2'> 0532 000 00 00</p>
            </div>
          </div>
          <div className='flex items-end justify-end w-full'>
          <a className='icon mr-6' href="https://www.instagram.com"><BsInstagram /></a>
            <a className='icon mr-6' href="https://api.whatsapp.com/send/?phone=905320000000&text&type=phone_number&app_absent=0"><BsWhatsapp /></a>
            <a className='icon mr-6' href=""><FaFacebookF /></a>
          </div>
        </div>
      </footer>
    </motion.div>
  )
}

export default Hakkımızda;