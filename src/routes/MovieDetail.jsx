import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export default function MovieDetail() {
    
    const res = useLoaderData()
    console.log(res)
  return (
    <div className='px-[4%] mt-2 mb-4'>
        <div>
            <img src={res.backdrop_path && `https://image.tmdb.org/t/p/original${res.backdrop_path}`} alt="" className='rounded-xl max-h-[400px] min-h-[400px] w-full object-cover'/>
            <div className='flex flex-row gap-2 my-3 items-center flex-wrap'>
                <div className='font-semibold' data-testid='movie-title'>{res.title}</div> 
                
                <div className='font-semibold ' data-testid='movie-release-date'>{res.release_date}</div>
                <div className='font-semibold mr-4' ><span data-testid='movie-title'>{res.runtime}</span>m</div> 
                {
                    res.genres.map(item => (
                        <div key={item.id} className='text-[12px] border border-red-500 text-red-500 py-1 px-2 font-bold rounded-xl'>{item.name}</div>
                    ))
                }
            </div>
        </div>
        <p data-testid="movie" className='my-2'>{res.overview}</p>
    </div>
  )
}

export async function MovieLoader ({ params }){
    const {id} = params
    const url = `https://api.themoviedb.org/3/movie/${id}`;
    const token = import.meta.env.VITE_API_KEY
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    };
    
    const res = await fetch(url, config)
    return res.json()
}
