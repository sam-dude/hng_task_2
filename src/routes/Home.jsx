import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  const token = import.meta.env.VITE_API_KEY
  const [movies, setMovies] = useState([])

  const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
  const config = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  }

  useEffect(() => {
    console.log(token)
    fetch(url, config)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data.results);
      setMovies(data.results)
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
  }, [])

  return (
    <main>
        {/* hero */}
        <section className='min-h-screen px-[8%] flex items-center' id="hero">
            <div className='md:w-[30%]  w-full'>
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
        <section className='min-h-screen px-[8%] '>
          <div className='flex justify-between w-full items-end my-4'>
            <h3 className='font-semibold text-3xl md:text-4xl'>Featured Movies</h3>
            <div className='text-red-500'>See more </div>
          </div>

          {/* List of movies */}
          <div className='grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-4'>

            {
              movies.slice(0, 10).map((movie, i) => (
                <Link to={`/movies/${movie.id}`} className='' key={i} data-testid='movie-card'>
                  <img data-testid="movie-poster" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt='movie-poster' className=' w-full'/>
                  <div>USA <span data-testid="movie-release-date">{movie.release_date}</span></div>
                  <div className='font-bold text-lg' data-testid='movie-title'>{movie.title}</div>
                  <div>Action, Horror, Adventure</div>
                </Link>
              ))
            }
            
          </div>
        </section>
    </main>
  )
}
