import React from 'react';
import { useNavigate } from 'react-router-dom';
import El from '../images/el.jpg';
import { FaMapLocationDot } from 'react-icons/fa6';
import { BsPhoneFill } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { motion } from 'framer-motion';


function Anasayfa() {
  const navigate = useNavigate();
  return (
    <motion.div
    initial={{opacity:0 , translateY:30}}
    animate={{opacity:1 , translateY:0}}
    >
      <div className='flex items-center justify-center'>
        <div className='incele'>
          <div className='inceleArkaPlan'></div>
          <div className='flex flex-col justify-center items-center relative top-40 bg-transparent'>
            <h2 className='bg-transparent inceleYazı '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, placeat earum. Perspiciatis, fugiat. Maxime voluptate velit perferendis quas tempore sequi beatae atque, debitis sit cupiditate incidunt suscipit magni repellendus non.</h2>
            <button className='mt-5 btnİncele' onClick={() => navigate('/tabaklar')}> İncele</button>
          </div>
        </div>
      </div>
      <div className='flex mt-12 items-center justify-center ml-4'>
        <img src={El} alt="" className='elİmg' />
        <div className='flex flex-col justify-center items-center w-1/2 ml-8'>
          <h1 className='text-xl'>Hoşgeldiniz</h1>
          <p className='text-sm mt-5'>1996 yılında Çanakkale 18 Mart Üniversitesi El Sanatları Meslek Yüksek Okulu'ndan mezun olduktan sonra 7 yıl sınıf öğretmenliği yapan Esra Gümüç, 2008 yılında kendi özgün tasarımları ve eşsiz İznik çinilerinden oluşan koleksiyonunu, İznik Nilüfer Hatun Çini Çarşısı'nda, Esra El Sanatları isimli sanat atölyesinde, yurtiçi ve yurtdışından gelen konuklarının beğenisine sunmaktadır.</p>
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
  );
}

export default Anasayfa;
