import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewSongForm from './NewSongForm';

const SongList = () => {
   const [songs, setSongs] = useState([
        { title: 'God has done it', id: 1 },
        { title: 'Oluwa e tobi', id: 2 },
        { title: 'God is the greatest', id: 3 },
    ]);
    const addSong =(title) =>{
        setSongs([...songs, { title, id: uuidv4()  }]);
    }
    return ( 
        <div className='song-list'>
            <ul>
               {songs.map(song => {
                return (<li key={song.id}>{song.title}</li>)
               })}
            </ul>
         <NewSongForm  addSong={addSong}/>
        </div>
     );
}
 
export default SongList;
