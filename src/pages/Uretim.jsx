import React from 'react'
import Altyapi from '../images/Uretim/altyapi.jpg'
import Astar from '../images/Uretim/astar.jpg';
import Bezeme from '../images/Uretim/bezeme.jpg'
import İgneleme from '../images/Uretim/igneleme.jpg'
import Komurleme from '../images/Uretim/komurleme.jpg'
import Sirlama from '../images/Uretim/sirlama.jpg'
import Zimpara from '../images/Uretim/zimpara.jpg'
import { motion } from 'framer-motion';
import { FaMapLocationDot } from 'react-icons/fa6';
import { BsPhoneFill } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

function Uretim() {
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
      translateX: 50

    },
    visible: {
      opacity: 1,
      translateX: 0

    }

  }

  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className='flex justify-center items-center flex-col mt-9'>
        <div
          className='flex space-x-64'>
          <motion.div
            variants={item}
            className='bg-white w-80 h-px mt-6'></motion.div>
          <motion.div
            variants={item}
            className='bg-white w-80 h-px mt-6'></motion.div>
        </div>
        <motion.div
          variants={item}
        >
          <p>Çini Üretim Aşamaları</p>
        </motion.div>
        <div
          className=' flex justify-center items-center'>
          <div
            className='w-9/12 h-auto'>
            <motion.div
              variants={item}
              className='flex justify-center items-center mt-10'>
              <img className='w-48' src={Altyapi} alt="" />
              <div className='ml-5'>
                <p>1. ALT YAPI (MASSE)</p>
                <br />
                <p className='text-xs w-full'>İznik Çinilerinin ana maddesi quartz taşıdır. İçinde %80-85 oranında quartz tozunun bağlanması ve şekillenebilmesini kolaylaştırabilmek için içine plastik özellik gösteren kil ile kuart parçalarını pişirirken yumuşatıp birbirine bağlayacak (çamlaştıracak) ergitici sırça ilave edilmiştir. Ahşap kalıplara el ile şekillendirilen çini plakalar 20-25 gün doğal kurutmadan sonra ölçülerine getirilip rötuşlanır ve astarlanır.</p>
              </div>
            </motion.div>
          </div>
        </div>
        <div
          className=' flex justify-center items-center'>
          <div className='w-9/12 h-auto'>
            <motion.div
              variants={item}
              className='flex justify-center items-center mt-10'>
              <div className='mr-5'>
                <p>Zımparalama</p>
                <br />
                <p className='text-xs w-full'>Kuruyan çini plakalarına ölçülendirme için zımparalama işlemi uygulanır. Kalınlıkları ve ölçülendirmeleri tamamlanır.</p>
              </div>
              <img className='w-48' src={Zimpara} alt="" />
            </motion.div>
          </div>
        </div>
        <div className=' flex justify-center items-center'>
          <div className='w-9/12 h-auto'>
            <motion.div
              variants={item}
              className='flex justify-center items-center mt-10'>
              <img className='w-48' src={Astar} alt="" />
              <div className='ml-5'>
                <p>2.ASTAR (ANGOP)</p>
                <br />
                <p className='text-xs w-full'>Üzerine kaplandıkları çamurum birleşimine yakın ve daha ince taneli beyaz ve pişen bir karışımdan ibarettir. Akışkan kıvamında olan astar kuru plakanın üzerine dökülerek kaplanmaktadır. Yaklaşık 7 gün kurumada bırakılan plaka, fırınlarda uzmanca pişirilir.</p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className=' flex justify-center items-center'>
          <div className='w-9/12 h-auto'>
            <motion.div
              variants={item}
              className='flex justify-center items-center mt-10'>
              <div className='mr-5'>
                <p>DESENİN İĞNELENMESİ</p>
                <br />
                <p className='text-xs w-full'>Eskiz kağıdına tasarımı yapılmış desen tek tek iğnelenerek aktarılır Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, alias!</p>
              </div>
              <img className='w-48' src={İgneleme} alt="" />
            </motion.div>
          </div>

        </div>
        <div className=' flex justify-center items-center'>
          <div className='w-9/12 h-auto'>
            <motion.div
              variants={item}
              className='flex justify-center items-center mt-10'>
              <img className='w-48' src={Komurleme} alt="" />
              <div className='ml-5'>
                <p>KÖMÜRLEME</p>
                <br />
                <p className='text-xs w-full'>Eskiz kağıdına iğnelenen desen, pişirimi yapılmış plakaların üzerine konarak kömür tozu ile karolar üzerine aktarılır.</p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className=' flex justify-center items-center'>
          <div className='w-9/12 h-auto'>
            <motion.div
              variants={item}
              className='flex justify-center items-center mt-10'>
              <div className='mr-5'>
                <p>3.BEZEME (DESEN VE BOYAMA)</p>
                <br />
                <p className='text-xs w-full'>Önceden hazırlanan desenler şablon haline getirilip, kömür tozu ile plaka üzerine aktarıldıktan sonra astar üzerinde sürülebilen ve sır altında renk meydana getiren metal oksit ve bunların karışımı ile oluşan pigmentlerle desenler çizilir ve boyanır. Çinilerde kullanılan boyaların bileşimleri yüzyıllar boyu canlılığını korumak üzere orjinaline en yakın biçimde formule edilerek yarı kıymetli taşların renklerini yansıtmaktadır.</p>
              </div>
              <img className='w-48' src={Bezeme} alt="" />
            </motion.div>
          </div>
        </div>
        <div className=' flex justify-center items-center mb-10'>
          <div className='w-9/12 h-auto'>
            <motion.div
              variants={item}
              className='flex justify-center items-center mt-10'>
              <img className='w-48' src={Sirlama} alt="" />
              <div className='ml-5'>
                <p>4.SIRLAMA VE FIRINLAMA</p>
                <br />
                <p className='text-xs w-full'>Boyanması bitmiş plakaların üzerleri sır denilen özel bir karışımla kaplanır. Son aşama olarak ürün ikinci kez fırınlanır.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
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
    </div>
  )
}

export default Uretim;