import React from "react";
import MacWindow from "./MacWindow";
import "./spotify.scss"

const Spotify = () => {
  return (
    <MacWindow width="30vw" height="50vh">
      <div className="spotify-window">
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/album/0Rkv5iqjF2uenfL0OVB8hg?utm_source=generator&si=95df2f5087204128"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify Album"
        ></iframe>
      </div>
    </MacWindow>
  );
};

export default Spotify;
