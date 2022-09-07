import React from 'react'
import {skillsData} from '../../data/skilldata/SkillData'
import { skillsImage } from './SkillsImage'

const Skill = () => {

  const slideLeft = () =>{
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideRight = () =>{
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500
  }
        



  return (
    
        <div id='skill' className=' w-full h-auto bg-transparent pb-4'>
          <br /><br /><br /><br />
            <h1 className=' text-5xl text-orange-600 flex items-center justify-center font-bold py-2 '>Skills</h1>
            <div  className=' relative flex items-center'>
                <svg onClick={slideLeft} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-1 opacity-50 cursor-pointer hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                <div id="slider" className=' text-center w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide space-x-6 p-10'>
                    {skillsData.map((skill,id)=>(
                            // <img className=' w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 border-2 rounded-xl' src={item.img} alt="/" />
                             
                            
                            <div className="shadow-xl shadow-orange-600 w-32 h-auto object-center inline-block p-8 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-xl " key={id}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <div>
                                <h3 className=' my-4 text-white font-semibold'>{skill}</h3>
                                </div>
                                
                            </div>
                        ))}
                </div>
                <svg onClick={slideRight} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-1 opacity-50 cursor-pointer hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                
            </div>
        </div>
    
  )
}

export default Skill