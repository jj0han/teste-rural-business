import React from 'react'

function PlanCardComponent({ id, setSelectedPlan, setPage, title, monthPrice, semestralPrice, anualPrice, color = "#9ca3af" }) {
    const handleClick = () => {
        if (setPage && setSelectedPlan) {
            setPage((prevPage) => prevPage + 1)
            setSelectedPlan(id)
        }
    }

    return (
        <div id={id} onClick={handleClick} className='flex flex-col items-center mb-4 w-60 cursor-pointer shadow-md rounded-lg transition-all duration-300 hover:shadow-xl'>
            <div className='w-full h-4 rounded-t-lg' style={{backgroundColor: color}}/>
            <div>
                <p className='text-xl font-medium text-gray-900 text-center my-2'>{title}</p>
                <div className='flex justify-center gap-1'>
                    <p className='text-4xl font-bold text-gray-800'>R${monthPrice}</p>
                    <p className='text-lg font-medium text-gray-400 self-center'>/ Mensal</p>
                </div>
            </div>
            <div className=' my-4 h-1 w-1/2' style={{backgroundColor: color}}/>
            <div className='flex mb-2 gap-1'>
                <p className='text-lg font-semibold text-gray-800'>R${semestralPrice}</p>
                <p className='text-sm font-medium text-gray-400 self-center'>/ Semestral</p>
            </div>
            <div className='flex mb-4 gap-1'>
                <p className='text-lg font-semibold text-gray-800'>R${anualPrice}</p>
                <p className='text-sm font-medium text-gray-400 self-center'>/ Anual</p>
            </div>
        </div>
    )
}

export default PlanCardComponent