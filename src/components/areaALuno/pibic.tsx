import React from 'react';
import { Header } from '../header';
import { Footer } from '../footer';

export function Pibic() {
  // Dados de exemplo para oportunidades de iniciação científica
  const projetos = [
    {
      id: 1,
      titulo: "Inteligência Artificial Aplicada à Saúde",
      professor: "Dr. Carlos Silva",
      departamento: "Ciência da Computação",
      data: "15/06/2024",
      descricao: "Projeto que investiga aplicações de IA no diagnóstico médico por imagem. Requisitos: conhecimento em Python e noções de machine learning.",
      bolsa: true,
      vagas: 2
    },
    {
      id: 2,
      titulo: "Desenvolvimento de Algoritmos Quânticos",
      professor: "Dra. Ana Beatriz",
      departamento: "Ciência da Computação",
      data: "20/06/2024",
      descricao: "Pesquisa em computação quântica com foco em otimização de algoritmos. Aberto a alunos de computação e física.",
      bolsa: false,
      vagas: 1
    },
    {
      id: 3,
      titulo: "Segurança Cibernética em IoT",
      professor: "Prof. Marcelo Costa",
      departamento: "Ciência da Computação",
      data: "10/07/2024",
      descricao: "Estudo de vulnerabilidades em dispositivos IoT e desenvolvimento de protocolos seguros.",
      bolsa: true,
      vagas: 3
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-maroon-800 mb-10">
          Oportunidades de Iniciação Científica
        </h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projetos.map((projeto) => (
            <div key={projeto.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-bold text-maroon-700">{projeto.titulo}</h2>
                  <span className={`text-xs px-2 py-1 rounded ${
                    projeto.bolsa ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {projeto.bolsa ? 'COM BOLSA' : 'VOLUNTÁRIO'}
                  </span>
                </div>
                <h3 className="text-lg text-gray-600 mb-2">Orientador: {projeto.professor}</h3>
                <p className="text-gray-500 text-sm mb-1">Departamento: {projeto.departamento}</p>
                <p className="text-gray-500 text-sm mb-4">Vagas: {projeto.vagas} | Postado em: {projeto.data}</p>
                <p className="text-gray-700 mb-4">{projeto.descricao}</p>
                <div className="flex justify-between items-center">
                  <button className="bg-maroon-600 hover:bg-maroon-700 text-white font-medium py-2 px-4 rounded transition-colors">
                    Mais Informações
                  </button>
                  <span className="text-sm text-gray-500">Prazo: 30 dias</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Benefícios da Iniciação Científica</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Experiência prática em pesquisa acadêmica</li>
            <li>Oportunidade de trabalhar com professores orientadores</li>
            <li>Desenvolvimento de habilidades de pesquisa e metodologia científica</li>
            <li>Possibilidade de publicação de artigos científicos</li>
            <li>Excelente diferencial para mestrado e doutorado</li>
          </ul>
        </div>

        <div className="mt-8 bg-green-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Como se candidatar</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Verifique os requisitos de cada projeto</li>
            <li>Prepare seu currículo acadêmico</li>
            <li>Escreva uma carta de intenção</li>
            <li>Entre em contato com o professor orientador</li>
            <li>Submeta sua candidatura conforme edital</li>
          </ol>
        </div>
      </main>
    </div>
  );
}