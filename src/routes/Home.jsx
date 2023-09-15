import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';
import tomato from '../assets/tomato.png';
import imdb from '../assets/imdb.png'

export const FavIcon  = () =>{
  const [isFav, setIsFav] = useState(false)
  return(
    <div className='absolute top-4 right-4 cursor-pointer' onClick={() => setIsFav(prev => !prev)}>
      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="currentColor" className={`w-9 h-9  z-10 bg-opacity-50 p-2 rounded-full ${isFav ? "text-red-600 bg-red-300" : "text-gray-200 bg-gray-50"}`}>
        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
      </svg>
    </div>
  )
}

export default function Home() {
  const token = import.meta.env.VITE_API_KEY
  const [movies, setMovies] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
  const config = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  }

  useEffect(() => {
    fetch(url, config)
    .then(response => {
      if (!response.ok) {
        setIsLoading(false)
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data.results);
      setIsLoading(false)
      setMovies(data.results)
    })
    .catch(error => {
      setIsLoading(false)
      console.error('Fetch error:', error);
    });
  }, [])

  return (
    <main>
      
        {/* hero */}
        <section className='min-h-screen flex items-center relative' id="hero">
            {/* Header */}
            <div className='flex flex-row w-full items-center md:flex-nowrap flex-wrap absolute top-0 justify-between py-2 px-[8%] '>
              <img src={logo} alt="logo" className='h-12'/>

              <form className='border border-white rounded-xl p-2 py-2 md:flex hidden items-center w-full max-w-[400px]'>
                <input type="text" className='border-none outline-none bg-transparent w-full text-white' placeholder='What do you want to watch?'/>
                <button className='h-4 w-4 text-white flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                </button>
              </form>

              <div>
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 p-2 bg-red-500 rounded-lg text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>
              </div>

              <div className=' flex-grow md:flex-grow-0 md:hidden flex'>
                {/* search bar */}
                <form className='border border-white rounded-xl p-2 py-2 md:hidden flex items-center w-full max-w-[400px]'>
                    <input type="text" className='border-none outline-none bg-transparent w-full text-white' placeholder='What do you want to watch?'/>
                    <button className='h-4 w-4 text-white flex items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    </button>
                </form>
              </div>
            </div>
            

            <div className='md:w-[50%] w-full px-[8%] '>
            <h1 className='text-5xl font-bold text-white'>John Wick 3 : Parabellum</h1>
            <p className='my-3 text-white'>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>

            <button className='bg-red-500 py-2 px-4 flex items-center gap-2 rounded-lg capitalize font-semibold text-white'> 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
              </svg>

              Watch Trailer
            </button>
            </div>
        </section>

        {/* featured section */}
        <section className='min-h-screen px-[4%] '>
          <div className='flex justify-between w-full items-end my-6'>
            <h3 className='font-semibold text-xl md:text-2xl'>Featured Movies</h3>
            <div className='text-red-500 flex flex-row gap-2 items-center'>See more 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            </div>
          </div>

          {/* List of movies */}
          <div className='grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-8'>

            { isLoading ? <div className='h-full w-full flex items-center justify-center'>Loading...</div> :
              movies && movies.slice(0, 10).map((movie, i) => {
               
              return(
                <div className="relative mb-4" data-testid='movie-card' key={i}>
                <Link to={`/movies/${movie.id}`}  >
                  <img data-testid="movie-poster" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt='movie-poster' className=' w-full h-[450px] md:h-[300px] object-cover'/>
                  <div className="text-sm">USA <span data-testid="movie-release-date">{movie.release_date}</span></div>
                  <div className='font-bold' data-testid='movie-title'>{movie.title}</div>
                  <div className='flex flex-row justify-between py-2'>
                    <div className='flex gap-2 items-center'><img src={imdb} alt="imbd" className='w-[25px]'/>{movie.vote_average}</div>
                    <div className='flex gap-2 items-center'><img src={tomato} alt="imbd" className='w-[15px] h-[15px]'/>{movie.popularity}</div>
                  </div>
                  <div className="text-sm">Action, Horror, Adventure</div>
                </Link>
                 <FavIcon />
                </div>
              )})
            }
            
          </div>
        </section>
    </main>
  )
}

export const Component = () => {
  return(
    <></>
  )
}