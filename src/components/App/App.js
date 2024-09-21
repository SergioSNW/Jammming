import React, { useState } from 'react';
import styles from './App.module.css';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';

//Additionally, make sure that your interface
// has a "Save To Spotify" button and a "Search" button.
function App() {
  const [searchResults, setSearchResults] = useState([
    {
      name: 'Track name 1',
      artist: 'track artist 1',
      album: 'track album 1',
      id: 1,
    },
    {
      name: 'Track name 2',
      artist: 'track artist 2',
      album: 'track album 2',
      id: 2,
    },
  ]);
  const [playlistName, setPlaylistName] = useState('Example Playlist Name');
  const [playlistTracks, setPlaylistTracks] = useState([
    {
      name: 'Track name 1',
      artist: 'track artist 1',
      album: 'track album 1',
      id: 1,
    },
    {
      name: 'Track name 2',
      artist: 'track artist 2',
      album: 'track album 2',
      id: 2,
    },
    {
      name: 'Track name 2',
      artist: 'track artist 2',
      album: 'track album 2',
      id: 3,
    },
  ]);

  function addTrack(track) {
    const existingTrack = playlistTracks.find((t) => t.id === track.id);
    const newTrack = playlistTracks.concat(track);
    if (existingTrack) {
      console.log('Track already exists');
    } else {
      setPlaylistTracks(newTrack);
    }
  }

  function removeTrack(track) {
    const existingTrack = playlistTracks.filter((t) => t.id !== track.id);
    setPlaylistTracks(existingTrack);
  }

  return (
    <div>
      <h1>
        Ja<span className={styles.highlight}>mmm</span>ing
      </h1>
      <div className={styles.App}>
        <SearchBar />
        <div className={styles['App-playlist']}>
          <SearchResults userSearchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
