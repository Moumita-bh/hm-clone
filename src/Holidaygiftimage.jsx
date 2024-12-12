import React from 'react';
import './Holidaygiftimage.css';

function Navbar() {
  return (
    <>
      {/* Holiday Gift Guide Section */}
      <div className="image-5">
        <article
          style={{
            backgroundImage: `url('https://lp2.hm.com/hmgoepprod?source=url[https://www2.hm.com/content/dam/hm/TOOLBOX/Local%20Activities/2024_s09/october_2024/W40-NEAHOME-HOLIDAY-PREVIEW-BANNER-3x1.jpg]&scale=size[960]&sink=format[jpeg],quality[80]&quot')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          className="holiday-banner"
        >
          <header className="holiday-header">
            <h3 className="holiday-title">Holiday gift guide</h3>
            <p className="holiday-description">
              Find the perfect presents this holiday season.
            </p>
          </header>
          <ul className="image-5-btns">
            <li>
              <a href="/en_in/women/shop-by-product/hoodies-sweatshirts.html">Ladies</a>
            </li>
            <li>
              <a href="/en_in/men/shop-by-product/hoodies-sweatshirts.html">Men</a>
            </li>
            <li>
              <a href="/en_in/kids/deals/ink-03.html">Baby</a>
            </li>
            <li>
              <a href="/en_in/kids/deals/ink-02.html">Kids</a>
            </li>
            <li>
              <a href="/en_in/home/seasonal-trending/pop-of-colours.html">Home</a>
            </li>
          </ul>
        </article>
      </div>

      {/* Winter Knit Curation Section */}
      <div className="image-6">
        <article className="image-6-article">
          <div className="image-6-container">
            <img
              alt="A winter knit curation"
              src="https://image.hm.com/content/dam/regional-local-activities/ix-il/2024-season-09/ladies/rseu-women-knitwear-w3-3x2.png?imwidth=1536"
              className="winter-image"
            />
          </div>
          <div className="image-6-content">
            <h2 className="image-6-title">A winter knit curation</h2>
            <h3 className="image-6-subtitle">
              Discover your look with our staple knitwear styles
            </h3>
            <a
              href="/en_in/women/shop-by-product/knitwear.html"
              className="winter-shop-now-button"
            >
              Shop now
            </a>
          </div>
        </article>
      </div>
    </>
  );
}

export default Navbar;
