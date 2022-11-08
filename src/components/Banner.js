import React from 'react'

const Banner = ({movieData}) => {

    const randomMovie= movieData[Math.floor(Math.random() * movieData.length)];

  return (
    <div className='w-full h-[550px] text-white '>
    <div className='w-full h-full'>
        <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
       <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}`} alt="BannerImage" />
       <div className='absolute w-full top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-semibold'>{randomMovie?.title}</h1>
        <p className='text-gray-400 text-sm mt-2'>Released: {randomMovie?.release_date}</p>
        <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 mt-6'>{randomMovie?.overview}</p>
       </div>
    </div>
</div>
  )
}

export default Banner