import React from 'react'
import check from '../assets/check.png'

function Finish() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <p className='text-2xl text-center font-medium mb-8'>Compra finalizada com sucesso!</p>
        <img className='w-24 h-24 mb-10' src={check} alt="" />
    </div>
  )
}

export default Finish