import React /*, { useEffect, useState }*/ from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGirdItem } from './GifGirdItem';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

    const {data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>
            {loading && <p className='animate__animated animate__flash'>Loading...</p>}
            <div className='card-grid'>
                {
                    images.map(img => (
                        <GifGirdItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
