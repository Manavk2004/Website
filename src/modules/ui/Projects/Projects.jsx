import React from 'react'
import ProjectCard from '../components/Card'

function Projects() {
  return (
    <div className='bg-[#1a1823]/97 mb-100 h-screen w-full grid grid-cols-13 grid-rows-14 '>
      <ProjectCard title="AI SaaS " description="AI Powered Customer Support Application For User's Banking Information" class="border-0! col-start-6 col-end-9 row-start-2 row-end-7" image="/nimbus.png"/>
      <ProjectCard title="MUSAI" description="AI Powered Music Recommendation App" class="border-0! col-start-2 col-end-5 row-start-2 row-end-7" image="/musai.png"/>
      <ProjectCard title="Nimbus KeyBoards" description="3D E-Commerce Website" class="border-0! col-start-10 col-end-13 row-start-2 row-end-7" image="/nimbus.png"/>
    </div>
  )
}

export default Projects
