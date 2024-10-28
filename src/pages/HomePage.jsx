import React from 'react';

// components
import Header from '../components/Header';
import Logo from '../components/Logo';
import ProductCard from '../components/ProductCard';
import ProductOptions from '../components/ProductOptions';
import FilterGroup from '../components/FilterGroup';
import Section from '../components/Section';

const HomePage = ({ children }) => {
  return (
    <div>
      {/* Componente do cabeçalho */}
      <Header />

      {/* Conteúdo dinâmico das páginas */}
      <Logo />
      <ProductCard />
      <ProductOptions /> 
      <FilterGroup />
      <Section />
    
      {/* Componente do rodapé 
      <Footer />
      */ }
    </div>
  );
};

export default HomePage;