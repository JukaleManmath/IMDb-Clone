import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { Audio } from 'react-loader-spinner';

function Banner() {

let [bannerMovie , setBannerMovie] = useState("");
    
  useEffect( function(){
    (
     function(){
            axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=b54b3f94e334944540f50dba7f38d9f5")
            .then((res) =>{
                // console.table(res.data.results)
                setBannerMovie(res.data.results[0]);
            })
        }
    )()
  },[])
  return (
    <>
        {
            bannerMovie === ""? <div className='flex justify-center'>
            <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          /> </div>: 
            <div className='h-[40vh] md:h-[60vh] bg-center bg-cover flex items-end shadow-xl shadow-gray-500' style={{backgroundImage: `url(https://media.themoviedb.org/t/p/original/${bannerMovie.backdrop_path})`}}>
                
            <div className='text-xl md:text-3xl text-white bg-gray-900 p-4 opacity-60 text-center w-full font-bold'>{bannerMovie.title}</div>
            </div>
        }
        
    </>
  )
}

export default Banner