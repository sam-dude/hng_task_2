import React from 'react'

export default function Home() {
  return (
    <main>
        {/* hero */}
        <section className='min-h-screen px-[8%] flex items-center'>
            <div className='md:w-[30%]  w-full'>
            <h1 className='text-5xl font-bold'>John Wick 3 : Parabellum</h1>
            <p className='my-3'>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>

            <button className='bg-red-500 py-2 px-4 rounded-lg capitalize font-semibold text-white'> Watch Trailer</button>
            </div>
        </section>

        {/* featured section */}
        <section className='min-h-screen px-[8%] '>
          <div className='flex justify-between w-full items-end'>
            <h3 className='font-semibold text-3xl my-4 md:text-4xl'>Featured Movies</h3>
            <div className='text-red-500'>See more</div>
          </div>

          {/* List of movies */}
          <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4'>
            <div className=''>
              <img src='' alt='movie-poster' className=' w-full'/>
              <div>USA 2016 - current</div>
              <div>Stranger Things</div>
              <div>Action, Horror, Adventure</div>
            </div>
            <div>me</div>
            <div>me</div>
            <div>me</div>
            <div>me</div>
            <div>me</div>
          </div>
        </section>
    </main>
  )
}
