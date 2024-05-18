import React from 'react'

export default function Rate({ rating, setRating }) {
  return (
   
       <div>
      {[1, 2, 3, 4, 5].map((star) => {
        return (  
          <span
            className='star'
            style={{
              cursor: 'pointer',
              color: rating >= star ? '#0d6efd' : 'gray',
              fontSize: `35px`,
            }}
            onClick={() => {
              setRating(star)
            }}
          >
            {' '}
            ★{' '}
          </span>
        )
      })}
    </div>
   
  )
}
