// components/EstruturaCurricularPage.tsx
import React, { useState } from 'react';
import { Header } from '../header';
import { Footer } from '../footer'; // Assumindo que você tem um componente Footer
// Importe seus dados de disciplinas aqui
// import { disciplinesData } from '../data/disciplinesData'; // Exemplo

export function EstruturaCurricularPage() {
  // Dados mockados para exemplo (substitua por seus dados reais)
  const disciplinesData = [
    {
      codigo: "CPT01003",
      nome: "ALGORITMOS",
      semestre: 1,
      prerequisitos: [],
      cargaHorariaTotal: 60,
      ementa: "Introdução a algoritmos...",
      referencias: { basica: [], complementar: [] }
    },
    {
      codigo: "CPT01011",
      nome: "LABORATÓRIO DE PROGRAMAÇÃO I",
      semestre: 2,
      prerequisitos: ["CPT01003"],
      cargaHorariaTotal: 60,
      ementa: "Práticas associadas à disciplina de Linguagem de Programação I...",
      referencias: { basica: [], complementar: [] }
    },
    // ... mais disciplinas
  ];

  const [selectedDiscipline, setSelectedDiscipline] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-maroon-800 mb-10">Estrutura Curricular</h1>
        <p className="text-center text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          Explore a organização do curso de Ciência da Computação, visualize o fluxograma de disciplinas e acesse as ementas completas.
        </p>

        {/* Seção do Fluxograma (simplificado para exemplo) */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-maroon-700 mb-6">Fluxograma do Curso</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            {/* Aqui você renderizaria seu fluxograma visual.
                Pode ser um SVG, uma imagem, ou um componente de biblioteca de gráficos.
                Para cada "caixa" de disciplina no fluxograma, adicione um onClick
                para exibir os detalhes. */}
            <p className="text-center text-gray-600">
              [Espaço para o Fluxograma Visual Interativo]
              <br/>
              *Clique em uma disciplina para ver os detalhes abaixo ou em um modal.*
            </p>
            {/* Exemplo de como listar por semestre para o fluxograma */}
            {Array.from(new Set(disciplinesData.map(d => d.semestre))).sort((a, b) => a - b).map(semestre => (
              <div key={semestre} className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Semestre {semestre}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {disciplinesData.filter(d => d.semestre === semestre).map(discipline => (
                    <div
                      key={discipline.codigo}
                      className="bg-gray-100 p-4 rounded-md cursor-pointer hover:bg-gray-200 transition"
                      onClick={() => setSelectedDiscipline(discipline)}
                    >
                      <p className="font-bold">{discipline.nome} ({discipline.codigo})</p>
                      {discipline.prerequisitos.length > 0 && (
                        <p className="text-sm text-gray-600">Pré-req: {discipline.prerequisitos.join(', ')}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Seção de Detalhes da Disciplina (Acordeão) */}
        <section>
          <h2 className="text-3xl font-bold text-maroon-700 mb-6">Ementas e Detalhes das Disciplinas</h2>
          <div className="space-y-4">
            {disciplinesData.map((discipline) => (
              <div key={discipline.codigo} className="bg-white p-6 rounded-lg shadow-md">
                <details>
                  <summary className="text-xl font-bold text-maroon-800 cursor-pointer">
                    {discipline.nome} ({discipline.codigo})
                  </summary>
                  <div className="mt-4 text-gray-700">
                    <p className="mb-2"><strong>Carga Horária:</strong> {discipline.cargaHorariaTotal}h</p>
                    {discipline.prerequisitos.length > 0 && (
                      <p className="mb-2"><strong>Pré-requisitos:</strong> {discipline.prerequisitos.join(', ')}</p>
                    )}
                    <h3 className="font-semibold mt-4 mb-2">Ementa:</h3>
                    <p className="mb-4">{discipline.ementa}</p>
                    <h3 className="font-semibold mb-2">Referências Básicas:</h3>
                    <ul className="list-disc list-inside mb-4">
                      {discipline.referencias.basica.map((ref, i) => <li key={i}>{ref}</li>)}
                    </ul>
                    <h3 className="font-semibold mb-2">Referências Complementares:</h3>
                    <ul className="list-disc list-inside">
                      {discipline.referencias.complementar.map((ref, i) => <li key={i}>{ref}</li>)}
                    </ul>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </section>

        {/* Modal para detalhes da disciplina (opcional, se preferir pop-up) */}
        {selectedDiscipline && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white p-8 rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative">
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
                onClick={() => setSelectedDiscipline(null)}
              >
                &times;
              </button>
              <h2 className="text-3xl font-bold text-maroon-800 mb-4">{selectedDiscipline.nome} ({selectedDiscipline.codigo})</h2>
              <p className="mb-2"><strong>Carga Horária:</strong> {selectedDiscipline.cargaHorariaTotal}h</p>
              {selectedDiscipline.prerequisitos.length > 0 && (
                <p className="mb-2"><strong>Pré-requisitos:</strong> {selectedDiscipline.prerequisitos.join(', ')}</p>
              )}
              <h3 className="font-semibold mt-4 mb-2">Ementa:</h3>
              <p className="mb-4">{selectedDiscipline.ementa}</p>
              <h3 className="font-semibold mb-2">Referências Básicas:</h3>
              <ul className="list-disc list-inside mb-4">
                {selectedDiscipline.referencias.basica.map((ref, i) => <li key={i}>{ref}</li>)}
              </ul>
              <h3 className="font-semibold mb-2">Referências Complementares:</h3>
              <ul className="list-disc list-inside">
                {selectedDiscipline.referencias.complementar.map((ref, i) => <li key={i}>{ref}</li>)}
              </ul>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}