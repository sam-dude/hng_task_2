import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export default function MovieDetail() {
    const {id} = useParams()
    const res = useLoaderData()
    console.log(res)
  return (
    <div>
        MovieDetail
        <p>{id}</p>
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
