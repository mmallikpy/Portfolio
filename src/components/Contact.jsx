import React from 'react'
import { motion } from 'framer-motion'
import { FaDiscord, FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa'

export const Contact = () => {
  return (
    <motion.div
                    initial = {{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration:1, ease:'easeOut'}}
                    viewport={{once:false, amount:0.2}}        
                    className='py-20 bg-dark-100'   
                    id='contact'       
                  
                >
                    <div className='container mx-auto px-6'>
                        <h2 className='text-3xl font-bold text-center mb-4'> Get In <span className='text-purple'>Touch</span></h2>
                        <p className='text-center text-gray-400 max-w-2xl mx-auto mb-16'>Have a project in mind or want to collaborate? Let's talk!</p>

                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
                            {/* Contact Form */}
                            <div>
                                <form className='space-y-6'>
                                    <div>
                                        <label htmlFor="name" className='block text-gray-300 mb-2'>Your Name</label>
                                        <input type="text" className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'/>
                                    </div>

                                    <div>
                                        <label htmlFor="name" className='block text-gray-300 mb-2'>Your Email</label>
                                        <input type="email" className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'/>
                                    </div>

                                    <div>
                                        <label htmlFor="name" className='block text-gray-300 mb-2'>Your Message</label>
                                        <textarea className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'/>
                                    </div>

                                    <button type='submit' className='w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer'>Send

                                    </button>
                                </form>
                            </div>
                            
                            {/* Contact Information */}
                            <div className='space-y-8'>
                                <div className='flex items-start'>
                                    <div className='text-purple text-2xl mr-4'>
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-semibold'>Location</h3>
                                        <p className='text-gray-400'>Sobahanbug officers quarter, Dhaka</p>
                                    </div>
                                </div>

                                <div className='flex items-start'>
                                    <div className='text-purple text-2xl mr-4'>
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-semibold'>Location</h3>
                                        <p className='text-gray-400'>mithun@rawscripter.com</p>
                                    </div>
                                </div>

                                <div className='flex items-start'>
                                    <div className='text-purple text-2xl mr-4'>
                                        <FaPhone />
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-semibold'>Phone</h3>
                                        <p className='text-gray-400'>+880 1745152767</p>
                                    </div>
                                </div>

                                <div className='pt-4'>
                                    <h3 className='text-lg font-semibold mb-4'>Fallowme</h3>
                                    <div className='flex space-x-4'>
                                        <a href="https://github.com/mmallikpy" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center  hover:bg-purple hover:text-white transition duration-300'>
                                            <FaGithub/>
                                        </a>   

                                        <a href="https://www.linkedin.com/in/mithun-mallik-48a123a4/" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center  hover:bg-purple hover:text-white transition duration-300'>
                                            <FaLinkedin/>
                                        </a>

                                        <a href="#" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center  hover:bg-purple hover:text-white transition duration-300'>
                                            <FaTwitter/>
                                        </a>

                                        <a href="#" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center  hover:bg-purple hover:text-white transition duration-300'>
                                            <FaDiscord/>
                                        </a>

                                    </div>

                                    
                                </div>

                            </div>
                        </div>
                    </div>
    </motion.div>
  )
}
