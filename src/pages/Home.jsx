import {useState, useEffect} from 'react';
import ProductCard from '../components/ProductCard';
import productsData from "../data/products.json";


const Home = () =>{
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const updatedProducts = productsData?.map((product) => ({
      ...product,
      image: require(`../assets/images/${product.image}`)
    }));
    setProducts(updatedProducts);
  }, []);

  return (
  <div className="p-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
)

} 

export default Home;
