import React, { useState } from 'react'
import PlanCardComponent from './planCard/PlanCardComponent'

function PaymentMethod({ plans, selectedPlan }) {
  const [position, setPosition] = useState(0)

  const PlanCard = plans.map((plan) => {
    if (plan.id == selectedPlan) {
      return (
        <PlanCardComponent
          key={plan.id}
          id={plan.id}
          title={plan.title}
          monthPrice={plan.monthPrice}
          semestralPrice={plan.semestralPrice}
          anualPrice={plan.anualPrice}
          color={plan.color}
        />
      )
    }
  })

  return (
    <div className='flex flex-col justify-around sm:flex-row gap-x-5'>
      <div className='flex justify-center'>{PlanCard}</div>
      <div className='flex items-center justify-center'>
        <div className='flex flex-col'>
          <p className='text-2xl text-center font-medium'>Como você prefere pagar?</p>
          <ul className=''>
            <div className='flex justify-center'>
              <li>
                <button onClick={() => setPosition(0)} style={{ borderColor: position == 0 ? "#64b514" : "" }} className='font-medium text-lg border-b-4 px-7 py-2 mb-3'>Cartão</button>
              </li>
              <li>
                <button onClick={() => setPosition(1)} style={{ borderColor: position == 1 ? "#64b514" : "" }} className='font-medium text-lg border-b-4 px-7 py-2 mb-3'>Boleto</button>
              </li>
            </div>
          </ul>
          <p className='text-xl text-center font-medium mb-4'>Plano:</p>
          {
            position == 0 ?
              <select className='flex justify-center rounded-md bg-gray-100 border border-gray-300 px-4 py-2 outline-none cursor-pointer' name="" id="">
                <option selected value="">Mensal</option>
                <option value="">Semestral</option>
                <option value="">Anual</option>
              </select>
              :
              <select className='flex justify-center rounded-md bg-gray-100 border border-gray-300 px-4 py-2 outline-none cursor-pointer' name="" id="">
                <option selected value="">Semestral</option>
                <option value="">Anual</option>
              </select>
          }
        </div>
      </div>
    </div>
  )
}

export default PaymentMethod