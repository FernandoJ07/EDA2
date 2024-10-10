import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";

const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=70pCqCArYtcSFjW5S8tItrmgcCTVTWbI&q=${category}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images.original.url
        }
    });

    return gifs

};

export const GifGrid = ({category, key}) => {
    const [images , setImages] = useState([]);

    console.log(images);
    
    const getImages = async() => {
        const gifs = await getGifs(category);
        setImages(gifs);
    }

    useEffect(() => {
        getImages();
    }, [category]);


    return (
        <>
        <h1>{category}</h1>
        <div className="gridGifs">
            {
                images.map( (image, key) => (
                    <GifItem key={key} {...image}/>
                ))
            }
        </div>
        </>
    )
}