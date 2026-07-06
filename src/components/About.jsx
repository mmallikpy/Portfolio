import React from 'react'
import {motion} from 'framer-motion'
import { assets, aboutInfo } from '../assets/assets'
import { div } from 'framer-motion/client'
const About = () => {
  return (
    <motion.div
        initial = {{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6, ease:'easeOut'}}
        viewport={{once:true}}
        id='about'
        className='py-20 bg-dark-200'
    >
        <div className='container mx-0 px-6'>
            {/* Heading */}
            <h2 className='text-3xl font-bold text-center mb-4'>
                About<span className='text-purple'>Me</span>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Get to know more about my background and passion</p>
                {/* Image + my journey */}
                <div className='flex flex-col md:flex-row items-center gap-12'>
                    {/* image */}
                    <div className='lg:w-1/2 md:w-1/2 rounded-2xl overflow-hidden'>
                    <motion.img 
                        initial = {{opacity:0, y:50}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:0.6, ease:'easeOut'}}
                        viewport={{once:false, amount:0.2}}        
                        className='w-full h-full object-cover'          
                        src={assets.profileImg} alt='ProfileImage'/>

                    </div>
                    <motion.div 
                        initial = {{opacity:0, y:50}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:0.6, ease:'easeOut'}}
                        viewport={{once:false, amount:0.2}}        
                        className='w-full h-full object-cover'          
                        className='md:w-1/2'
                    >
                        <div className='rounded-2xl p-8'>
                            <h3 className="text-3xl font-semibold mb-6">My Journey</h3>
                            <p className='text-gray-200 mb-6 text-lg text-justify '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore voluptates aperiam maxime quo dolore ab, aliquam unde praesentium repudiandae quia voluptas harum quaerat! Neque veniam modi harum eos accusamus. Soluta atque quod amet id nulla, itaque debitis provident repellendus quis, aperiam aliquid hic. </p>
                            <p className='text-gray-200 mb-6 text-lg text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, nostrum. Consequatur porro a vel dolore ratione soluta ullam at officiis praesentium, minima laboriosam omnis quisquam veniam sit officia dolorem placeat accusamus? Soluta, modi dignissimos quae natus voluptas id laboriosam quos illum nemo veniam delectus, nesciunt culpa, vitae suscipit repellat consectetur magnam reiciendis error nisi sed.</p>

                            {/* cards */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                {
                                    aboutInfo.map((data, index)=>(
                                        <div key={index} className='bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer'>
                                            <div className='text-purple mb-3'>
                                                <data.icon />
                                            </div>
                                            <h3 className='text-xl font-semibold mb-3 '>{data.title}</h3>
                                            <p className='text-sm text-gray-400 font-semibold'>{data.description}</p>
                                        </div>
                                    )
                                    )
                                }
                            </div>
                        </div>

                    </motion.div>

                </div>
            </h2>

        </div>

    </motion.div>
  )
}

export default About