import React from 'react';
import search from '../src/assets/search.png'


function App(){
  return(
    <div>
      <header className='flex justify-between border ' >
        <a href="" className='flex m-2 left-2 top-1 relative '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 -rotate-90">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"></path></svg>
          <span className='items-center text-lg bottom-2 relative flex'>Airbnb</span>
        </a>

        <div className='flex border gap-2 m-2 px-3 rounded-full text-md p-1 py-2  shadow drop-shadow-lg'>
          <div>Any where</div>
          <div className='border grey border-x-1'></div>
          <div >Anyweek</div>
          <div className='border grey border-x-1 '></div>
          <div>Add guests</div>
          <img src={search} alt="" className='size-8'/>
        </div>

        <div className=''>
            
        </div>
      </header>
    </div>
  )
}

export default App