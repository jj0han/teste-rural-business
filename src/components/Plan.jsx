import React from 'react'
import PlanCardComponent from './planCard/PlanCardComponent'


function Plan({ setSelectedPlan, setPage, plans }) {
  return (
    <div className='flex flex-col items-center lg:justify-around lg:flex-row'>
      {
        plans.map((plan) => {
          return (
            <PlanCardComponent
              key={plan.id}
              id={plan.id}
              setSelectedPlan={setSelectedPlan}
              setPage={setPage}
              title={plan.title}
              monthPrice={plan.monthPrice}
              semestralPrice={plan.semestralPrice}
              anualPrice={plan.anualPrice}
              color={plan.color}
            />
          )
        })
      }
    </div>
  )
}

export default Plan