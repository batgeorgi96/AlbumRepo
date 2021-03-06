import { useParams,useNavigate,Link } from "react-router-dom";
import { useContext } from "react";
import {Button} from 'react-bootstrap'
import { motion } from 'framer-motion';

import {AuthContext} from '../../contexts/AuthContext.js';
import albumService from '../../services/albumService.js';
import useAlbumState from "../../hooks/useAlbumState.js";
import DeletionDialog from '../Common/DeletionDialog';
import {pageTransition} from '../../constants'
import styles from './Details.module.css';


export default function Details(){
    
    let navigate = useNavigate();
    
    const {user} = useContext(AuthContext);
    const {albumId} = useParams();
    const [album] = useAlbumState(albumId);
    
    function onDeleteHandler(e){
        
        e.preventDefault();

        albumService.deletePost(albumId,user.accessToken)
        .then(() =>{

            navigate('/catalog');

        })

    }


    function likeButtonClick(e){

        let likedUser = user._id
        
        albumService.like(album._id,{likedUser})
        .then((res) =>{
            
            return;
            
        })
        .catch(err =>{
            
            console.log(err);
            
        })
        
    }
    
    function dislikeBUttonClick(e){
        
        let dislikedUser = user._id

        albumService.dislike(album._id,{dislikedUser}, user.accessToken)
        .then(res =>{

            return;

        })
        .catch(err =>{

            console.log(err);

        })

    }

    return(

        <motion.div initial="out" animate="in" exit="out" variants={pageTransition} >
            <DeletionDialog className="deleteModal" onDelete={onDeleteHandler} />
            <section id="details-page" className={styles.detailsPage}>
                <div className={styles.detailsContainer} >
                    <p className={styles.image}><img src={album.picture} alt="broken" /></p>
                    <div className={styles.actions}>

                        {user._id && (user._id === album._ownerId
                        
                            ?(
                                <>
                                    <Button className={styles.edit} as={Link} to={`/edit/${albumId}`} variant="success">Edit</Button>
                                    <Button className={styles.delete}  data-bs-toggle="modal" data-bs-target="#exampleModal" variant="danger">Delete</Button>
                                </>

                            )
                            :(
                                <>
                                    <Button active={album.likes?.includes(user._id)} className={styles.like} onClick={likeButtonClick} variant="primary">Like</Button>
                                    <Button active={album.dislikes?.includes(user._id)} className={styles.dislike} onClick={dislikeBUttonClick} variant="danger">Dislike</Button>
                                </>
                            )

                        )}

                        
                    </div>
                    <div className={styles.basicInfo}>

                        <h3 className={styles.name}>Name: {album.name}</h3>
                        <h4 className={styles.artist}>Artist: {album.artist}</h4>
                        <p className={styles.year}>Year: {album.date}</p>
                        <p className={styles.tracks}>Number of tracks: {album.tracks}</p>
                        <p className={styles.genre}>Genre: {album.genre}</p>

                    </div>
                    <div className={styles.description}>
                        <h3>Description:</h3>
                        <p>{album.description}</p>
                    </div>
                    <div className={styles.tracklist}>
                        <h3>Tracklist:</h3>
                        <p>{album.tracklist}</p>
                    </div>
                    <div className={styles.personnel}>
                        <h3>Personnel:</h3>
                        <p>{album.personnel}</p>
                    </div>


                </div>
            </section>

        </motion.div>


    )

}