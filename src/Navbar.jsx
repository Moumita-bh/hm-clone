import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      {/* Navbar top content */}
      <div className="navbar-content">
        <span>Free shipping above ₹1999</span>
        <span>Free & flexible 15 days return</span>
        <span>Estimated delivery time: 2-7 days</span>
      </div>

      {/* First Image with "Winter Update" */}
      <div className="image">
        <div className="headings">
          <span className="text-1">Winter update</span>
          <div className="shop-now">
            <span>shop now</span>
          </div>
        </div>
        <img
          src="https://image.hm.com/content/dam/global_campaigns/season_00/ladies/ds60d/DS60D-1x1.jpg?imwidth=1260"
          alt="Winter Update"
        />
      </div>

      {/* Second Image with "Fall Legends" */}
      <div className="image-2">
        <img
          src="https://image.hm.com/content/dam/global_campaigns/season_00/men/ms60caa/MS60CAA-fall-legends-1x1-teaser.jpg?imwidth=1260"
          alt="Fall Legends"
        />
        <div className="headings-2">
          <span className="headings-2-text-1">Fall legends</span>
          <span className="headings-2-text-2">
            Cold-weather classics reimagined with expressive textures and an easy fit.
          </span>
          <div className="image-2-shop-now">
            <span>shop now</span>
          </div>
        </div>

        {/* Price Information */}
        <div className="price-info">
          <span className="price">Rs. 2,999.00</span>
          <span className="description">Regular Fit Waffled o...</span>
          <span className="arrow">→</span>
        </div>
      </div>

      {/* Third Image */}
      <div class="image-3">
  <article
    style={{
    backgroundImage: `url('https://lp2.hm.com/hmgoepprod?source=url[https://www2.hm.com/content/dam/hm/Seasonal%20Images%20Email/september-2020/9031_LocalActivation_autumn20_SB__04__3x1.jpg]&scale=size[960]&sink=format[jpeg],quality[80]')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
  >
    <header>
      <h3>Hoodie &amp; sweats season</h3>
      <p>Discover the perfect winter essentials</p>
    </header>
    <ul class="image-3-btns">
      <li>
        <a href="/en_in/women/shop-by-product/hoodies-sweatshirts.html">Ladies</a>
      </li>
      <li>
        <a href="/en_in/men/shop-by-product/hoodies-sweatshirts.html">Men</a>
      </li>
      <li>
        <a href="/en_in/kids/shop-by-product/outerwear.html">Kids &amp; Baby</a>
      </li>
    </ul>
  </article>
</div>

    </div>
  );
}

export default Navbar;
