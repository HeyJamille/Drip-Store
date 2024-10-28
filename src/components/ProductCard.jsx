import React from 'react';

// assets
import collection1 from '../assets/cards/collection-1.png'
import collection2 from '../assets/cards/collection-2.png'
import collection3 from '../assets/cards/collection-3.png'

// Exemplo de dados do produto
const products = [
  {
    id: 1,
    promotion: "30% OFF",
    imageUrl: collection1, // Substitua pelo caminho da sua imagem
  },
  {
    id: 2,
    promotion: "30% OFF",
    imageUrl: collection2, // Substitua pelo caminho da sua imagem
  },
  {
    id: 3,
    promotion: "30% OFF",
    imageUrl: collection3, // Substitua pelo caminho da sua imagem
  },
];

const ProductCard = () => {
  return (
    <article className="p-5 lg:px-20 bg-light-gray-3">
      <h2 className="text-base text-dark-gray-2 font-semibold mb-2 lg:text-xl">Coleções em destaque</h2>
      
      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {products.map(product => (
          <div key={product.id} className="flex flex-col rounded-lg overflow-hidden shadow-md relative bg-[#d8e3f2]">
            <div className="flex flex-col justify-between  h-full absolute p-3 pl-5">
              {/* Aumentando o preenchimento superior para afastar o texto do topo */}
              <p className="text-sm text-dark-gray-2 w-[70px] font-semibold bg-[#E7FF86] p-1 rounded-full mb-2">
                {product.promotion}
              </p>
              <button type="button" className="mt-2 px-4 py-2 w-[120px] font-base font-semibold text-primary bg-white rounded-md z-10">
                Comprar
              </button>
            </div>

            <img 
              src={product.imageUrl} 
              className="relative w-full h-max-[200px] object-cover mt-10 lg:h-[200px]"
              alt={`Imagem da ${product.promotion}`} 
            />
          </div>
        ))}
      </section>
    </article>
  );
}

export default ProductCard;
