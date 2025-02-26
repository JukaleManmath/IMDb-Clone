import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'
import { use } from 'react';

let genreids = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation', 35: 'Comedy',
  80: 'Crime', 99: 'Documentary',
  18: 'Drama', 10751: 'Family',
  14: 'Fantasy', 36: 'History',
  27: 'Horror',
  10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Sci-Fi', 10770: 'TV', 53: 'Thriller',
  10752: 'War',
  37: 'Western'
}


function Favourite() {
  let [favourites , setFavourites] = useState([]);
  let [genres , setGenre] = useState([]);
  let [searchItem , setSearchItem] = useState("");
  let [currentGenre , setCurrentGenre] = useState("All Genres")
  let [currentRatingOrder , setCurrentRatingOrder] = useState(0)
  let [currentPopularity , setCurrentPopularity] = useState(0)
  let [noOfElements , setNoOfElements] = useState(4);
  let [currPage , setCurrPage] = useState(1);
  
 useEffect(()=>{
  let oldFavouriteMovies = localStorage.getItem("imdb");
      oldFavouriteMovies = JSON.parse(oldFavouriteMovies);
      setFavourites([...(oldFavouriteMovies|| [])]);
 },[])
  // delete movie
  const deleteMovie = (id) => {
   const restOfMovies =  favourites.filter((movie) =>{
      return movie.id !== id;
    })
    setFavourites(restOfMovies);
  }
 
  useEffect(() => {
      let temp = favourites.map((movie) => genreids[movie.genre_ids[0]]);
      temp = new Set(temp);
      setGenre(["All Genres", ...temp]);

  }, [favourites])
  
  const onCurGenre = (genre) =>{
    setCurrentGenre(genre);
    setCurrPage(1);
   }

    //search something
    let searchedMovies = searchItem === ""? favourites:favourites.filter((movie) =>{
                            let searchItemLowerCase = searchItem.toLowerCase();
                            let lowerCaseMovieName = movie.title.toLowerCase();
                            return lowerCaseMovieName.includes(searchItemLowerCase);
                          })
    
   //filtering
   let filteredMovies = currentGenre === "All Genres"? searchedMovies:searchedMovies.filter((searchedmovie)=>{
     return genreids[searchedmovie.genre_ids[0]] === currentGenre;
   })

  //sort
  if(currentRatingOrder !== 0){
    if(currentRatingOrder === 1){
      filteredMovies = filteredMovies.sort((movieA , movieB)=>{
         return movieA.vote_average - movieB.vote_average;
      })
    }else if(currentRatingOrder === -1){
      filteredMovies = filteredMovies.sort((movieA , movieB)=>{
        return movieB.vote_average - movieA.vote_average;
     })
    }
  }
  if(currentPopularity !== 0){
    if(currentPopularity === 1){
      filteredMovies = filteredMovies.sort((movieA , movieB)=>{
         return movieA.popularity - movieB.popularity;
      })
    }else if(currentPopularity === -1){
      filteredMovies = filteredMovies.sort((movieA , movieB)=>{
        return movieB.popularity - movieA.popularity;
     })
    }
  }
  
  //Pagination
  let startIndex = Number(noOfElements) * (Number(currPage)-1);
  let endingIndex =Number(noOfElements) + Number(startIndex);
  let maxPage = Math.ceil(filteredMovies.length / noOfElements);
  filteredMovies = filteredMovies.slice(startIndex,endingIndex);

   const onPrev = (pageNum)=>{
    if(pageNum > 0){
      setCurrPage(pageNum);
    }
   }
   
   const onNext = (pageNum) =>{
   if(pageNum <= maxPage){
    setCurrPage(pageNum)
   }
   }
  return (
    <>
    {/* Genres */}
      <div className='mt-6 flex flex-wrap justify-center space-x-2 '> 
        {genres.map((genre, idx) => {
          return(
            <button className={genre === currentGenre? `p-1 px-2 rounded-lg text-lg font-bold text-white bg-blue-400 transition delay-10 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105`:`p-1 px-2 bg-gray-400 rounded-lg text-lg font-bold text-white hover:bg-purple-400 transition delay-10 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105`} 
            key={idx} onClick={()=>{onCurGenre(genre)}}>{genre}</button>
          )
        })}
      </div>
      
      {/* Searching */}
      <div className='mt-4 flex justify-center space-x-2'>
        <input type='text' placeholder='search' className='border-2 rounded-lg py-1 px-2 border-gray-300 text-center' value={searchItem} onChange={(e) => {setSearchItem(e.target.value);
          setCurrPage(1);
        }}/> 
        <input type="number" className='border-2 rounded-lg text-center py-1 px-2 border-gray-300 ' value={noOfElements} onChange={(e)=>{setNoOfElements(e.target.value);
          setCurrPage(1);
        }}/> 
      </div>
        
        {/* Dashboard table */}
          <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
            <table className="w-full border-collapse bg-white text-left text-sm text-gray-500 ">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-4 font-medium text-gray-900">NAME</th>
                
                  <th scope="col" className="px-6 py-4 font-medium text-gray-900"> 
                    <div className='flex'>
                    <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png" className="mr-2 cursor-pointer" onClick={() =>{
                      setCurrentRatingOrder(1);
                      setCurrPage(1);

                    }}></img>    
                        <div>RATING</div> 
                    <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png" className="ml-2 mr-2 cursor-pointer" onClick={() =>{
                      setCurrentRatingOrder(-1);
                      setCurrPage(1);}}></img>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-4 font-medium text-gray-900"> 
                    <div className='flex'>
                    <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png" className="mr-2 cursor-pointer" onClick={() =>{
                      setCurrentPopularity(1);
                      setCurrPage(1);}}></img>    
                        <div>POPULARITY</div> 
                    <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png" className="ml-2 mr-2 cursor-pointer" onClick={() =>{
                      setCurrentPopularity(-1);
                      setCurrPage(1);}}></img>
                    </div>
                  </th>
                  
                  <th scope="col" className="px-6 py-4 font-medium text-gray-900">GENRE</th>
                  <th scope="col" className="px-6 py-4 font-medium text-gray-900">REMOVE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                {filteredMovies.map((movie) => {

                  return(
                    <tr className="hover:bg-gray-50" key={movie.id}>
                    <th className="flex items-center px-6 py-4 font-normal text-gray-900">
                        <img
                          className="h-[6rem] w-[10rem] object-fit "
                          src={`https://media.themoviedb.org/t/p/original/${movie.backdrop_path}`}
                          alt=""
                        />
                        <div className="font-medium text-gray-700  text-sm pl-2">{movie.title}</div>
                    </th>
                    <td className="px-6 py-4 pl-12">
                      {movie.vote_average.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 pl-16">{movie.popularity.toFixed(2)}</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <span
                          className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
                        >
                          {genreids[movie.genre_ids[0]]}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-xs font-semibold text-red-600 cursor-pointer" onClick={() => {
                      deleteMovie(movie.id);
                    }}>Delete</span>
                    </td>
                  </tr>
                  )
                })}
                
              </tbody>
            </table>
          </div>
      
        <Pagination pageNum={currPage} onNext={onNext} onPrev={onPrev}/>
    </>
  )
}


export default Favourite
