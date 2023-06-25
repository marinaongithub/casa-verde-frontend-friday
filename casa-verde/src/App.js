import './App.css';
import ProductCard from './ProductCard';
import products from "./products.json"


function App() {
  return (
    <div className="App">
      <div className="products-gallery">
        {products.map( product => (
          <ProductCard
            key={product.id}
            name={product.name}
            images={product.images}
            price={product.price}
            options={product.options} />
          ))
      }
      </div>
    </div>
  );
}

export default App;
