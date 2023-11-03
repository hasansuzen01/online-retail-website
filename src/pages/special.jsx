import React from 'react'
import Foto from '../images/rickandmorty.jpg'
import { motion } from 'framer-motion';
import { FaMapLocationDot } from 'react-icons/fa6';
import { BsPhoneFill } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const container = {
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2
    }

  }
}
const item = {
  hidden: {
    opacity: 0,
    translateY: -40

  },
  visible: {
    opacity: 1,
    translateY: 0

  }

}

function Special() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className='flex justify-center items-center'>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className='flex justify-center items-center flex-wrap mt-10 w-9/12 h-auto '>
          <motion.div
            variants={item}
            className='border border-solid border-white border-4 rounded-xl w-3/12 h-44 m-6 flex justify-center items-center flex-col'>
            <img className='rounded-lg ürün' src={Foto} alt="" />
            <p className='mt-5 hover:scale-110 hover:duration-150 hover:text-amber-500'>Ürün Başlığı</p>
          </motion.div>
          <motion.div
            variants={item}
            className='border border-solid border-white border-4 rounded-xl w-3/12 h-44 m-6 flex justify-center items-center flex-col'>
            <img className='rounded-lg ürün' src={Foto} alt="" />
            <p className='mt-5 hover:scale-110 hover:duration-150 hover:text-amber-500'>Ürün Başlığı</p>
          </motion.div>
          <motion.div
            variants={item}
            className='border border-solid border-white border-4 rounded-xl w-3/12 h-44 m-6 flex justify-center items-center flex-col'>
            <img className='rounded-lg ürün' src={Foto} alt="" />
            <p className='mt-5 hover:scale-110 hover:duration-150 hover:text-amber-500'>Ürün Başlığı</p>
          </motion.div>
          <motion.div
            variants={item}
            className='border border-solid border-white border-4 rounded-xl w-3/12 h-44 m-6 flex justify-center items-center flex-col'>
            <img className='rounded-lg ürün' src={Foto} alt="" />
            <p className='mt-5 hover:scale-110 hover:duration-150 hover:text-amber-500'>Ürün Başlığı</p>
          </motion.div>
          <motion.div
            variants={item}
            className='border border-solid border-white border-4 rounded-xl w-3/12 h-44 m-6 flex justify-center items-center flex-col'>
            <img className='rounded-lg ürün' src={Foto} alt="" />
            <p className='mt-5 hover:scale-110 hover:duration-150 hover:text-amber-500'>Ürün Başlığı</p>
          </motion.div>
          <motion.div
            variants={item}
            className='border border-solid border-white border-4 rounded-xl w-3/12 h-44 m-6 flex justify-center items-center flex-col'>
            <img className='rounded-lg ürün' src={Foto} alt="" />
            <p className='mt-5 hover:scale-110 hover:duration-150 hover:text-amber-500'>Ürün Başlığı</p>
          </motion.div>
        </motion.div>
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

export default Special;
