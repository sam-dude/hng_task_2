import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export default function MovieDetail() {
    
    const res = useLoaderData()
    console.log(res)
  return (
    <div className='px-[4%]'>
        <div>
            <img src={`https://image.tmdb.org/t/p/original${res.backdrop_path}`} alt="" className='rounded-xl max-h-[300px] w-full object-cover'/>
            <div className='flex flex-row gap-2 my-3'>
                <div>{res.title}</div>
                <div>{res.release_date}</div>
            </div>
        </div>
        <p>{res.overview}</p>
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
