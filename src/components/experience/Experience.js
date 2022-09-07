import React from 'react'
import ThemeExp from '../assets/expOrange.svg'
import { ExperienceData } from '../../data/experience/ExperienceData'

const Experience = () => {
  return (
<div className="experince lg:pt-10 ">
                <div className="container max-w-5xl text-white mx-auto grid lg:grid-cols-2 sm:grid-cols-1 py-8 lg:py-20">
                    
                    <div className='flex items-center hidden lg:flex'>
                        <img src={ThemeExp} alt="ilustration-laslesvpn" className='lg:w-96 h-auto mr-28' />
                    </div>

                    <div id='experience' className="container px-16 lg:px-0">
                    <h2 className=' text-5xl lg:text-6xl text-center lg:text-left font-bold text-orange-600 py-10'>Experience</h2>
                        <div className="row grid grid-rows-3 ">
                            {ExperienceData.map((val, index)=>{
                                return(
                                    <div className="col-md-4 rounded-3xl border-orange-700 my-4 p-2 bg-transparent hover:bg-amber-800 shadow-md shadow-orange-600 ">
                                        <div className="card flex">
                                            
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                           
                                            

                                            <div className="card-body">
                                                <h5 className=' font-bold text-sm pb-2 text-orange-300'>{val.startYear} - {val.endYear}</h5>
                                                <h3 className=' font-bold text-lg'>{val.company}</h3>
                                                <h3 className=' font-bold text-lg text-gray-300'>{val.jobtitle}</h3>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            
                        </div>
                    </div>
                    
                    
                </div>
            </div>
  )
}

export default Experience