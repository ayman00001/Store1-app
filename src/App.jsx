import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/navbar';
import './App.css';
import { useEffect, useState } from 'react';
import Product from './components/product';


export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/carts')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const products = data.carts[0].products || [];
      setProducts(products);
    })
    .catch((error) => console.log('Error fetching data:', error));
  }, []);

  return(
    <div>
      <Navbar />
      <div className='col-lg-10'>
        {products.map((product) => (
          <Product key={product.id} product={product}/>
        ))}
    </div>
    </div>
  )
}