import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// assets
import logo from '../assets/logo-header.svg';
import cart from '../assets/mini-cart.svg';
import searchPink from '../assets/searchPink.svg';
import menu from '../assets/menu.svg';
import closeIcon from '../assets/close.svg'; // Importa o ícone de fechar

// components
import InputText from './UI/InputText';
import Button from './UI/Button';


const Header = () => {
  // Button options
  const options = ["Entrar", "Cadastrar"];

  // sidebar height 
  const headerHeight = 70;

  // Estado para controlar a visibilidade do input e do menu
  const [isInputVisible, setInputVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para abrir/fechar o campo de busca ou o menu
  const handleOpenClose = (type) => {
    if (type === 'input') {
      setInputVisible(!isInputVisible);
      if (!isInputVisible) {
        setIsMenuOpen(false); // Fecha o menu ao abrir o input
      }
    } else if (type === 'menu') {
      setIsMenuOpen(!isMenuOpen);
      if (!isMenuOpen) {
        setInputVisible(false); // Fecha o input ao abrir o menu
      }
    }
  };

  return (
    <>
      <header className="fixed w-full bg-white flex flex-col gap-5 z-50">
        <section className="flex items-center justify-between mx-[5%] my-[20px]">
          {/* Ícone de menu para telas pequenas */}
          {!isMenuOpen && (
            <img
              className="lg:hidden cursor-pointer"
              src={menu}
              onClick={() => handleOpenClose('menu')}
              alt="Menu"
            />
          )}

          {/* Ícone de fechar - aparece apenas se o menu estiver aberto */}
          {isMenuOpen && (
            <img
              src={closeIcon}
              alt="Fechar"
              className="close-icon lg:hidden cursor-pointer"
              onClick={() => handleOpenClose('menu')}
            />
          )}

          {/* Logo e nome da loja */}
          <div className="flex items-center justify-center lg:w-auto">
            <img className="h-[30px] lg:h-[40px]" src={logo} alt="Logo" />
          </div>

          {/* Campo de busca visível apenas em telas grandes */}
          <div className="hidden lg:flex justify-center w-[400px] mx-4">
            <InputText className="h-12" />
          </div>

          {/* Botões e ações do usuário visíveis em telas grandes */}
          <div className="hidden lg:flex gap-5 items-center">
            <p className="underline">Cadastre-se</p>
            <div>
              <Button label={options[0]} />
            </div>
          </div>

          {/* Ícones de busca e carrinho para todas as telas */}
          <div className="flex items-center">
            {/* Ícone de busca - Clicável em telas pequenas */}
            <img
              className="lg:hidden cursor-pointer"
              src={searchPink}
              alt="Buscar"
              onClick={() => handleOpenClose('input')}
            />

            {/* Ícone do carrinho */}
            <img className="ml-3 lg:h-7" src={cart} alt="Carrinho" />
          </div>
        </section>

        {/* Campo de busca visível apenas em telas pequenas quando clicado */}
        {isInputVisible && (
          <div className="lg:hidden mx-[5%]">
            <InputText className="h-12" />
          </div>
        )}
      </header>

      {/* Overlay cinza */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 z-20" // Ajusta para cobrir toda a tela
          onClick={() => setIsMenuOpen(false)}
          style={{ top: `${headerHeight}px` }} // Ajusta o top do overlay de acordo com a altura do cabeçalho
        />
      )}

      {/* Menu visível apenas em telas pequenas quando clicado */}
      {isMenuOpen && (
        <nav className="fixed left-0 top-[70px] flex flex-col justify-between h-[calc(100vh-70px)] w-[300px] bg-white z-50">
          <ul className="p-4">
            <li className="pb-5 font-bold">Páginas</li>

            <li className="py-2 text-dark-gray-2"> 
              <Link to={"/"}>Home</Link> 
            </li>
            <li className="py-2 text-dark-gray-2">
              <Link to={"/produtos"}>Produtos</Link> 
            </li>
            <li className="py-2 text-dark-gray-2">
              <Link to={"/categorias"}>Categorias</Link>
            </li>
            <li className="py-2 text-dark-gray-2">
              <Link to={"/meus_pedidos"}>Meus pedidos</Link>
            </li>
          </ul>

          {/* Linha Divisória e Botões */}
          <div className="flex flex-col text-center gap-2 p-4">
            <span className="w-full border-t mb-5 border-light-gray"></span>
            <Button label={options[0]} />
            <p className="underline">Cadastre-se</p>
          </div>
        </nav>
      )}

      {/* Menu visível apenas em telas grandes */}
      <div className="hidden lg:flex lg:flex-row lg:gap-5 lg:px-[5%] lg:pb-[10px] lg:pt-[90px]">
        <p className="py-1 text-dark-gray-2">
          <Link to={"/"}>Home</Link>
        </p>
        <p className="py-1 text-dark-gray-2">
          <Link to={"/produtos"}>Produtos</Link> 
        </p>
        <p className="py-1 text-dark-gray-2">
          <Link to={"/categorias"}>Categorias</Link>
        </p>
        <p className="py-1 text-dark-gray-2">
          <Link to={"/meus_pedidos"}>Meus pedidos</Link>
        </p>
      </div>
    </>
  );
};

export default Header;
