import React from 'react'


const Cards = ({ movies, handleEdit }) => {

    const getPosterURL = (posterPath) => {
        return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterPath}`
      }

  return (
    <div className='mt-5' >
   
    <div className="p-4 bg-white w-[330px] h-[580px] rounded">
    <img
        className="rounded w-[250px] ml-[24px]"
        src={getPosterURL(movies.poster_path)}
        alt={movies.adult}
    />
    <div className='flex flex-col items-center'>
        <h4 className="text-xl font-bold tracking-tight text-red-500 mb-1 mt-2">
        {movies.original_title}
        </h4>
        <p className="text-sm  text-red-500  mb-1">
        Released: {movies.release_date}
        </p>
        <p className="text-sm  text-red-500 mb-1">
        Rating: {movies.vote_average}
        </p>
        <p className="text-red-500 text-sm mb-1">
        Language: {movies.original_language.toUpperCase()}
        </p>
        <button className='text-white ml-[-2px] bg-red-500 px-2 py-1 rounded cursor-pointer mt-3' onClick={() => handleEdit(movies.id)}>
            Edit
        </button>
        </div>
    </div>
    </div>
  )
}

export default Cards



   // <div className='text-white grid grid-cols-3 gap-2'>
    //      <div>{movies.original_title}</div>
    //         <div>{movies.release_date}</div>
    //         <div>{movies.vote_average}</div>
    //         <div>{movies.original_language.toUpperCase()}</div>
    //         <img src={getPosterURL(movies.poster_path)} alt={movies.adult} />
    //         <button className='text-white  bg-red-500 px-6 py-2 rounded cursor-pointer' onClick={() => handleEdit(movies.id) } > Edit </button>
            
    // </div>