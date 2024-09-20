import React from 'react';
import './App.css';

//Additionally, make sure that your interface
// has a "Save To Spotify" button and a "Search" button.
function App() {
  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        {/* <SearchBar onSearch={search} /> */}
        <div className="App-playlist">
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
