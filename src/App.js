import { useEffect, useState } from 'react';
import './App.css';
import AnnouncementCard from './components/announce-card';
import ProductCard from './components/product-card';

function App() {

  //A couple of things.

  const [products,setProducts] = useState([]);
  useEffect(() => {
    fetch("/products").then(res => res.json()).then(res => setProducts(res));
  }, [setProducts])
  
   return (

      <div className="p-10">
        <AnnouncementCard className="w-full" title="Longhorn transforme sa marque" description="Aujourd'hui, Longhorn fait un saut dans le futur, avec une marque Longhorn transformée qui reflète le rôle essentiel de l'entreprise dans la création d'une technologie qui fait avancer le monde."/>
        
        <div class="md:flex mt-8 md:-mx-4 mb-6">
                <div class="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2" style={{backgroundImage:"url('https://cloudfront-us-east-1.images.arcpublishing.com/gray/U7J4Q6B3X5IP5KF52FUKWOCPHA.jpg')"}}>
                    <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
                        <div class="px-10 max-w-xl">
                            <h2 class="text-2xl text-white font-semibold">Masques</h2>
                            <p class="mt-2 text-gray-300">Achetez avec nous des masques personnalisables ou des designs préfabriqués pour votre protection quotidienne contre le Covid-19.</p>
                            <button class="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                                <span>Shop Now</span>
                                <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2" style={{backgroundImage:"url('https://thumbnails.production.thenounproject.com/Qt_faI84nnWgrFpV1MUpQaJtluA=/fit-in/1000x1000/photos.production.thenounproject.com/photos/15404E2D-EB59-4913-9EFE-C562E41DED9A.jpg')"}}>
                    <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
                        <div class="px-10 max-w-xl">
                            <h2 class="text-2xl text-white font-semibold">Mugs</h2>
                            <p class="mt-2 text-gray-300">Buy personnalisable mugs from us with quality materials, printing with vivid colors and fast service. </p>
                            <button class="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                                <span>Shop Now</span>
                                <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        
        <div class="grid grid-cols-1 md:grid-cols-4 md:gap-4">

        {products.map(product => <ProductCard name={product.name} price={"$" + product.price.toFixed(2) + " CAD"}/>)}
        </div>


      </div>  
      
    );
}

export default App;
