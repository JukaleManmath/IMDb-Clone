import React,{useEffect , useState} from 'react'
import axios from 'axios';
import { Audio } from 'react-loader-spinner';
import Pagination from './Pagination';


function Movies() {
    let [movies , setMovies] = useState([]);
    let [pageNum , setPageNum] = useState(1);
    let [hovered , setHovered] = useState("");
    let [favourites , setFavourites] = useState([]);

    //making API requests
    useEffect( function(){
        (
         function(){

                let oldFavouriteMovies = localStorage.getItem("imdb");
                oldFavouriteMovies = JSON.parse(oldFavouriteMovies);
                setFavourites([...oldFavouriteMovies]);


                axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=b54b3f94e334944540f50dba7f38d9f5&page="+pageNum)
                .then((res) =>{
                    // console.table(res.data.results)
                    setMovies(res.data.results);
                   
                })
            }
        )()
      },[pageNum])

    
      //Pagination handlers
    const onPrev = () => {
      if(pageNum > 1){
          setPageNum(pageNum - 1 );
      }
    }
  
    const onNext = () => {
      setPageNum(pageNum + 1);
    }

    //Emoji show and hide
    const showEmoji = (id) => {
           setHovered(id);
    }
    const hideEmoji= (id) => {
        setHovered("");
    }
   
    const addEmoji = (movie) => {
     const newFavourites = [...favourites ,movie];
     setFavourites([...newFavourites]);
     localStorage.setItem("imdb", JSON.stringify(newFavourites))
    }
    const removeEmoji = (movie) => {
      const filteredFavourites = favourites.filter((element) =>{
        return element.id !== movie.id;
      })
      setFavourites([...filteredFavourites]);
      localStorage.setItem("imdb", JSON.stringify(filteredFavourites));
    }

  return (
    <div className='mt-8'>
        <div className='mb-8 font-bold text-2xl text-center'>Trending Movies</div>
        <div className='flex flex-wrap justify-center'>
            {
                movies.length === 0? <div className='flex justify-center'>
                <Audio
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
              /> </div> :
                movies.map((movie)=>{
                 return  <div onMouseOver={
                       ()=>{
                        showEmoji(movie.id);
                       }
                 } 
                  onMouseLeave={
                    () =>{
                        hideEmoji(movie.id);
                    }
                  }
                 key={movie.id} className='bg-center bg-cover w-[160px] h-[30vh] md: h-[40vh] md:w-[180px] m-4 rounded-xl hover:scale-110 duration-300 flex items-end relative' style={{backgroundImage:`url(https://media.themoviedb.org/t/p/original/${movie.backdrop_path})`}}>
                    <div className='p-2 bg-gray-900 absolute top-2 right-2 rounded-xl' style={{display: hovered=== movie.id ? "block":"none"}}>
                      {favourites.find((m) => m.id == movie.id)? <div className='text-2xl cursor-pointer' onClick={() => {removeEmoji(movie)}}>❌</div>:<div className='text-2xl cursor-pointer' onClick={() => {addEmoji(movie)}}>❤️‍🔥</div>}
                      </div>
                 <div className='text-white bg-gray-900 py-3 opacity-70 text-center w-full font-bold rounded-b-xl'>{movie.title}</div>
             </div>
                })
            }
        </div>
        <Pagination pageNum={pageNum} onNext={onNext} onPrev={onPrev}/>
    </div>
  )
}


export default Movies 
