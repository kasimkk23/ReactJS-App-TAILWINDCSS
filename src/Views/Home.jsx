import React from 'react'
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard';
import { useAxiosGet } from './../Hooks/HttpRequest';


const Home = () => {

    const url = `https://5f84ead3c29abd001618ffee.mockapi.io/products?page=1&limit=10`;
    let products = useAxiosGet(url);

    let content = null
    
    if(products.loading){
        content = <Loader />
    }

    if(products.error){
        content = <div>
            <div className="bg-blue-300 mb-2 p-3">
                If you see this error. Please remember to create your own <a href="https://mockapi.io/">mock API</a>.
            </div>
            <div className="bg-red-300 p-3">
                There was an error please refresh or try again later.
            </div>
        </div>
    }

    if(products.data){
        content = 
        products.data.map((product) => (
            <div key={product.id}>
                <ProductCard 
                    product={product}
                />
            </div>
        ))
    }


    return ( 
        <div>
            <h1 className="font-bold">Our Naysayers</h1>
            {content}
        </div>
     );
}
 
export default Home;