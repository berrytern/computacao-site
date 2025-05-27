// components/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from './header';
import { Footer } from './footer';

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-9xl font-bold text-maroon-700 mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-6">Página não encontrada</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto">
            Desculpe, a página que você está procurando não existe ou foi movida.
          </p>
          <Link 
            to="/" 
            className="inline-block bg-maroon-700 text-white px-6 py-3 rounded-md font-medium hover:bg-maroon-800 transition"
          >
            Voltar para a página inicial
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};