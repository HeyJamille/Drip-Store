import React from 'react';
import Slider from 'react-slick';

// assets
import logo from '../assets/cards/White-Sneakers.svg';
import logo2 from '../assets/cards/produc-image-4.png';
import logo3 from '../assets/cards/produc-image-1.png';
import logo4 from '../assets/cards/product-thumb-5.png';
import ornament from '../assets/ornament.svg';
import ornamentComplet from '../assets/ornamentComplet.svg';

// components
import Button from '../components/UI/Button';

// Importa os estilos do carrossel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Logo = () => {
  const options = ["Ver Ofertas"];

  // Configurações do carrossel
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <article
      className="flex flex-col justify-around items-center p-5 pt-[80px] bg-light-gray-3 lg:flex-row-reverse lg:px-20 lg:pt-0"
    >
      {/* Carrossel de Imagens */}
      <section className="self-center ">
        <Slider {...settings} className="w-[250px] md:w-[400px] lg:w-[600px]">
          <div>
            <img src={logo} alt="Imagem de tênis branco da Nike" className="h-[300px] md:h-[400px] lg:h-[600px] w-auto object-cover" />
          </div>
          <div>
            <img src={logo2} alt="Imagem de tênis exemplo 2" className="h-[300px] md:h-[400px] lg:h-[600px] w-auto object-cover" />
          </div>
          <div>
            <img src={logo3} alt="Imagem de tênis exemplo 2" className="h-[300px] md:h-[400px] lg:h-[600px] w-auto object-cover" />
          </div>
          <div>
            <img src={logo4} alt="Imagem de tênis exemplo 2" className="h-[300px] md:h-[400px] lg:h-[600px] w-auto object-cover" />
          </div>
        </Slider>

        {/* Ornamentos Decorativos */}
        <img className="absolute top-0 right-0 mt-[90px] lg:hidden" src={ornament} alt="Ornamento decorativo" />
        <img className="hidden lg:block lg:absolute lg:top-[150px] lg:mt-10 lg:right-10" src={ornamentComplet} alt="Ornamento decorativo" />
      </section>

      {/* Informações e Botão */}
      <section className="flex flex-col gap-5 text-center lg:text-start sm:w-[500px] lg:w-[400px]">
        <div>
          <p className="text-sm font-bold text-primary mb-5 lg:text-base lg:text-warning">Melhores ofertas personalizadas</p>
          <h1 className="text-4xl font-bold text-dark-gray mb-5 lg:text-5xl">Queima de estoque Nike 🔥</h1>
          <p className="text-sm font-semibold text-dark-gray-2 lg:text-base">
            Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
          </p>
        </div>

        <div className="w-full">
          <Button label={options[0]} />
        </div>
      </section>
    </article>
  );
};

export default Logo;
