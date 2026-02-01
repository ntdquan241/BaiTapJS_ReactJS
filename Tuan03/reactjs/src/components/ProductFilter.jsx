import React, { useState, useMemo } from 'react';
import './ProductFilter.css';

const createMockData = () => {
  const products = [];
  for (let i = 1; i <= 5000; i++) {
    products.push({
      id: i,
      name: `Sản phẩm mẫu ${i}`,
      price: Math.floor(Math.random() * 1000) + 100 
    });
  }
  return products;
};

const data = createMockData();

function ProductFilter() {
  const [products] = useState(data);
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);

  const filteredProducts = useMemo(() => {
    console.time("Filter Calculation Time");
    
    const result = products.filter(product => {
      const matchName = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchPrice = product.price >= minPrice && product.price <= maxPrice;
      return matchName && matchPrice;
    });

    console.timeEnd("Filter Calculation Time");
    return result;
  }, [products, searchTerm, minPrice, maxPrice]);

  const totalPrice = useMemo(() => {
    console.time("Total Price Calculation Time");
    
    const total = filteredProducts.reduce((sum, product) => sum + product.price, 0);
    
    console.timeEnd("Total Price Calculation Time");
    return total;
  }, [filteredProducts]);

  return (
    <div className="filter-container">
      <h3>Bài 3: useMemo Optimization</h3>
      
      <div className="controls">
        <input 
          type="text" 
          placeholder="Tìm tên sản phẩm..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        
        <div className="price-control">
          <label>Giá từ: {minPrice}</label>
          <input 
            type="range" 
            min="0" 
            max="2000" 
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
          />
        </div>

        <div className="price-control">
          <label>Đến: {maxPrice}</label>
          <input 
            type="range" 
            min="0" 
            max="2000" 
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="summary-box">
        <p>Số lượng tìm thấy: <strong>{filteredProducts.length}</strong></p>
        <p>Tổng trị giá: <strong>{totalPrice.toLocaleString()} $</strong></p>
      </div>

      <ul className="product-list">
        {filteredProducts.slice(0, 100).map(product => (
          <li key={product.id} className="product-item">
            <span>{product.name}</span>
            <span className="price-tag">{product.price} $</span>
          </li>
        ))}
        {filteredProducts.length > 100 && <li style={{padding: '10px'}}>... và còn nhiều sản phẩm khác</li>}
      </ul>
    </div>
  );
}

export default ProductFilter;