import React from 'react';

// assets
import camisa from '../assets/camisa.svg';
import calca from '../assets/calca.svg';
import bone from '../assets/calca.svg'; // Corrija para a imagem correta do boné
import sapato from '../assets/sapato.svg';
import foneOuvido from '../assets/foneOuvido.svg';

const ProductCard = ({ imgSrc, title }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white p-6 rounded-full transition-transform transform hover:scale-105 shadow-lg mb-2 w-24 h-24 flex items-center justify-center">
        <img src={imgSrc} alt={title} className="w-16 h-16" />
      </div>
      <p className="text-dark-gray font-semibold text-center">{title}</p>
    </div>
  );
};

const ProductOptions = () => {
  return (
    <article className="p-5 pt-10 lg:px-20 bg-light-gray-3">
      <h2 className="text-base text-dark-gray-2 font-semibold mb-5 lg:text-xl md:text-center">Coleções em Destaque</h2>
    
      <section className="flex flex-row items-center gap-5 overflow-x-auto scrollbar-hidden sm:justify-center lg:gap-10">
        <ProductCard imgSrc={camisa} title="Camisetas" />
        <ProductCard imgSrc={calca} title="Calças" />
        <ProductCard imgSrc={bone} title="Bonés" />
        <ProductCard imgSrc={foneOuvido} title="HeadPhones" />
        <ProductCard imgSrc={sapato} title="Tênis" />
      </section>

      <style jsx>{`
        .scrollbar-hidden {
          scrollbar-width: none; /* Firefox */
        }
        .scrollbar-hidden::-webkit-scrollbar {
          display: none; /* Safari e Chrome */
        }
      `}</style>
    </article>
  );
};

export default ProductOptions;
