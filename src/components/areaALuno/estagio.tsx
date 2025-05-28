import React from 'react';
import { Header } from '../header';
import { Footer } from '../footer';

export function Estagio() {
  // Dados de exemplo para as notícias de estágio
  const oportunidades = [
    {
      id: 1,
      titulo: "Estágio em Desenvolvimento Web",
      empresa: "Tech Solutions Inc.",
      local: "Remoto",
      data: "15/06/2024",
      descricao: "Oportunidade para estudantes de Ciência da Computação com conhecimentos em React e Node.js."
    },
    {
      id: 2,
      titulo: "Estágio em Ciência de Dados",
      empresa: "Data Analytics Co.",
      local: "São Paulo/SP",
      data: "20/06/2024",
      descricao: "Busca-se estagiários com familiaridade em Python e machine learning."
    },
    {
      id: 3,
      titulo: "Estágio em Segurança da Informação",
      empresa: "CyberSafe Ltda.",
      local: "Belo Horizonte/MG",
      data: "10/07/2024",
      descricao: "Vaga para estudantes interessados em pentest e segurança de redes."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-maroon-800 mb-10">
          Oportunidades de Estágio
        </h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {oportunidades.map((oportunidade) => (
            <div key={oportunidade.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-bold text-maroon-700">{oportunidade.titulo}</h2>
                  <span className="bg-maroon-100 text-maroon-800 text-xs px-2 py-1 rounded">{oportunidade.local}</span>
                </div>
                <h3 className="text-lg text-gray-600 mb-2">{oportunidade.empresa}</h3>
                <p className="text-gray-500 text-sm mb-4">Postado em: {oportunidade.data}</p>
                <p className="text-gray-700 mb-4">{oportunidade.descricao}</p>
                <button className="bg-maroon-600 hover:bg-maroon-700 text-white font-medium py-2 px-4 rounded transition-colors">
                  Candidatar-se
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Dicas para Estágio em Computação</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Atualize seu LinkedIn e portfólio no GitHub</li>
            <li>Participe de hackathons e eventos da área</li>
            <li>Desenvolva projetos pessoais para demonstrar suas habilidades</li>
            <li>Estude estruturas de dados e algoritmos para processos seletivos</li>
          </ul>
        </div>
      </main>
    </div>
  );
}