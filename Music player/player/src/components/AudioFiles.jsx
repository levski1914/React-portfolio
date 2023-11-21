import React from "react";

const AudioFiles = ({ songs, getSongData, index }) => {
  return (
    <>
      <div
        className="player-container"
        onClick={() => getSongData(songs, index)}
      >
        <h4 className="song-name">{songs.name}</h4>
      </div>
    </>
  );
};

export default AudioFiles;
