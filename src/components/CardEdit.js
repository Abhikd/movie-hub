import React, { useState } from 'react'

const CardEdit = ({movies, handleDone, handleCancel}) => {

    const [title, setTitle] = useState(movies.original_title);
    const [date, setDate] = useState(movies.release_date);
    const [vote, setVote] = useState(movies.vote_average);
    const [language, setLanguage] = useState(movies.original_language.toUpperCase());

    const getPosterURL = (posterPath) => {
        return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterPath}`
      }

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        movies.original_title = e.target.value;
    }

     const handleDateChange = (e) => {
         setDate(e.target.value);
         movies.release_date = e.target.value;
     }

     const handleVoteChange = (e) => {
         setVote(e.target.value);
        movies.vote_average = e.target.value;

     }

     const handleLanguageChange = (e) => {
         setLanguage(e.target.value);
         movies.original_language = e.target.value;
     }

  return (
   <div>
     <div className='mt-5' >
   
   <div className="p-4 bg-white w-[330px] h-[580px] rounded">
   <img
       className="rounded w-[250px] ml-[24px]"
       src={getPosterURL(movies.poster_path)}
       alt={movies.adult}
   />
   <div className='flex flex-col items-center'>
       <div className="mb-1 mt-2">
       <input className='border-2 border-black rounded'  placeholder={title} onChange={handleTitleChange} />
       </div>
       <div className=" text-black mb-1">
       <input className='text-gray-400 ml-[-45px] border-2 border-black rounded' value={date} type="date"  onChange={handleDateChange} />
       </div>
       <div className="text-black mb-1">
       <input className='border-2 border-black rounded' placeholder={vote} type="number" onChange={handleVoteChange} />
       </div>
       <div className="text-black mb-1">
       <input className='border-2 border-black rounded' placeholder={language} onChange={handleLanguageChange} />
       </div>
       <div className='flex flex-row space-x-2'>
       <button className='text-white ml-[-2px] bg-red-500 px-2 py-1 rounded cursor-pointer mt-1' onClick={() => handleDone() } > Done </button>
       <button className='text-white ml-[-2px] bg-red-500 px-2 py-1 rounded cursor-pointer mt-1' onClick={() => handleCancel() } > Cancel </button>
       </div>
       </div>
   </div>
   </div>
   </div>
  )
}

export default CardEdit


 // <div className='text-black flex flex-row items-center justify-evenly'>
    //     <input  placeholder={title} onChange={handleTitleChange} />
    //      <input className='text-gray-400' value={date} type="date"  onChange={handleDateChange} />
    //     <input placeholder={vote} type="number" onChange={handleVoteChange} />
    //      <input placeholder={language} onChange={handleLanguageChange} /> 
    //      <img src={getPosterURL(movies.poster_path)} alt={movies.adult} />
    //      <button className='text-white  bg-red-500 px-6 py-2 rounded cursor-pointer' onClick={() => handleDone() } > Done </button>
    //      <button className='text-white  bg-red-500 px-6 py-2 rounded cursor-pointer' onClick={() => handleCancel() } > Cancel </button>
        
    // </div>