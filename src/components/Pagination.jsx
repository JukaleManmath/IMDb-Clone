import React, {useState} from 'react'

function Pagination(props) {
  let {pageNum , onNext , onPrev} = props;

  return (
    <div className='flex justify-center my-4 cursor-pointer'>
        <div className=' p-2 shadow-2xl bg-indigo-200 shadow-zinc-600 rounded-l-xl' onClick={()=>{onPrev(pageNum -1)}}>Previous</div>
        <div className=' p-2 shadow-2xl bg-indigo-200 shadow-zinc-600 border-1 border-indigo-300'>{pageNum}</div>
        <div className='shadow-2xl bg-indigo-200 shadow-zinc-600 p-2 rounded-r-xl' onClick={() =>{onNext(pageNum+1)}}>Next</div>
    </div>
  )
}

export default Pagination