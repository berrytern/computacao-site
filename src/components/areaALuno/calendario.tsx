import React from 'react';
import { Header } from '../header';
import { Footer } from '../footer';
// import calendarioImg from './calendario.png'; // Importe a imagem
import calendarioPdf from './calendario-reduzido.pdf';

export function Calendario() {
  const PDFViewer = () => {
    return (
      <div className="my-8">
        <iframe
          src={calendarioPdf}
          width="100%"
          height="900px"
          title="Calendário Acadêmico"
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-maroon-800 mb-10">
          Calendário Acadêmico
        </h1>
        <PDFViewer />
      </main>
      <Footer />
    </div>
  );
}