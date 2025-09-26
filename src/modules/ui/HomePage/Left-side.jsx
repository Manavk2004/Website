import React from 'react'
import Button from 'react-bootstrap/Button'
import "./left-side.css"

function LeftSide() {
  return (
    <div className='text-white flex flex-col gap-10'>
      <h1 className='slide-in-left1'>Manav Kamdar</h1>
      <p className='text-white/70 slide-in-left2'>JavaScript FullStack Developer</p>
      <p className='text-white/70 slide-in-left3'>AI | Security | Efficiency</p>
      <Button className='bg-[#e0ddef]! text-black!'>
        Contact Me
      </Button>
    </div>
  )
}

export default LeftSide
