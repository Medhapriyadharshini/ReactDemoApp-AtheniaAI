import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat deserunt dolores nulla dolorum cum quia totam sequi ipsum quaerat ipsa, autem illo saepe corrupti ea reprehenderit asperiores perferendis possimus dicta?</p>
      <Link to={'/about'}>
      <button className='btn btn-primary'>About</button>
      </Link>    
    </div>
  )
}

export default Home
