import React from 'react';

// assets 
import product1 from '../assets/cards/produc-image-1.jpeg';
import product2 from '../assets/cards/produc-image-2.jpeg';
import product3 from '../assets/cards/produc-image-3.jpeg';
import product4 from '../assets/cards/produc-image-4.jpeg';
import product5 from '../assets/cards/produc-image-5.jpeg';

const ProductListingPage = () => {
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
    {
      id: 6,
      promotion: "30% OFF",
      imageUrl: product3,
      title: 'Tênis',
      description: 'K-Swiss V8 - Masculino',
      priceDescont: '$200',
      price: '$100'
    },
    {
      id: 7,
      promotion: "30% OFF",
      imageUrl: product4,
      title: 'Tênis',
      description: 'K-Swiss V8 - Masculino',
      priceDescont: '$200',
      price: '$100'
    },
    {
      id: 8,
      promotion: "30% OFF",
      imageUrl: product5,
      title: 'Tênis',
      description: 'K-Swiss V8 - Masculino',
      priceDescont: '$200',
      price: '$100'
    },
  ];

  return (
    <article className="flex flex-col flex-grow p-5 pb-10 lg:px-20 bg-light-gray-3">
      <section className="md:flex md:flex-row-reverse md:justify-between md:items-center">
        <div className="my-5 flex items-center ">
          <label htmlFor="order-select" className="text-sm font-medium text-dark-gray-2  w-[40%]">
            Ordenar por:
          </label>
          <select
            id="order-select"
            className="h-12 p-[5px] w-[80%] text-dark-gray-2 border border-black rounded-md focus:outline-none pl-3 bg-white"
            defaultValue="ordenar"
          >
            <option value="ordenar" disabled>
              Selecione uma opção
            </option>
            <option value="relevantes">Mais relevantes</option>
            <option value="mais-vendidos">Mais vendidos</option>
            <option value="lancamentos">Lançamentos</option>
            <option value="menor-preco">Menor preço</option>
            <option value="maior-preco">Maior preço</option>
            <option value="melhor-avaliacao">Melhor avaliação</option>
            <option value="a-z">A-Z (Alfabética)</option>
            <option value="z-a">Z-A (Alfabética inversa)</option>
            <option value="desconto-maior">Desconto maior</option>
            <option value="popularidade">Popularidade</option>
          </select>
        </div>

        <div>
          <p>Resultados para “Tênis”</p>
        </div>
      </section>

      {/* Conteúdo de listagem de produtos */}
      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map(product => (
          <div key={product.id}>
            <div className="relative bg-white rounded-lg shadow-md">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full object-cover rounded-md "
              />
              <p className="absolute top-2 left-2 text-sm text-dark-gray-2 w-[70px] font-semibold bg-[#E7FF86] p-1 rounded-full mb-2">
                {product.promotion}
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
};

export default ProductListingPage;
