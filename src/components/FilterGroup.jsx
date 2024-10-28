import React from 'react';

// assets 
import line from '../assets/line.svg'
import product1 from '../assets/cards/produc-image-1.jpeg';
import product2 from '../assets/cards/produc-image-2.jpeg';
import product3 from '../assets/cards/produc-image-3.jpeg';
import product4 from '../assets/cards/produc-image-4.jpeg';
import product5 from '../assets/cards/produc-image-5.jpeg';

const FilterGroup = () => {
  const products = [
    {
      id: 1,
      promotion: "30% OFF",
      imageUrl: product1,
      title: 'Tênis',
      description: 'K-Swiss V8 - Masculino',
      priceDescont: '$200',
      price: '$100'
    },
    {
      id: 2,
      promotion: "30% OFF",
      imageUrl: product2,
      title: 'Tênis',
      description: 'K-Swiss V8 - Masculino',
      priceDescont: '$200',
      price: '$100'
    },
    {
      id: 3,
      promotion: "30% OFF",
      imageUrl: product3,
      title: 'Tênis',
      description: 'K-Swiss V8 - Masculino',
      priceDescont: '$200',
      price: '$100'
    },
    {
      id: 4,
      promotion: "30% OFF",
      imageUrl: product4,
      title: 'Tênis',
      description: 'K-Swiss V8 - Masculino',
      priceDescont: '$200',
      price: '$100'
    },
    {
      id: 5,
      promotion: "30% OFF",
      imageUrl: product5,
      title: 'Tênis',
      description: 'K-Swiss V8 - Masculino',
      priceDescont: '$200',
      price: '$100'
    },
  ];

  return (
    <article className="p-5 pt-10 lg:px-20 bg-light-gray-3">
      <section className="flex flex-row justify-between items-baseline text-sm text-primary font-semibold">
        <h2 className="text-base text-dark-gray-2 font-semibold mb-5 lg:text-xl md:text-center">
          Coleções em Destaque
        </h2>
        <div>
          <p className="inline pr-2">Ver todos</p>
          <img className="inline" src={line} alt="Linha decorativa" />
        </div>
      </section>

      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map(product => (
          <div key={product.id}>
            <div className="relative bg-white rounded-lg shadow-md">
              <img 
                src={product.imageUrl} 
                alt={product.title} 
                className="w-full max-h-[200px] object-cover rounded-md"               
              />
              <p className="absolute top-2 left-2 text-sm text-dark-gray-2 w-[70px] font-semibold bg-[#E7FF86] p-1 rounded-full mb-2">
                {product.praomotion}
              </p>
            </div>
            <h3 className="mt-3 text-lg font-semibold text-dark-gray">{product.title}</h3>
            <p className="text-sm text-gray-600">{product.description}</p>
            <p className="mt-1 text-md font-bold text-dark-gray ">
              <span className="line-through text-light-gray">{product.priceDescont}</span>
              <span> {product.price}</span>
            </p>
          </div>
        ))}
      </section>
    </article>
  );
}

export default FilterGroup;
