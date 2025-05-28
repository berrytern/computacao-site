import React from 'react';
import { Header } from '../header';
import { Footer } from '../footer';

export function Extensao() {
  // Dados de exemplo para projetos de extensão
  const projetos = [
    {
      id: 1,
      titulo: "Informática para a Terceira Idade",
      professor: "Fábio Luiz Leite Júnior",
      local: "Centro Comunitário do Jardim das Flores",
      data: "15/06/2024",
      descricao: "Oficinas de inclusão digital para idosos da comunidade, ensinando noções básicas de computação e internet.",
      vagas: 10,
      horas: 20,
      publico: "Idosos acima de 60 anos",
      prazo: "30/07/2024"
    },
    {
      id: 2,
      titulo: "Programação para Jovens de Escolas Públicas",
      professor: "Ana Isabella Muniz Leite",
      local: "Escola Municipal Professor Antônio Silva",
      data: "20/06/2024",
      descricao: "Introdução à programação através de jogos e atividades lúdicas para estudantes do ensino fundamental.",
      vagas: 15,
      horas: 30,
      publico: "Alunos do 6º ao 9º ano",
      prazo: "15/08/2024"
    },
    {
      id: 3,
      titulo: "Oficinas de Robótica Educacional",
      professor: "Daniel Scherer",
      local: "Biblioteca Municipal Central",
      data: "10/07/2024",
      descricao: "Atividades práticas com kits de robótica para despertar interesse em tecnologia e engenharia.",
      vagas: 12,
      horas: 24,
      publico: "Jovens de 12 a 18 anos",
      prazo: "25/07/2024"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-maroon-800 mb-10">
          Projetos de Extensão Universitária
        </h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projetos.map((projeto) => (
            <div key={projeto.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border-l-4 border-green-600">
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mb-2">
                    PROJETO DE EXTENSÃO
                  </span>
                  <h2 className="text-xl font-bold text-maroon-700">{projeto.titulo}</h2>
                </div>
                
                <div className="space-y-2 mb-4">
                  <p className="text-gray-600"><span className="font-semibold">Orientador:</span> {projeto.professor}</p>
                  <p className="text-gray-600"><span className="font-semibold">Local:</span> {projeto.local}</p>
                  <p className="text-gray-600"><span className="font-semibold">Público-alvo:</span> {projeto.publico}</p>
                  <p className="text-gray-600"><span className="font-semibold">Carga horária:</span> {projeto.horas}h</p>
                </div>
                
                <p className="text-gray-700 mb-4">{projeto.descricao}</p>
                
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm font-medium text-gray-500">Vagas: {projeto.vagas}</span>
                    <span className="mx-2 text-gray-300">|</span>
                    <span className="text-sm text-gray-500">Postado em: {projeto.data}</span>
                  </div>
                  <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition-colors">
                    Inscrever-se
                  </button>
                </div>
                
                <div className="mt-3 text-sm text-gray-500">
                  <span className="font-medium">Prazo de inscrição:</span> {projeto.prazo}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-green-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Benefícios da Extensão Universitária</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Aplicação prática do conhecimento acadêmico</li>
            <li>Contato direto com a comunidade</li>
            <li>Desenvolvimento de habilidades sociais e de comunicação</li>
            <li>Possibilidade de certificação de horas complementares</li>
            <li>Experiência enriquecedora para o currículo</li>
          </ul>
        </div>

        <div className="mt-8 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Como participar</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Verifique os requisitos e público-alvo de cada projeto</li>
            <li>Confira sua disponibilidade para as atividades</li>
            <li>Prepare uma carta de interesse</li>
            <li>Entre em contato com o professor responsável</li>
            <li>Realize sua inscrição dentro do prazo estipulado</li>
          </ol>
        </div>
      </main>
    </div>
  );
}