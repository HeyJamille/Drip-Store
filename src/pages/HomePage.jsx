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
      {/* Exibe o logotipo */}
      <Logo />

      {/* Seção de Produtos */}
      <ProductCard />
      <ProductOptions /> 

      {/* Seção de Filtros */}
      <FilterGroup />

      {/* Seção de Produtos */}
      <Section />
    </div>
  );
};

export default HomePage;