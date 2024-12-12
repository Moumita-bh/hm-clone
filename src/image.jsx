import React from 'react';
import './image.css';

function Navbar() {
  return (
    <div className="image-4">
      <article className="image-article">
        <div className="image-container">
          <img
            alt="Hello Kitty and Friends X H&M Campaign"
            src="https://image.hm.com/content/dam/global_campaigns/season_00/kids/4001a/4001A-3x2-1-hello-kitty-and-friends.jpg?imwidth=1536"
            className="campaign-image"
          />
        </div>
        <div className="image-content">
          <h2 className="image-title">Hello Kitty and Friends X H&amp;M</h2>
          <h3 className="image-subtitle">Discover our latest collaboration</h3>
          <a
            href="/en_in/kids/campaigns/4001a-hello-kitty-and-friends.html"
            className="shop-now-button"
          >
            Shop now
          </a>
        </div>
      </article>
    </div>
  );
}

export default Navbar;
