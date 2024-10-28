import React from 'react';

// assets
import searchGray from '../../assets/searchGray.svg';

const InputText = ({ className = '' }) => {
  return (
    <section className="relative w-full mb-5 lg:mb-0">
      {/* Acessibilidade - label escondido para leitores de tela */}
      <label htmlFor="search" className="sr-only">Pesquisar produto:</label>

      {/* Campo de busca */}
      <input
        type="text"
        id="search"
        placeholder="Pesquisar produto..."
        className={`bg-gray-100 rounded-md p-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-primary ${className}`}
      />

      {/* Ícone de busca */}
      <img 
        src={searchGray} 
        alt="Ícone de pesquisa" 
        className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
      />
    </section>
  );
}

export default InputText;
