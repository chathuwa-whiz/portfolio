import React from 'react'

export default function Button({ name, isBeam, containerClass }) {
  return (
    <div>
      <button className={`${containerClass} btn`}>
         {isBeam && (
            <span className='relative flex h-3 w-3'>
                <span className='btn-ping' />
                <span className='btn-ping_dot' />
            </span>
         )}
        {name}
      </button>
    </div>
  )
}
