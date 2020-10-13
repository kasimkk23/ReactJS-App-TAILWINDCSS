import React from 'react'
import { useParams } from 'react-router-dom';
import Loader from '../Components/Loader'
import { useAxiosGet } from './../Hooks/HttpRequest';

const Product = () => {
    const { id } = useParams()
    const url = `https://5f84ead3c29abd001618ffee.mockapi.io/products/${id}`;

    let product = useAxiosGet(url);

    let content = null

    if(product.loading){
        content = <Loader />
    }

    if(product.error){
        content = <div>
            <div className="bg-blue-300 mb-2 p-3">
                If you see this error. Please remember to create your own <a href="https://mockapi.io/">mock API</a>.
            </div>
            <div className="bg-red-300 p-3">
                There was an error please refresh or try again later.
            </div>
        </div>
    }

    if(product.data){
        content = 
        <div>
            <h1 className="text-2xl font-bold mb-3">
                {product.data.name}
            </h1>
            <div>
                <img
                    src={product.data.image}
                    alt={product.data.name}
                />
            </div>
            <div className="font-bold text-xl mb-3">
                $ {product.data.price}
            </div>
            <div>
                {product.data.description}
            </div>
        </div>
    }
    return (
        <div className="container mx-auto">
            {content}
        </div>
    )
}
 
export default Product;
