import './App.css';
import ProductCard from "./ProductCard";
import products from "./products.json"
import Banner from "./Banner"
import SearchBox from './SearchBox';


function App() {
  return (
    <div className="App">
      <Banner />

      <div className="header mt-8 mb-16 flex justify-end">
        <h1 className="logo text-[#3CAEA3] w-1/2 my-auto font-sans font-bold text-6xl">Casa Verde</h1>
        <SearchBox />
        <img src="/images/cart3.png" alt="Product carts" className="ml-8 my-auto mr-14 max-mt-16 lg:w-12 lg:h-12"></img>
      </div>

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
