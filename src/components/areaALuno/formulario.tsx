import React from 'react';
import { Header } from '../header';
import { Footer } from '../footer';
// import calendarioImg from './calendario.png'; // Importe a imagem
import requerimentoPdf from './requerimento.pdf';

export function Formulario() {
  const PDFViewer = () => {
    return (
      <div className="my-8">
        <iframe
          src={requerimentoPdf}
          width="100%"
          height="900px"
          title="Requerimento"
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Header/>
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-maroon-800 mb-10">
          Formulários e Requerimento
        </h1>
          <h2>
            Formulário de requerimento geral - Deve ser preenchido, assinado e enviado para o e-mail da coordenação para qualquer solicitação geral.
          </h2>
        <PDFViewer />
      </main>
      <Footer />
    </div>
  );
}