import React from 'react';
import { Outlet } from 'react-router-dom';

// components
import Header from '../components/Header';
import Footer from '../components/Footer';

const PageLayout = () => {
  return (
    <div className="flex flex-col"> {/* Garante que o layout ocupe a tela inteira */}
      <Header />

      <div className="mt-[70px] lg:mt-0"> {/* Use uma margem negativa igual à altura do cabeçalho */}
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default PageLayout;
