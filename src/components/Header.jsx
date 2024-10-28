import React, { useState, useRef, useEffect } from 'react';

// assets
import logo from '../assets/logo-header.svg';
import cart from '../assets/mini-cart.svg';
import searchPink from '../assets/searchPink.svg';
import menu from '../assets/menu.svg';

// components
import InputText from './UI/InputText';
import Button from './UI/Button';

const Header = () => {
  // Button options
  const options = ["Entrar", "Cadastrar"];

  // Estado para controlar a visibilidade do input e do menu
  const [isInputVisible, setInputVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Referência para o cabeçalho e altura
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  // Atualiza a altura do cabeçalho quando o componente é montado ou atualizado
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.clientHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight); // Atualiza em caso de redimensionamento

    return () => {
      window.removeEventListener('resize', updateHeaderHeight); // Limpeza
    };
  }, []);

  // Função para abrir/fechar o campo de busca ou o menu
  const handleOpenClose = (type) => {
    if (type === 'input') {
      setInputVisible(!isInputVisible);
      setIsMenuOpen(false); // Fechar o menu ao abrir o input
    } else if (type === 'menu') {
      setIsMenuOpen(!isMenuOpen);
      setInputVisible(false); // Fechar o input ao abrir o menu
    }
  };

  return (
    <>
      <header ref={headerRef} className="flex flex-col gap-5 z-50">
        <section className="flex items-center justify-between mx-[5%] my-[20px]">
          {/* Ícone de menu para telas pequenas */}
          <img className="lg:hidden cursor-pointer" src={menu} onClick={() => handleOpenClose('menu')} alt="Menu" />

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
            <img className="lg:hidden cursor-pointer" src={searchPink} alt="Buscar" onClick={() => handleOpenClose('input')} />

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
          className="fixed inset-0 bg-gray-500 bg-opacity-75 z-20" 
          onClick={() => setIsMenuOpen(false)} 
          style={{ top: `${headerHeight}px` }} // Ajusta o top do overlay de acordo com a altura do cabeçalho
        />
      )}

      {/* Menu visível apenas em telas pequenas quando clicado */}
      {isMenuOpen && (
        <div className={`fixed top-[${headerHeight}px] left-0 flex flex-col justify-between h-full w-[250px] bg-white z-50`}>
          <div className="p-4"> 
            <p className="pb-5 font-bold">Páginas</p>
            <p className="py-1">Home</p>
            <p className="py-1">Produtos</p>
            <p className="py-1">Categorias</p>
            <p className="py-1">Meus pedidos</p>
          </div>
          
          <div className="flex flex-col gap-2 p-4">
            <Button label={options[0]} />
            <p className="underline">Cadastre-se</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
