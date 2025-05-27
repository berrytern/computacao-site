import React from 'react';
import { Header } from '../header';
import { Footer } from '../footer';
// import calendarioImg from './calendario.png'; // Importe a imagem
import calendarioPdf from './calendario-reduzido.pdf';

// Componente adaptado para GitHub Pages
export function Calendario() {
  // Detecta se estamos em produção (GitHub Pages)
  const isProduction = process.env.NODE_ENV === 'production';
  // Base path para GitHub Pages
  const pdfPath = isProduction ? '/computacao-site'+ calendarioPdf.slice(1) : calendarioPdf;
  
  
  // Se você estiver usando importação dinâmica, o bundler já cuida disso
  // Então você pode simplesmente usar:
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-maroon-800 mb-10">
          Calendário Acadêmico
        </h1>
        <div className="my-8">
          <iframe
            src={pdfPath} // Já contém o caminho correto com hash
            width="100%"
            height="900px"
            title="Calendário Acadêmico"
          />
        </div>
      </main>
    </div>
  );
}