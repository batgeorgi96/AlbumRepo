
import styles from './Edit.module.css'
import albumService from '../../services/albumService.js'

export default function Edit(){

    function petEditSubmitHandler(e){

        e.preventDefault();


    }

    return(

        <div className="contact-page">
            <div className="contactbg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="contacttitlepage">
                                <h2>Edit the Album Details</h2>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container">
                <div className="row">
                    <div className=" col-md-6 offset-md-3">
                        <div className="address">

                            <form method="POST">
                                <div className="row" onSubmit={petEditSubmitHandler}>
                                    <h1>General Info:</h1>
                                    <div className="col-sm-12">
                                        <input className="contactus" placeholder="Name" type="text" name="name" />
                                    </div>
                                    <div className="col-sm-12">
                                        <input className="contactus" type="date" name="data" />
                                    </div>
                                    <div className="col-sm-12">
                                        <input className="contactus" type="number" placeholder="Number of tracks" name="number-of-songs" />
                                    </div>

                                    <h1>Tracklist:</h1>

                                    <div className={styles.tracklistContainer}>
                                        <textarea className={styles.tracklist} placeholder="Tracklist" type="text" name="tracklist" />
                                    </div>
                                    
                                    <h1>Additional Info:</h1>

                                    <div className="col-sm-12">
                                        <textarea className={styles.description} placeholder="Description" type="text" name="description" />
                                    </div>
                                    <div className="col-sm-12">
                                        <input className="contactus" placeholder="Composer/Artist" type="text" name="composer-artist" />
                                    </div>
                                    <div className="col-sm-12">
                                        <input className="contactus" placeholder="Album Art" type="text" name="imageURL" />
                                    </div>
                                    <div className="col-sm-12">
                                        <button className="send">Confirm</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )

}