import { useParams } from "react-router-dom"
import { useState,useEffect } from "react";
import { Link } from "react-router-dom"

import albumService from '../../services/albumService.js'

export default function Details(){

    const {albumId} = useParams();
    const [album,setAlbum] = useState({}); // default value has to be an empty object as to not read as 'undefined'

    useEffect(() => {

        albumService.getOne(albumId)
        .then(res =>{

            console.log(res)

            setAlbum(res)

        })

        

    }, [])


    return(

        <section id="details-page" className="details">
            <div className="album-information">
                <h3>Name: {album.name}</h3>
                <p className="type">Year: {album.year}</p>
                <p className="img"><img src={album.imageURL} /></p>
                <div className="actions">
                    <Link className="button" to="/edit">Edit</Link>
                    <Link className="button" to="/delete">Delete</Link>
                    
                </div>
            </div>
            <div className="album-description">
                <h3>Description:</h3>
                <p>{album.description}</p>
            </div>
        </section>

    )

}