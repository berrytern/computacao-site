// components/EstruturaCurricularPage.tsx
import React, { useState } from 'react';
import { Header } from '../header';
import { Footer } from '../footer';
import { Link } from 'react-router-dom';

export function EstruturaCurricularPage() {
  // Estado para controlar a disciplina selecionada
  const [selectedDiscipline, setSelectedDiscipline] = useState(null);
  
  // Dados mockados das disciplinas (substitua pelos dados reais)
  const disciplinesData = [
    {
      codigo: "CPT01003",
      nome: "ALGORITMOS",
      semestre: 1,
      cargaHoraria: "60H",
      categoria: "especifica", // Corresponde à cor no fluxograma
      prerequisitos: [],
      ementa: "Introdução a algoritmos. Formas de representação. Tipos de dados, expressões aritméticas e lógicas. Constantes, variáveis, operadores, comandos de entrada e saída. Estruturas condicionais e repetição. Manipulação de funções numéricas. Vetores e matrizes. Modularização: Procedimento. Função. Introdução às técnicas de análise de algoritmos: Notação Big Oh, Big Theta e Big Omega e Análise Assintótica. Algoritmos de pesquisa de dados e de ordenação em memória principal.",
      referencias: {
        basica: [
          "Xavier, G.F.C.. Lógica de Programação. Editora Senac.",
          "Cormen, T.H.. Algoritmos – Teoria e Prática. Editora Campus. 2002."
        ],
        complementar: [
          "Forbellone, A.L.V., Eberspacher, H.F.. Lógica de Programação. Makron Books. 2000.",
          "Pereira, S.doL.. Estrutura de Dados Fundamentais. E. Érica. 2004.",
          "Ziviani, N.. Projetos de Algoritmos. Ed Pioneira. 1999."
        ]
      }
    },
    {
        codigo: "CPT01011",
        nome: "LABORATÓRIO DE PROGRAMAÇÃO I",
        semestre: 2,
        prerequisitos: ["CPT01003"],
        categoria: "especifica", // Corresponde à cor no fluxograma
        cargaHoraria: "60H",
        ementa: "Práticas associadas à disciplina de Linguagem de Programação I...",
        referencias: { basica: [], complementar: [] }
    },
    // ... adicione mais disciplinas
  ];

  // Função para obter a cor da disciplina baseada na categoria
  const getCategoryColor = (category:string) => {
    const colorMap = {
      geral: "bg-green-200 border-green-500",
      tecnologica: "bg-blue-200 border-blue-500",
      especifica: "bg-orange-200 border-orange-500",
      eletiva: "bg-yellow-200 border-yellow-500",
      tcc: "bg-purple-200 border-purple-500"
    };
    return colorMap[category] || "bg-gray-200 border-gray-500";
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Painel de navegação lateral */}
          <div className="md:w-1/4">
            <div className="bg-white p-4 rounded-lg shadow-md sticky top-4">
              <h3 className="text-xl font-bold text-maroon-800 mb-4">Navegação</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#fluxograma" className="text-maroon-700 hover:text-maroon-900">
                    Fluxograma do Curso
                  </a>
                </li>
                <li>
                  <a href="#ementas" className="text-maroon-700 hover:text-maroon-900">
                    Ementas das Disciplinas
                  </a>
                </li>
                <li>
                  <a href="#info" className="text-maroon-700 hover:text-maroon-900">
                    Informações Adicionais
                  </a>
                </li>
              </ul>
              
              <h3 className="text-xl font-bold text-maroon-800 mt-6 mb-4">Legenda</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-200 border border-green-500 mr-2"></div>
                  <span className="text-sm">Disciplinas Gerais</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-200 border border-blue-500 mr-2"></div>
                  <span className="text-sm">Disciplinas Tecnológicas Básicas</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-orange-200 border border-orange-500 mr-2"></div>
                  <span className="text-sm">Disciplinas Específicas</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-yellow-200 border border-yellow-500 mr-2"></div>
                  <span className="text-sm">Disciplinas Eletivas</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-purple-200 border border-purple-500 mr-2"></div>
                  <span className="text-sm">TCC</span>
                </div>
              </div>
            </div>
          </div>

          {/* Conteúdo principal */}
          <div className="md:w-3/4">
            <h1 className="text-4xl font-bold text-maroon-800 mb-6">Estrutura Curricular</h1>
            <p className="text-gray-700 mb-8">
              A estrutura curricular do curso de Ciência da Computação da UEPB está organizada em 8 semestres, 
              com disciplinas distribuídas em diferentes áreas de formação. Explore o fluxograma abaixo para 
              visualizar a sequência de disciplinas e seus pré-requisitos, e acesse as ementas completas de cada componente curricular.
            </p>

            {/* Seção do Fluxograma */}
            <section id="fluxograma" className="mb-16">
              <h2 className="text-3xl font-bold text-maroon-700 mb-6">Fluxograma do Curso</h2>
              <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
                {/* Aqui você manteria o fluxograma existente, mas tornando-o interativo */}
                <div className="min-w-[1000px]"> {/* Garante que o fluxograma tenha um tamanho mínimo para visualização */}
                  {/* Fluxograma por semestre */}
                  {Array.from({ length: 8 }, (_, i) => i + 1).map(semestre => (
                    <div key={semestre} className="mb-8">
                      <h3 className="text-xl font-semibold text-maroon-800 mb-4 border-b-2 border-maroon-200 pb-2">
                        {semestre}º Semestre
                      </h3>
                      <div className="grid grid-cols-3 gap-4">
                        {disciplinesData
                          .filter(d => d.semestre === semestre)
                          .map(discipline => (
                            <div 
                              key={discipline.codigo}
                              className={`${getCategoryColor(discipline.categoria)} p-4 rounded-lg border-2 cursor-pointer transition-transform hover:scale-105`}
                              onClick={() => setSelectedDiscipline(discipline)}
                            >
                              <h4 className="font-bold text-gray-900">{discipline.nome}</h4>
                              <p className="text-sm text-gray-700">{discipline.codigo}</p>
                              <p className="text-sm text-gray-700">{discipline.cargaHoraria}</p>
                              {discipline.prerequisitos.length > 0 && (
                                <p className="text-xs text-gray-600 mt-2">
                                  <span className="font-semibold">Pré-requisitos:</span> {discipline.prerequisitos.join(', ')}
                                </p>
                              )}
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-center text-gray-600 mt-4 italic">
                  Clique em uma disciplina para visualizar sua ementa completa.
                </p>
              </div>
            </section>

            {/* Seção de Ementas */}
            <section id="ementas" className="mb-16">
              <h2 className="text-3xl font-bold text-maroon-700 mb-6">Ementas das Disciplinas</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="mb-4">
                  Selecione uma disciplina no fluxograma acima ou explore as ementas por semestre abaixo:
                </p>

                {/* Acordeão de disciplinas por semestre */}
                {Array.from({ length: 8 }, (_, i) => i + 1).map(semestre => (
                  <details key={semestre} className="mb-4">
                    <summary className="font-bold text-lg text-maroon-800 cursor-pointer py-2 border-b border-gray-200">
                      {semestre}º Semestre
                    </summary>
                    <div className="mt-4 pl-4 space-y-6">
                      {disciplinesData
                        .filter(d => d.semestre === semestre)
                        .map(discipline => (
                          <details key={discipline.codigo} className="border-b border-gray-100 pb-4">
                            <summary className="font-semibold cursor-pointer">
                              {discipline.nome} ({discipline.codigo}) - {discipline.cargaHoraria}
                            </summary>
                            <div className="mt-2 pl-4">
                              <h4 className="font-semibold mt-2">Ementa:</h4>
                              <p className="text-gray-700 mb-4">{discipline.ementa}</p>
                              
                              <h4 className="font-semibold">Bibliografia Básica:</h4>
                              <ul className="list-disc list-inside mb-4">
                                {discipline.referencias.basica.map((ref, idx) => (
                                  <li key={idx} className="text-gray-700">{ref}</li>
                                ))}
                              </ul>
                              
                              <h4 className="font-semibold">Bibliografia Complementar:</h4>
                              <ul className="list-disc list-inside">
                                {discipline.referencias.complementar.map((ref, idx) => (
                                  <li key={idx} className="text-gray-700">{ref}</li>
                                ))}
                              </ul>
                            </div>
                          </details>
                        ))}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Informações Adicionais */}
            <section id="info" className="mb-16">
              <h2 className="text-3xl font-bold text-maroon-700 mb-6">Informações Adicionais</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-maroon-800 mb-4">Carga Horária Total</h3>
                <p className="text-gray-700 mb-6">
                  O curso de Bacharelado em Ciência da Computação possui carga horária total de 3.680 horas, 
                  distribuídas ao longo de 8 semestres (4 anos).
                </p>

                <h3 className="text-xl font-semibold text-maroon-800 mb-4">Distribuição da Carga Horária</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr>
                        <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left">Dimensão Formativa</th>
                        <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-center">Carga Horária</th>
                        <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-center">Percentual</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border-b border-gray-200">Básico Comum</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-center">1.080h</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-center">29,3%</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b border-gray-200">Básico Específico</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-center">1.800h</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-center">48,9%</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b border-gray-200">Estágio Supervisionado</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-center">300h</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-center">8,2%</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b border-gray-200">TCC</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-center">120h</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-center">3,3%</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b border-gray-200">Complementar</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-center">200h</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-center">5,4%</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b border-gray-200">Livres</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-center">180h</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-center">4,9%</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-2 px-4 border-b border-gray-200 font-bold">Total</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-center font-bold">3.680h</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-center font-bold">100%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-maroon-800 mb-4">Disciplinas Eletivas</h3>
                <p className="text-gray-700 mb-4">
                  O curso oferece as seguintes disciplinas eletivas, das quais o aluno deve cursar um mínimo de 180 horas:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                  <li>Tópicos Especiais em Computação I (60h)</li>
                  <li>Tópicos Especiais em Computação II (60h)</li>
                  <li>Tópicos Especiais em Computação III (60h)</li>
                  <li>Tópicos Especiais em Computação IV (60h)</li>
                  <li>Tópicos Especiais em Computação V (60h)</li>
                  <li>Tópicos Especiais em Computação VI (60h)</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Modal para visualização da ementa quando uma disciplina é clicada no fluxograma */}
      {selectedDiscipline && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
              onClick={() => setSelectedDiscipline(null)}
            >
              &times;
            </button>
            <div className={`${getCategoryColor(selectedDiscipline.categoria)} inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4`}>
              {selectedDiscipline.semestre}º Semestre
            </div>
            <h2 className="text-3xl font-bold text-maroon-800 mb-2">{selectedDiscipline.nome}</h2>
            <p className="text-gray-600 mb-4">{selectedDiscipline.codigo} | {selectedDiscipline.cargaHoraria}</p>
            
            {selectedDiscipline.prerequisitos.length > 0 && (
              <div className="mb-4">
                <h3 className="font-semibold text-gray-800">Pré-requisitos:</h3>
                <p className="text-gray-700">{selectedDiscipline.prerequisitos.join(', ')}</p>
              </div>
            )}
            
            <div className="mb-4">
              <h3 className="font-semibold text-gray-800">Ementa:</h3>
              <p className="text-gray-700">{selectedDiscipline.ementa}</p>
            </div>
            
            <div className="mb-4">
              <h3 className="font-semibold text-gray-800">Bibliografia Básica:</h3>
              <ul className="list-disc list-inside text-gray-700">
                {selectedDiscipline.referencias.basica.map((ref, idx) => (
                  <li key={idx}>{ref}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800">Bibliografia Complementar:</h3>
              <ul className="list-disc list-inside text-gray-700">
                {selectedDiscipline.referencias.complementar.map((ref, idx) => (
                  <li key={idx}>{ref}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
}