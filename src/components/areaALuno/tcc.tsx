import React, { useState } from 'react';
import { Header } from '../header';
import { Footer } from '../footer';

export function TCC() {
  const [activeTab, setActiveTab] = useState('tcc1');

  // Links para TCC 1
  const linksTCC1 = [
    { nome: "Formulário de Requerimento", url: "https://forms.gle/1RRCL1RyfadTtXcy9" },
  ];

  // Links para TCC 2
  const linksTCC2 = [
    { nome: "Formulário de Requerimento", url: "https://forms.gle/1RRCL1RyfadTtXcy9" },
    { nome: "Modelo de Monografia", url: "https://biblioteca.uepb.edu.br/abnt-guia-de-normalizacao/" },
    { nome: "Agendamento de Banca", url: "https://forms.gle/ajvq9yHyPF1H6K7o6" },
    { nome: "Envio à Biblioteca", url:"https://biblioteca.uepb.edu.br/comunidade-academica-voces-estao-por-dentro-das-mudancas-para-o-deposito-de-tccs-emissao-de-nada-consta-e-termo-de-quitacao-de-tcc/"}
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-maroon-800 mb-10">
          Trabalho de Conclusão de Curso
        </h1>

        {/* Abas de navegação */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            className={`py-4 px-6 font-medium text-lg ${activeTab === 'tcc1' ? 'text-maroon-600 border-b-2 border-maroon-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('tcc1')}
          >
            TCC 1
          </button>
          <button
            className={`py-4 px-6 font-medium text-lg ${activeTab === 'tcc2' ? 'text-maroon-600 border-b-2 border-maroon-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('tcc2')}
          >
            TCC 2
          </button>
        </div>

        {/* Conteúdo TCC 1 */}
        {activeTab === 'tcc1' && (
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-maroon-700 mb-6">Informações sobre TCC 1</h2>  
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Links Úteis</h3>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <ul className="space-y-2">
                    {linksTCC1.map((link, index) => (
                      <li key={index}>
                        <a 
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          {link.nome}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
        )}

        {/* Conteúdo TCC 2 */}
        {activeTab === 'tcc2' && (
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-maroon-700 mb-6">Informações sobre TCC 2</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Links Úteis</h3>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <ul className="space-y-2">
                    {linksTCC2.map((link, index) => (
                      <li key={index}>
                        <a 
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          {link.nome}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
            </div>
          </div>
        )}
      </main>
    </div>
  );
}