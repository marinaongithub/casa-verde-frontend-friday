import './App.css';
import ProductCard from "./ProductCard";
import products from "./products.json"
import Banner from "./Banner"
import SearchBox from './SearchBox';


function App() {
  return (
    <div className="App">
      <Banner />

      <div className="header mt-8 mb-8 flex justify-end lg:mb-18">
        <h1 className="logo text-[#3CAEA3] text-3xl w-1/2 ml-4 my-auto font-sans font-bold lg:text-6xl">Casa Verde</h1>
        <SearchBox />
        <img src="/images/cart3.png" alt="Product carts" className="ml-8 my-auto mr-4 lg:mr-14 max-mt-16 w-10 lg:w-12 lg:h-12"></img>
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
