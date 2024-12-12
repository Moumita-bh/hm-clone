import React, { useState} from 'react';
import './Header.css'; // Import the CSS for the header

function Header() {
  const [showDropdown, setShowDropdown] = useState(false); // Add state for "Ladies" dropdown
  const [showMenDropdown, setShowMenDropdown] = useState(false);
  const [showBabyDropdown, setShowBabyDropdown] = useState(false);
  const [showKidsDropdown, setShowKidsDropdown] = useState(false);
  const [showHomeDropdown, setShowHomeDropdown] = useState(false);
  const [showSaleDropdown, setShowSaleDropdown] = useState(false);
  
  const [isDialogOpen, setIsDialogOpen] = useState(false); // Manages dialog visibility
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // Manages password visibility
  
  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);
 
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  
  
  
  // Function to handle "Forgot Password" click
  const handleForgotPasswordClick = () => {
    alert('Forgot Password clicked'); 
    // Add navigation logic here if needed, e.g., navigate to a forgot password page
    // Example: window.location.href = '/forgot-password';
  };
  
  return (
    
    <header className="header">
      {/* Left Section */}
      <div className="header-left">
        <ul className="header-links">
          <li>Sustainability</li>
          <li>Customer Service</li>
          <li>Newsletter</li>
          <li>
            <img
              src="https://www.svgrepo.com/show/48024/three-dots-ellipsis.svg"
              alt="Options"
            />
          </li>
        </ul>
      </div>

      {/* Center Section */}
      <div className="header-center">
        <img
          className="logo"
          src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/db/e9/f5/dbe9f584-d8b7-3170-032b-412f6503ef3e/AppIcon-1x_U007emarketing-0-7-0-85-220-0.png/1200x600wa.png"
          alt="H&M Logo"
        />
        <ul className="nav-links">
          <li
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
            className="dropdown"
          >
            Ladies
            {showDropdown && (
              <div className="dropdown-menu">
                <div className="dropdown-section">
                  <h3>Offers</h3>
                  <ul>
                  <p>Member Exclusive Prices</p>
                  
                  <div>
                  <h4>New In</h4>
                  <ul>
                  <p>View All Women's Clothing | New Arrivals Sport</p>  
                  </ul>
                  </div>
                  
                  <div>
                  <h4>Trending Now</h4>
                  <ul>
                  <p>Trending Now</p> 
                  </ul>
                  </div>
                    
                  </ul>
                </div>
                <div className="dropdown-section">
                  <h3>Clothing</h3>
                  <ul>
                    <p>View All</p>
                    <p>Tops</p>
                    <p>Sweatshirts & Hoodies</p>
                    <p>Knitwear</p>
                    <p>Sweaters & Cardigans</p>
                    <p>Jackets & Coats</p>
                    <p>Dresses</p>
                    <p>Shirts & Blouses</p>
                    <p>Blazers & Waistcoats</p>
                    <p>Jeans</p>
                    <p>Trousers</p>
                    <p>Nightwear</p>
                    <p>Lingerie</p>
                    <p>Shorts</p>
                    <p>Skirts</p>
                    <p>Basics</p>
                    <p>Swimwear & Beachwear</p>
                    <p>H&M Edition</p>
                    <p>Merch & Graphics</p>
                    <p>Jumpsuits</p>
                    <p>Loungewear</p>
                    <p>Sport</p>
                    <p>Socks & Tights</p>
                    <p>Maternity Wear</p>
                    <p>Sale</p>
                    <p>Premium Selection</p>
                    <p>Care Products</p>
                  </ul>
                </div>
                <div className="dropdown-section">
                  <h3>Sport</h3>
                  <ul>
                    <p>View All</p>
                    <p>New In</p>
                    <p>Leggings & Tights</p>
                    <p>Sport Bras</p>
                    <p>Tops</p>
                    <p>Hoodies & Sweatshirts</p>
                    <p>Trousers & Joggers</p>
                    <p>Shorts</p>
                    <p>Dresses</p>
                    <p>Outerwear</p>
                    <p>Accessories & Equipment</p>
                    <p>Socks</p>
                    <p>Active Swimwear</p>
                    <p>Maternity</p>
                    <p>Training & Gym</p>
                    <p>Running</p>
                    <p>Yoga & Studio</p>
                    <p>Hiking</p>
                    <p>Skiing</p>
                    <p>Racket Sports</p>
                    <p>Swimming</p>
                  </ul>
                </div>
                <div className="dropdown-section">
                  <h3>Accessories</h3>
                  <div>
          
          <ul>
            <p>View All</p>
            <p>Bags</p>
            <p>Jewellery</p>
            <p>Sunglasses</p>
            <p>Hair Accessories</p>
            <p>Belts</p>
            <p>Gloves</p>
            <p>Hats</p>
            <p>Scarves</p>
          </ul>
        </div>
        <div>
          <h4>Shoes</h4>
          <ul>
            <p>View All</p>
            <p>Boots</p>
            <p>Flats</p>
            <p>Heels</p>
            <p>Loafers</p>
            <p>Sandals</p>
            <p>Slippers</p>
            <p>Slingback</p>
          </ul>
        </div>
                </div>
              </div>
            )}
          </li>
          <li
            onMouseEnter={() => setShowMenDropdown(true)}
            onMouseLeave={() => setShowMenDropdown(false)}
            className="dropdown"
          >
            Men
            {showMenDropdown && (
              <div class="dropdown-menu">
           <div class="dropdown-section">
            <h3>Offers</h3>
           <ul>
           <p>Member Exclusive Prices</p>
           <p>Sweats & Hoodies: From ₹799</p>
           </ul>
          <h4>New In</h4>
          <ul>
         <p>View All</p>
         <p>Accessories</p>
         <p>Shoes</p>
         <p>Clothes</p>
         </ul>
         <h4>Trending Now</h4>
         <ul>
         <p>Outdoor Apparel</p>
         <p>Core Comfort</p>
         <p>Trending Now</p>
        </ul>
        <h4>Christmas Shop</h4>
        <ul>
        <p>The Holiday Shop</p>
        <p>Gift Guide for Him</p>
       </ul>
      </div>
      <div class="dropdown-section">
      <h3>Clothing</h3>
      <ul>
      <p>View All</p>
      <p>Hoodies & Sweatshirts</p>
      <p>Shirts</p>
      <p>T-shirts & Tops</p>
      <p>Jackets & Coats</p>
      <p>Trousers</p>
      <p>Jeans</p>
      <p>Sweaters & Cardigans</p>
      <p>Polos</p>
      <p>Basics</p>
      <p>Blazers & Suits</p>
      <p>Shorts</p>
      <p>Underwear</p>
      <p>Premium Selection</p>
      <p>Sleepwear & Loungewear</p>
    </ul>
  </div>
  <div class="dropdown-section">
    <h3>Accessories</h3>
    <ul>
      <p>View All</p>
      <p>Bags</p>
      <p>Belts and Suspenders</p>
      <p>Gloves</p>
      <p>Hats and Caps</p>
      <p>Jewellery</p>
      <p>Scarves</p>
      <p>Sunglasses</p>
      <p>Ties & Bowties</p>
    </ul>
    <h4>Shoes</h4>
    <ul>
      <p>View All</p>
      <p>Slippers</p>
      <p>Trainers</p>
    </ul>
  </div>
  <div class="dropdown-section">
    <h3>Sport</h3>
    <ul>
      <p>View All</p>
      <p>New In</p>
      <p>Tops</p>
      <p>Sweatshirts & Hoodies</p>
      <p>Trousers & Joggers</p>
      <p>Shorts</p>
      <p>Outerwear</p>
      <p>Accessories & Equipment</p>
      <p>Sport Socks</p>
      <p>Training & Gym</p>
      <p>Running</p>
      <p>Hiking</p>
      <p>Racket Sports</p>
      </ul>
      </div>
      </div>
            )}
          </li>
          <li
          onMouseEnter={() => setShowBabyDropdown(true)}
            onMouseLeave={() => setShowBabyDropdown(false)}
            className="dropdown"
          >
          Baby
          {showBabyDropdown && (
              <div class="dropdown-menu">
           <div class="dropdown-section">
            <h3>Life with Baby</h3>
           <ul>
           <p>Guides and inspo</p>
           </ul>
          <h4>New In</h4>
          <ul>
         <p>Newborn
          Baby</p>
         </ul>
      </div>
      <div class="dropdown-section">
      <h3>Trending Now</h3>
      <ul>
      <p>Christmas Shop</p>
      <p>Character newborn</p>
      <p>H&M Adorables</p>
      
    </ul>
  </div>
  <div class="dropdown-section">
    <h3>Newborn</h3>
    <ul>
      <p>Clothing</p>
      <p>Accessories</p>
      <p>Outerwear</p>
      
      <h4>Baby Girl</h4>
      <ul>
      <p>Clothing</p>
      <p>Outerwear</p>
      <p>Accessories</p> 
      </ul>
    </ul>
    
  </div>
  <div class="dropdown-section">
    <h3>Baby Boy</h3>
    <ul>
      <p>Clothing</p>
      <p>Outerwear</p>
      <p>Accessories</p>
      <h4>Shop by Product</h4>
      <ul>
      <p>Clothing</p>
      <p>Outerwear</p>
      <p>Accessories</p>
      <p>Sale</p>
      </ul>
      </ul>
      </div>
      </div>
      )}
          
          
      </li>
      <li
      onMouseEnter={() => setShowKidsDropdown(true)}
      onMouseLeave={() => setShowKidsDropdown(false)}
      className="dropdown"
      
      >Kids
     {showKidsDropdown && (
              <div class="dropdown-menu">
           <div class="dropdown-section">
            <h3>Member Exclusive Prices</h3>
           <ul>
           <p>Shop Now</p>
           </ul>
          <h4>Trending now</h4>
          <ul>
          <p>Christmas Shop</p>
          <p>H&M Adorables</p>
          <p>The Character Shop</p>
         </ul>
      </div>
      <div class="dropdown-section">
      <h3>New In</h3>
      <ul>
      <p>Kids 2-8Y</p>
      <p>Kids 9-14Y</p>
      <h4>Girls 2-8Y</h4>
      <ul>
      <p>Clothing</p>
      <p>Outerwear</p>
      <p>Accessories</p>
      <p>H&M Adorables</p>
      <p>Sportswear</p>
      <p>Sale</p>
      </ul>
      
    </ul>
  </div>
  <div class="dropdown-section">
    <h3>Boys 2-8Y</h3>
    <ul>
      <p>Clothing</p>
      <p>Outerwear</p>
      <p>Accessories</p>
      <p>H&M Adorables</p>
      <p>Sportswear</p>
      <p>Sale</p> 
      
    </ul>
    
  </div>
  <div class="dropdown-section">
    <h3>Girls 9-14Y</h3>
    <ul>
      <p>Clothing</p>
      <p>Outerwear</p>
      <p>Accessories</p>
      <p>Sportswear</p>
      <p>Sale</p>
      
      <h4>Boys 9-14Y</h4>
      <ul>
      <p>Clothing</p>
      <p>Outerwear</p>
      <p>Accessories</p>
      <p>Sportswear</p>
      <p>Sale</p>
      </ul>
      </ul>
      </div>
      </div>
      )}
          
          

      </li>
      <li
       onMouseEnter={() => setShowHomeDropdown(true)}
       onMouseLeave={() => setShowHomeDropdown(false)}
       className="dropdown"
      
      >Home
      {showHomeDropdown && (
              <div class="dropdown-menu">
           <div class="dropdown-section">
            <h3>Offers</h3>
           <ul>
           <p>Member Exclusive Prices</p>
           </ul>
          <h4>New In</h4>
          <ul>
          <p>New Products</p>
          <h4>Christmas Shop</h4>
          <ul>
          <p>Holiday shop</p>
          <p>Gifts</p>  
          </ul>
         </ul>
      </div>
      <div class="dropdown-section">
      <h3>Shop by Room</h3>
      <ul>
      <p>Bedroom</p>
      <p>Living Room</p>
      <p>Bathroom</p>
      <p>Nursery</p>
      <p>Kids Room</p>
      <p>Kitchen</p>
      <p>Balcony & Outdoor</p>
      
      
      
    </ul>
  </div>
  <div class="dropdown-section">
    <h3>Shop by Product</h3>
    <ul>
      <p>View All</p>
      <p>Interior textiles</p>
      <p>Bedding & Blankets</p>
      <p>Decorations</p>
      <p>Cooking & Dining</p>
      <p>Bath & Shower</p>
      <p>Storage</p>
      <p>Sleep & Loungewear</p>
      <p>Kids & Baby</p>
      <p>Room Fragrance</p>
      <p>Sale</p> 
      
    </ul>
    
    </div>
    </div>
    )}


    </li>
    <li
     onMouseEnter={() => setShowSaleDropdown(true)}
     onMouseLeave={() => setShowSaleDropdown(false)}
     className="dropdown"
    >Sale
    {showSaleDropdown && (
              <div class="dropdown-menu">
           <div class="dropdown-section">
            <h3>Women</h3>
           <ul>
           <p>View All</p>
           <p>Tops & T-shirts</p>
           <p>Dresses</p>
           <p>Shirts & Blouses</p>
           <p>Jeans</p>
           <p>Shoes</p>
           <p>Trousers</p>
           <p>Accessories</p>
           <p>Skirts</p>
           <p>Swimwear</p>
           <p>Shorts</p>
           <p>Basics</p>
           <p>Blazers & Waistcoats</p>
           <p>Lingerie</p>
           <p>Sportswear</p>
           <p>Sweaters & Cardigans</p>
           <p>Sweatshirts & Hoodies</p>
           <p>Jackets & Coats</p>
           <p>Sleepwear & Loungewear</p>
           <p>Knitwear</p>
           <p>Jumpsuits</p>
           <p>Socks & Tights</p>
           <p>Maternity Wear</p>
           <p>Extended Sizes</p>
           <p>Premium Selection</p>
          </ul>
      </div>
      <div class="dropdown-section">
      <h3>Men</h3>
      <ul>
      <p>View All</p>
      <p>T-shirts & Tank tops</p>
      <p>Shirts</p>
      <p>Trousers</p>
      <p>Jeans</p>
      <p>Accessories</p>
      <p>Shorts</p>
      <p>Hoodies & Sweatshirts</p>
      <p>Basics</p>
      <p>Jackets & Coats</p>
      <p>Shoes</p>
      <p>Sweaters & Cardigans</p>
      <p>Blazers & Suits</p>
      <p>Sportswear</p>
      <p>Underwear & Innerwear</p>
      <p>Sleepwear & Loungewear</p>
      <p>Socks</p>
      <p>Premium Selection</p>
    </ul>
  </div>
  <div class="dropdown-section">
    <h3>Baby</h3>
    <ul>
      <p>SAVE BIG: MIN 50% OFF</p>
      <p>View all products</p>
      <p>SALE STYLES UNDER RS.599</p>
      <p>Newborn</p>
      <p>Baby Girl</p>
      <p>Baby Boy</p>
      
    </ul>
    <h4>Kids</h4>
    <ul>
      <p>SAVE BIG: MIN 50% OFF</p>
      <p>SALE STYLES UNDER RS.599</p>
      <p>Tops & Tees - Best price</p>
      <p>Dresses - Best price</p>
      <p>Jeans - Best price</p>
      <p>View all</p>
      <p>Girls 2-8Y</p>
      <p>Boys 2-8Y</p>
      <p>Girls 9-14Y</p>
      <p>Boys 9-14Y</p>
    </ul>
  </div>
  <div class="dropdown-section">
    <h3>H&M Home</h3>
    <ul>
      <p>View All</p>
      <p>Bedroom</p>
      <p>Livingroom</p>
      <p>Bathroom</p>
      <p>Cushions</p>
      <p>Bed Linen</p>
      <p>Decorations</p>
      <p>Storage</p>
      
      </ul>
      <h4>Sport</h4>
      <ul>
      <p>View all</p>
      <p>Women</p>
      <p>Men</p>
      <p>Kids</p>
      </ul>
      </div>
      </div>
            )}
    </li>
    </ul>
    </div>

    <div className="header-right">
        {/* User Actions */}
        <div className="user-actions">
          {/* Sign In Section */}
          <div>
            {/* Trigger to open dialog */}
            <div className="icon sign-in" onClick={openDialog}>
              <i className="fa fa-user"></i>
              <span>Sign in</span>
            </div>

            {/* Dialog */}
            {isDialogOpen && (
              <div className="dialog-overlay" onClick={closeDialog}>
                <div
                  className="dialog-box"
                  onClick={(e) => e.stopPropagation()} // Prevent close on dialog content click
                >
                  <button className="close-button" onClick={closeDialog}>
                    &times;
                  </button>
                  <h2 className="dialog-title">Sign in</h2>
                  <p className="dialog-subtitle">
                    Become a member — don’t miss out on deals, offers,
                    discounts, and bonus vouchers.
                  </p>
                  <form className="dialog-form">
                    <label className="dialog-label">
                    CUSTOMER.email.label.text *
                      <input type="email" className="dialog-input" required />
                    </label>
                    <label className="dialog-label password-label">
                    CUSTOMER.password.label.text *
                      <div className="password-wrapper">
                        <input
                          type={isPasswordVisible ? "text" : "password"}
                          className="dialog-input password-input"
                          required
                          placeholder={
                            isPasswordVisible
                              ? "password.hide"
                              : "password.show"
                          }
                        />
                        <button
                          type="button"
                          className="password-toggle"
                          onClick={togglePasswordVisibility}
                        >
                          {isPasswordVisible ? "Hide" : "Show"}
                        </button>
                      </div>
                    </label>
                    <div className="form-options">
                      <label className="remember-me">
                        <input type="checkbox" />
                        Remember me
                      </label>
                      <button
                        type="button"
                        className="forgot-password-button"
                        onClick={handleForgotPasswordClick}
                      >
                        Forgot password?
                      </button>
                    </div>
                    <button type="submit" className="sign-in-button">
                      Sign in
                    </button>
                    <button type="button" className="secondary-button">
                      Become a member
                    </button>
                  </form>
                  <a href="/membership" className="membership-link">
                    H&M Membership
                  </a>
                </div>
              </div>
            )}
          </div>

        {/* Favourites Section */}
        <div className="icon">
          <i className="fa fa-heart"></i>
          <span>Favourites</span>
        </div>

        {/* Shopping Bag Section */}
        <div className="icon shopping-bag">
          <i className="fa fa-shopping-bag"></i>
          <span>Shopping bag (0)</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <i className="fa fa-search search-icon"></i>
        <input type="text" placeholder="Search" className="search-input" />
      </div>
    </div>
    </header>
  );
}

export default Header;
