import React from 'react';
import styles from './App.module.css';

//Additionally, make sure that your interface
// has a "Save To Spotify" button and a "Search" button.
function App() {
  return (
    <div>
      <h1>
        Ja<span className={styles.highlight}>mmm</span>ing
      </h1>
      <div className={styles.App}>
        {/* <SearchBar onSearch={search} /> */}
        <div className={styles['App-playlist']}>
          {/* <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onNameChange={updatePlaylistName}
            onRemove={removeTrack}
            onSave={savePlaylist}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
