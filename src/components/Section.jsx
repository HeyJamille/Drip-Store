import React from 'react';

// assets
import jordan from '../assets/cards/jordan.svg';

// components
import Button from '../components/UI/Button';

const Section = () => {
  // Button options
  const options = ["Ver Oferta"];

  return (
    <article className="flex flex-col items-center justify-center p-5 pt-10 lg:py-20 lg:px-20 lg:flex-row lg:justify-around">
      {/* Círculo com gradiente e imagem */}
      <section className="flex items-center justify-center mb-10 h-72 w-72 rounded-full bg-gradient-to-b from-[#4200FF40] to-white md:w-[450px] md:h-[450px] md:mb-0">
        <img 
          className="w-full object-cover"
          src={jordan} 
          alt="Air Jordan edição de colecionador" 
        />
      </section>

      {/* Informações da oferta */}
      <section className="flex flex-col gap-5 sm:w-[500px] lg:w-[400px]">
        <h2 className="text-sm text-warning font-bold">Oferta especial</h2>
        <h1 className="text-3xl font-bold text-dark-gray-2 lg:text-4xl">Air Jordan edição de colecionador</h1>
        <p className="text-sm text-dark-gray-2 font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
        </p>

        {/* Botão */}
        <Button label={options[0]} className="mt-4" />
      </section>
    </article>
  );
}

export default Section;
