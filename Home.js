import React, { useState, useEffect } from 'react';
import Cards from '../Components/Cards';
import './Home.css';

import titan from '../IMG/Titan.webp';
import titan2 from '../IMG/Titan2.webp';
import Argos from '../IMG/Argos-wine_red.webp';
import Argos2 from '../IMG/argos2.webp';
import Cart from '../IMG/Cartier.webp';
import Cart2 from '../IMG/Cartier2.webp';
import HMT from '../IMG/HMT_KOHINNOOR.jpg';
import HMT2 from '../IMG/KOHINOOR2.jpg';
import Fastrack from '../IMG/Fastrack.jpg';
import Fastrack2 from '../IMG/Fastrack 2.jpg';
import NIBOSI from '../IMG/NIBOSI .jpg';
import NIBOSI2 from '../IMG/NIBOSI2 .jpg';
import PP from '../IMG/Patek_PhilippeW.webp';
import PP2 from '../IMG/Patek-Philippe2.webp';
import audemars from '../IMG/audemars.avif';
import audemars2 from '../IMG/audemars2.avif';
import jacob from '../IMG/jacob-co.jpg';
import jacob2 from '../IMG/jacob-co1.jpg';
import tissot from '../IMG/tissot-classic.jpg';
import tissot2 from '../IMG/tissot2.jpg';
import Rolex from '../IMG/Rolex.webp';
import Rolex2 from '../IMG/Rolex2.webp';
import VL from '../IMG/Velmont Lucien.webp';
import VL2 from '../IMG/Velmont Lucien2.webp';

// Video
import promoVideo from '../IMG/videowatch3.mp4';

const productsData = [
  { id: 1, title: 'Titan', price: 2985, category: 'Women', img: titan ,img2: titan2 },
  { id: 2, title: 'Argos Wine Red', price: 15750, category: 'Men', img: Argos,img2: Argos2},
  { id: 3, title: 'Cartier', price: 805000, category: 'Women', img: Cart,img2: Cart2 },
  { id: 4, title: 'HMT KOHINNOOR', price: 2000, category: 'Women', img: HMT,img2: HMT2 },
  { id: 5, title: 'Fastrack', price: 2476, category: 'Women', img: Fastrack ,img2: Fastrack2},
  { id: 6, title: 'NIBOSI', price: 2769, category: 'Women', img: NIBOSI,img2: NIBOSI2},
  { id: 7, title: 'Patek Philippe', price: 22611016, category: 'Women', img: PP ,img2:PP2},
  { id: 8, title: 'Audemars', price: 4678, category: 'Men', img: audemars,img2: audemars2},
  { id: 9, title: 'Jacob & Co', price: 6100000, category: 'Women', img: jacob ,img2: jacob2},
  { id: 10, title: 'Tissot Classic', price: 36500, category: 'Men', img: tissot ,img2:tissot2},
  { id: 11, title: 'Rolex Day Date ', price: 11178000, category: 'Men', img: Rolex,img2:Rolex2 },
  { id: 12, title: 'Velmont Lucien', price: 7238, category: 'Men', img: VL,img2:VL2 },
];

function Home() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [priceFilter, setPriceFilter] = useState('All');
  const [usdRate, setUsdRate] = useState(null);

  // Fetch USD conversion 
  useEffect(() => {
    fetch('https://api.exchangerate-api.com/v4/latest/INR')
      .then((res) => res.json())
      .then((data) => {
        setUsdRate(data.rates.USD);
      })
      .catch((err) => console.error('Currency API error:', err));
  }, []);

  const filteredProducts = productsData.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || product.category === category;
    const matchesPrice =
      priceFilter === 'All' ||
      (priceFilter === 'Low' && product.price < 3000) ||
      (priceFilter === 'Medium' && product.price >= 3000 && product.price < 10000) ||
      (priceFilter === 'High' && product.price >= 10000);

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div>
      <div className="video-section">
        <video autoPlay muted loop className="background-video">
          <source src={promoVideo} type="video/mp4" />
        </video>
        <div className="video-overlay">
          <h1>Welcome to Eternal Hour</h1>
          <p>Discover timeless elegance with our luxury watch collections</p>
        </div>
      </div>

      <h1 className="heading">Discover Your Style</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Search watches..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All Categories</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
        </select>
        <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
          <option value="All">All Prices</option>
          <option value="Low">Below ₹3000</option>
          <option value="Medium">₹3000 - ₹10000</option>
          <option value="High">Above ₹10000</option>
        </select>
      </div>

      <Cards products={filteredProducts.map(p => ({
        ...p,
        usdPrice: usdRate ? (p.price * usdRate).toFixed(2) : null
      }))} />
    </div>
  );
}

export default Home;
