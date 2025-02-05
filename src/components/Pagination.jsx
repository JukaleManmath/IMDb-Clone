import React, {useState} from 'react'

function Pagination(props) {
  let {pageNum , onNext , onPrev} = props;

  return (
    <div className='flex justify-center my-4 cursor-pointer'>
        <div className='border-2 p-2 border-blue-400 border-r-0 rounded-l-xl' onClick={()=>{onPrev(pageNum -1)}}>Previous</div>
        <div className='border-2 p-2 border-blue-400 border-r-0'>{pageNum}</div>
        <div className='border-2 p-2 border-blue-400 rounded-r-xl' onClick={() =>{onNext(pageNum+1)}}>Next</div>
    </div>
  )
}

export default Pagination