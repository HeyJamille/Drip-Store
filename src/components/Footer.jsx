import React from 'react';

// assets
import logo from '../assets/logo-footer.svg';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import twitter from '../assets/twitter.svg';

const Footer = () => {
  return (
    <footer className="flex flex-col gap-5 bg-dark-gray text-white mt-5 p-5 pt-10 lg:mt-0 lg:px-20 ">
      <article className="flex flex-col gap-7 md:flex-row md:justify-between lg:gap-20">
        {/* Logo e Descrição */}
        <section className="flex flex-col gap-7 md:w-1/3">
          <div className="flex flex-col gap-5">
            <img src={logo} alt="Logo da Drip Store" className="w-36 lg:w-48" />
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>

          {/* Redes Sociais */}
          <div className="flex gap-7 lg:gap-10">
            <img src={facebook} alt="Facebook" />
            <img src={instagram} alt="Instagram" />
            <img src={twitter} alt="Twitter" />
          </div>
        </section>

        {/* Links de Informação */}
        <section className="flex flex-row gap-16 md:justify-center md:w-1/3">
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-semibold">Informação</h3>
            <p className="text-sm">Sobre Drip Store</p>
            <p className="text-sm">Segurança</p>
            <p className="text-sm">Wishlist</p>
            <p className="text-sm">Blog</p>
            <p className="text-sm">Trabalhe conosco</p>
            <p className="text-sm">Meus Pedidos</p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-base font-semibold">Categorias</h3>
            <p className="text-sm">Camisetas</p>
            <p className="text-sm">Calças</p>
            <p className="text-sm">Bonés</p>
            <p className="text-sm">Headphones</p>
            <p className="text-sm">Tênis</p>
          </div>
        </section>

        {/* Contato */}
        <section className="flex flex-col gap-2 md:w-1/3">
          <h3 className="text-base font-semibold">Contato</h3>
          <p className="text-sm mb-5">Av. Santos Dumont, 1510 - 1º andar - Aldeota, Fortaleza - CE, 60150-161</p>
          <p className="text-sm">(85) 3051-3411</p>
        </section>
      </article>

      {/* Linha Divisória e Direitos Autorais */}
      <article className="flex flex-col items-center w-full ">
        <span className="w-full  border-t border-light-gray"></span>
        <p className="text-xs text-center text-white pt-5">@ 2022 Digital College</p>
      </article>
    </footer>
  );
};

export default Footer;
