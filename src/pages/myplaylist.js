import React from 'react'
import Container from '../components/container'
import Thumbnail from '../components/thumbnail'
import PlayButton from '../components/playbutton'
function MyPlaylist(){
    return(
        <Container>
            <div className="my-playlist">
                <div className="my-playlist-container">
                    <div className="my-playlist-info">
                        <Thumbnail />
                        <h1>My Playlist</h1>
                        <span>User: <strong>NickEagle2400</strong></span>
                        <span>Brani: <strong>56</strong></span>
                        <span>Durata: <strong>3.45h</strong></span>
                    </div>
                    <div className="my-playlist-head">
                        <span>#</span>
                        <span>Titolo</span>
                        <span>Album</span>
                        <span>Durata</span>
                        <span>Popolarità</span>
                        <span>Aggiunto il</span>
                        <span>Anteprima</span>
                        <span>Riproduci</span>
                        <span>Modifica</span>
                    </div>
                    <div className="track-table">
                        <table>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div className="table-title-container">
                                            <div className="table-img">
                                                <Thumbnail src="https://cdn.wittytv.it/wp-content/uploads/2021/10/Albe-Millevoci-scaled.jpg" className="track-img"/>
                                            </div>
                                            <div className="table-title">
                                                <p>Millevoci</p>
                                                <p>Albe</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Amici 21</td>
                                    <td>2:56</td>
                                    <td>37</td>
                                    <td>09/11/2021</td>
                                    <td>
                                        <PlayButton src="https://p.scdn.co/mp3-preview/c956a56a9a3103ad75e95ce2cbb03a0bdd26332b?cid=d8a5ed958d274c2e8ee717e6a4b0971d" type="audio/mpeg"/>
                                    </td>
                                    <td><a href="https://www.spotify.com" rel="noreferral">Spotify</a></td>
                                    <td><button>Rimuovi</button></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>
                                        <div className="table-title-container">
                                            <div className="table-img">
                                                <Thumbnail src="https://cdn.wittytv.it/wp-content/uploads/2021/10/Albe-Millevoci-scaled.jpg" className="track-img"/>
                                            </div>
                                            <div className="table-title">
                                                <p>Millevoci</p>
                                                <p>Albe</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Amici 21</td>
                                    <td>2:56</td>
                                    <td>37</td>
                                    <td>09/11/2021</td>
                                    <td>
                                        <PlayButton src="https://p.scdn.co/mp3-preview/c956a56a9a3103ad75e95ce2cbb03a0bdd26332b?cid=d8a5ed958d274c2e8ee717e6a4b0971d" type="audio/mpeg"/>
                                    </td>
                                    <td><a href="https://www.spotify.com" rel="noreferral">Spotify</a></td>
                                    <td><button>Rimuovi</button></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>
                                        <div className="table-title-container">
                                            <div className="table-img">
                                                <Thumbnail src="https://cdn.wittytv.it/wp-content/uploads/2021/10/Albe-Millevoci-scaled.jpg" className="track-img"/>
                                            </div>
                                            <div className="table-title">
                                                <p>Millevoci</p>
                                                <p>Albe</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Amici 21</td>
                                    <td>2:56</td>
                                    <td>37</td>
                                    <td>09/11/2021</td>
                                    <td>
                                        <PlayButton src="https://p.scdn.co/mp3-preview/c956a56a9a3103ad75e95ce2cbb03a0bdd26332b?cid=d8a5ed958d274c2e8ee717e6a4b0971d" type="audio/mpeg"/>
                                    </td>
                                    <td><a href="https://www.spotify.com" rel="noreferral">Spotify</a></td>
                                    <td><button>Rimuovi</button></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>
                                        <div className="table-title-container">
                                            <div className="table-img">
                                                <Thumbnail src="https://cdn.wittytv.it/wp-content/uploads/2021/10/Albe-Millevoci-scaled.jpg" className="track-img"/>
                                            </div>
                                            <div className="table-title">
                                                <p>Millevoci</p>
                                                <p>Albe</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Amici 21</td>
                                    <td>2:56</td>
                                    <td>37</td>
                                    <td>09/11/2021</td>
                                    <td>
                                        <PlayButton src="https://p.scdn.co/mp3-preview/c956a56a9a3103ad75e95ce2cbb03a0bdd26332b?cid=d8a5ed958d274c2e8ee717e6a4b0971d" type="audio/mpeg"/>
                                    </td>
                                    <td><a href="https://www.spotify.com" rel="noreferral">Spotify</a></td>
                                    <td><button>Rimuovi</button></td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>
                                        <div className="table-title-container">
                                            <div className="table-img">
                                                <Thumbnail src="https://cdn.wittytv.it/wp-content/uploads/2021/10/Albe-Millevoci-scaled.jpg" className="track-img"/>
                                            </div>
                                            <div className="table-title">
                                                <p>Millevoci</p>
                                                <p>Albe</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Amici 21</td>
                                    <td>2:56</td>
                                    <td>37</td>
                                    <td>09/11/2021</td>
                                    <td>
                                        <PlayButton src="https://p.scdn.co/mp3-preview/c956a56a9a3103ad75e95ce2cbb03a0bdd26332b?cid=d8a5ed958d274c2e8ee717e6a4b0971d" type="audio/mpeg"/>
                                    </td>
                                    <td><a href="https://www.spotify.com" rel="noreferral">Spotify</a></td>
                                    <td><button>Rimuovi</button></td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>
                                        <div className="table-title-container">
                                            <div className="table-img">
                                                <Thumbnail src="https://cdn.wittytv.it/wp-content/uploads/2021/10/Albe-Millevoci-scaled.jpg" className="track-img"/>
                                            </div>
                                            <div className="table-title">
                                                <p>Millevoci</p>
                                                <p>Albe</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Amici 21</td>
                                    <td>2:56</td>
                                    <td>37</td>
                                    <td>09/11/2021</td>
                                    <td>
                                        <PlayButton src="https://p.scdn.co/mp3-preview/c956a56a9a3103ad75e95ce2cbb03a0bdd26332b?cid=d8a5ed958d274c2e8ee717e6a4b0971d" type="audio/mpeg"/>
                                    </td>
                                    <td><a href="https://www.spotify.com" rel="noreferral">Spotify</a></td>
                                    <td><button>Rimuovi</button></td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>
                                        <div className="table-title-container">
                                            <div className="table-img">
                                                <Thumbnail src="https://cdn.wittytv.it/wp-content/uploads/2021/10/Albe-Millevoci-scaled.jpg" className="track-img"/>
                                            </div>
                                            <div className="table-title">
                                                <p>Millevoci</p>
                                                <p>Albe</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Amici 21</td>
                                    <td>2:56</td>
                                    <td>37</td>
                                    <td>09/11/2021</td>
                                    <td>
                                        <PlayButton src="https://p.scdn.co/mp3-preview/c956a56a9a3103ad75e95ce2cbb03a0bdd26332b?cid=d8a5ed958d274c2e8ee717e6a4b0971d" type="audio/mpeg"/>
                                    </td>
                                    <td><a href="https://www.spotify.com" rel="noreferral">Spotify</a></td>
                                    <td><button>Rimuovi</button></td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>
                                        <div className="table-title-container">
                                            <div className="table-img">
                                                <Thumbnail src="https://cdn.wittytv.it/wp-content/uploads/2021/10/Albe-Millevoci-scaled.jpg" className="track-img"/>
                                            </div>
                                            <div className="table-title">
                                                <p>Millevoci</p>
                                                <p>Albe</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Amici 21</td>
                                    <td>2:56</td>
                                    <td>37</td>
                                    <td>09/11/2021</td>
                                    <td>
                                        <PlayButton src="https://p.scdn.co/mp3-preview/c956a56a9a3103ad75e95ce2cbb03a0bdd26332b?cid=d8a5ed958d274c2e8ee717e6a4b0971d" type="audio/mpeg"/>
                                    </td>
                                    <td><a href="https://www.spotify.com" rel="noreferral">Spotify</a></td>
                                    <td><button>Rimuovi</button></td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>
                                        <div className="table-title-container">
                                            <div className="table-img">
                                                <Thumbnail src="https://cdn.wittytv.it/wp-content/uploads/2021/10/Albe-Millevoci-scaled.jpg" className="track-img"/>
                                            </div>
                                            <div className="table-title">
                                                <p>Millevoci</p>
                                                <p>Albe</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Amici 21</td>
                                    <td>2:56</td>
                                    <td>37</td>
                                    <td>09/11/2021</td>
                                    <td>
                                        <PlayButton src="https://p.scdn.co/mp3-preview/c956a56a9a3103ad75e95ce2cbb03a0bdd26332b?cid=d8a5ed958d274c2e8ee717e6a4b0971d" type="audio/mpeg"/>
                                    </td>
                                    <td><a href="https://www.spotify.com" rel="noreferral">Spotify</a></td>
                                    <td><button>Rimuovi</button></td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>
                                        <div className="table-title-container">
                                            <div className="table-img">
                                                <Thumbnail src="https://cdn.wittytv.it/wp-content/uploads/2021/10/Albe-Millevoci-scaled.jpg" className="track-img"/>
                                            </div>
                                            <div className="table-title">
                                                <p>Millevoci</p>
                                                <p>Albe</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Amici 21</td>
                                    <td>2:56</td>
                                    <td>37</td>
                                    <td>09/11/2021</td>
                                    <td>
                                        <PlayButton src="https://p.scdn.co/mp3-preview/c956a56a9a3103ad75e95ce2cbb03a0bdd26332b?cid=d8a5ed958d274c2e8ee717e6a4b0971d" type="audio/mpeg"/>
                                    </td>
                                    <td><a href="https://www.spotify.com" rel="noreferral">Spotify</a></td>
                                    <td><button>Rimuovi</button></td>
                                </tr>


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Container>
    )
}
export default MyPlaylist