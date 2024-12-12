import React, { useRef } from "react";
import './MenBestsellers.css';

const MenBestsellers = () => {
  const products = [
    {
      id: 1,
      image: "https://lp2.hm.com/hmgoepprod?set=source[/0f/6b/0f6bc077b11def2e185df6254e0017b71afc812f.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]",
      title: "Loose Fit Sweatshirt",
      price: "Rs. 799.00",
      colors: ["black", "gray", "white", "green"],
    },
    {
      id: 2,
      image: "https://lp2.hm.com/hmgoepprod?set=source[/db/ff/dbffa3571b9d73c6762519abda9ce3a75a30be0c.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]",
      title: "Loose Fit Hoodie",
      price: "Rs. 1,499.00",
      colors: ["black", "gray", "white", "beige"],
    },
    {
        id: 3,
        image: "https://lp2.hm.com/hmgoepprod?set=source[/78/92/7892f6d0a9e9281545de3c119930b4e0e95691a3.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]",
        title: "Loose Fit Sweatshirt",
        price: "Rs. 799.00",
        colors: ["black", "gray", "white", "beige"],
    },
    {
        id: 4,
        image: "https://lp2.hm.com/hmgoepprod?set=source[/30/3b/303b85d60eb5e0836e0f2756ff207fc0b59c0c41.jpg],origin[dam],category[men_hoodiessweatshirts_sweatshirts],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]",
        title: "Loose Fit Sweatshirt",
        price: "Rs. 799.00",
        colors: ["black", "gray", "white", "beige"],
    },
    {
        id: 5,
        image: "https://lp2.hm.com/hmgoepprod?set=source[/75/0c/750cc44b179769a6c212f0bd132be814cfe76567.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]",
        title: "Loose Fit Hoodie",
        price: "Rs. 1,499.00",
        colors: ["black", "gray", "white", "beige"],
    },
    {
        id: 6,
        image: "https://lp2.hm.com/hmgoepprod?set=source[/4a/5e/4a5eb766f63d01dd96cfafd129dab334a2ab1897.jpg],origin[dam],category[men_hoodiessweatshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]",
        title: "Loose Fit Hoodie",
        price: "Rs. 1,499.00",
        colors: ["black", "gray", "white", "beige"],
    },
    {
        id: 7,
        image: "https://lp2.hm.com/hmgoepprod?set=source[/6c/3d/6c3dd4381ed49f80354b50eedd8306a876798859.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]",
        title: "Loose Fit Sweatshirt",
        price: "Rs. 799.00",
        colors: ["black", "gray", "white", "beige"],
    },
    {
        id: 8,
        image: "https://lp2.hm.com/hmgoepprod?set=source[/e0/d8/e0d8250dfe2e3d9baec690f7302023a83062a574.jpg],origin[dam],category[men_hoodiessweatshirts_sweatshirts],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]",
        title: "Loose Fit Sweatshirt",
        price: "Rs. 1,499.00",
        colors: ["black", "gray", "white", "beige"],
    },
    {
        id: 9,
        image: "https://lp2.hm.com/hmgoepprod?set=source[/60/d2/60d2f9f8de27bb0be42730acf4dc781bb8851315.jpg],origin[dam],category[men_tshirtstanks_shortsleeve],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]",
        title: "Loose Fit T-shirt",
        price: "Rs. 1,499.00",
        colors: ["black", "gray", "white", "beige"],
    },
    {
        id: 10,
        image: "https://lp2.hm.com/hmgoepprod?set=source[/2a/1a/2a1a0c351c0d2769fe699acbb776375084246815.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]",
        title: "Loose Fit Hoodie",
        price: "Rs. 1,499.00",
        colors: ["black", "gray", "white", "beige"],
    },
    
  ];

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  return (
    <div className="men-bestsellers">
      <div className="price-bar">
        <h2>Men Bestsellers</h2>
      </div>

      <div className="product-section">
        <div className="product-row" ref={scrollRef}>
          {products.map((product) => (
            <div className="product-box" key={product.id}>
              <img src={product.image} alt={product.title} />
              <div className="product-title">{product.title}</div>
              <div className="product-price">{product.price}</div>
              <div className="product-colors">
                {product.colors.map((color, index) => (
                  <span
                    key={index}
                    className={`color-dot ${color}`}
                    title={color}
                  ></span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="scroll-btn left" onClick={scrollLeft}>
        ←
       </button>
     <button className="scroll-btn right" onClick={scrollRight}>
       →
     </button>

      </div>
    </div>
  );
};

export default MenBestsellers;
