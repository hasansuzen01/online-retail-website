import React from 'react';
import Wrongİcon from '../images/wrong.jpg';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Wrongpath() {
    const navigate = useNavigate(); // Doğru kullanım: useNavigate işlevini bir değişkene atamak

    return (
        <motion.div
            initial={{ opacity: 0, translateY: 40 }}
            animate={{ opacity: 1, translateY: 0 }}
        >
            <div className='flex flex-col justify-center items-center mt-10'>
                <div>
                    <img className='w-52 rounded-lg' src={Wrongİcon} alt="" />
                </div>
                <p className='mt-5'>Böyle bir sayfa bulunamadı!</p>
                <button onClick={() => navigate('/tabaklar')} className='mt-5 border border-solid border-white border-2 w-24 mb-10 rounded-lg hover:scale-110 hover:duration-150'>Geri Dön</button>
            </div>
        </motion.div>
    )
}

export default Wrongpath;
