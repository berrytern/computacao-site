import React from 'react';
import { Header } from '../header';
import { Footer } from '../footer';

export function Monitoria() {
  // Dados de exemplo para as notícias de estágio

  // Dados de monitoria
  const monitorias = [
    {
      id: 1,
      disciplina: "Algoritmos e Estruturas de Dados",
      professor: "Fábio Luiz Leite Júnior",
      vagas: 2,
      periodo: "2024.2"
    },
    {
      id: 2,
      disciplina: "Programação Web",
      professor: "Dunfrey Pires Aragão",
      vagas: 3,
      periodo: "2024.2"
    },
    {
      id: 3,
      disciplina: "Banco de Dados",
      professor: "Wellington Candeia de Araujo",
      vagas: 1,
      periodo: "2024.2"
    },
    {
      id: 4,
      disciplina: "Inteligência Artificial",
      professor: "Sabrina de Figueiredo Souto",
      vagas: 2,
      periodo: "2024.2"
    }
  ];

  // Dados de selecionados (5 bolsistas e 9 voluntários)
  const selecionados = {
    bolsistas: [
      {
        id: 1,
        nome: "Ana Oliveira",
        matricula: "2028001234",
        projeto: "LINGUAGEM DE PROGRAMAÇÃO I",
        orientador: "Katia Elizabete Galdino"
      },
      {
        id: 2,
        nome: "Bruno Carvalho",
        matricula: "2028002345",
        projeto: "ESTRUTURA DE DADOS",
        orientador: "Kézia de Vasconcelos Oliveira Dantas"
      },
      {
        id: 3,
        nome: "Carla Mendes",
        matricula: "2028003456",
        projeto: "REDES DE COMPUTADORES",
        orientador: "Luciana de Queiroz Leal Gomes"
      },
      {
        id: 4,
        nome: "Daniel Souza",
        matricula: "2028004567",
        projeto: "COMPUTAÇÃO GRÁFICA",
        orientador: "Misael Elias de Morais"
      },
      {
        id: 5,
        nome: "Elaine Costa",
        matricula: "2028005678",
        projeto: "COMPILADORES",
        orientador: "Robson Pequeno de Sousa"
      }
    ],
    voluntarios: [
      {
        id: 1,
        nome: "João Pereira",
        matricula: "2028006789",
        projeto: "PROGRAMAÇÃO WEB",
        orientador: "Antonio Carlos de Albuquerque"
      },
      {
        id: 2,
        nome: "Kátia Santos",
        matricula: "2028007890",
        projeto: "COMPUTAÇÃO DE ALTO DESEMPENHO",
        orientador: "Edson Holanda Cavalcante Junior"
      },
      {
        id: 3,
        nome: "Luiz Fernandes",
        matricula: "2028008901",
        projeto: "TÉCNICAS DE ANÁLISE DE ALGORITMO",
        orientador: "Paulo Eduardo e Silva Barbosa"
      },
      {
        id: 4,
        nome: "Mariana Gonçalves",
        matricula: "2028009012",
        projeto: "TECNOLOGIAS DE DESENVOLVIMENTO DE INTERFACE GRÁFICA",
        orientador: "Vladimir Costa de Alencar"
      },
      {
        id: 5,
        nome: "Nelson Alves",
        matricula: "2028010123",
        projeto: "LINGUAGENS FORMAIS E TEORIA DA COMPUTAÇÃO",
        orientador: "Kézia de Vasconcelos Oliveira Dantas"
      },
      {
        id: 6,
        nome: "Patrícia Lima",
        matricula: "2028011234",
        projeto: "PARADIGMAS DE PROGRAMAÇÃO",
        orientador: "Luciana de Queiroz Leal Gomes"
      },
      {
        id: 7,
        nome: "Ricardo Moraes",
        matricula: "2028012345",
        projeto: "INTELIGÊNCIA ARTIFICIAL",
        orientador: "Misael Elias de Morais"
      },
      {
        id: 8,
        nome: "Sandra Vieira",
        matricula: "2028013456",
        projeto: "Interface Humano-Computador",
        orientador: "Paulo Eduardo e Silva Barbosa"
      },
      {
        id: 9,
        nome: "Tiago Rocha",
        matricula: "2028014567",
        projeto: "ENGENHARIA DE SOFTWARE II",
        orientador: "Robson Pequeno de Sousa"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-80 mb-10">
          Oportunidades Acadêmicas
        </h1>


        {/* Seção de Monitoria */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray mb-6 border-b-2 border-maroon-200 pb-2">
            Vagas de Monitoria
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-gray-70 text-gray">
                <tr>
                  <th className="py-3 px-4 text-left">Disciplina</th>
                  <th className="py-3 px-4 text-left">Professor</th>
                  <th className="py-3 px-4 text-center">Vagas</th>
                  <th className="py-3 px-4 text-left">Período</th>
                  <th className="py-3 px-4 text-center">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {monitorias.map((monitoria) => (
                  <tr key={`monitoria-${monitoria.id}`}>
                    <td className="py-4 px-4">{monitoria.disciplina}</td>
                    <td className="py-4 px-4">{monitoria.professor}</td>
                    <td className="py-4 px-4 text-center">{monitoria.vagas}</td>
                    <td className="py-4 px-4">{monitoria.periodo}</td>
                    <td className="py-4 px-4 text-center">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm py-1 px-3 rounded">
                        Inscrever-se
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Seção de Selecionados */}
        <section>
          <h2 className="text-3xl font-bold text-maroon-700 mb-6 border-b-2 border-maroon-200 pb-2">
            Resultados de Seleção
          </h2>
          
          {/* Bolsistas */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-maroon-600 mb-4">Bolsistas Selecionados</h3>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-maroon-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-maroon-800 uppercase tracking-wider">Nome</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-maroon-800 uppercase tracking-wider">Matrícula</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-maroon-800 uppercase tracking-wider">Projeto</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-maroon-800 uppercase tracking-wider">Orientador</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {selecionados.bolsistas.map((bolsista) => (
                    <tr key={`bolsista-${bolsista.id}`}>
                      <td className="px-6 py-4 whitespace-nowrap">{bolsista.nome}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{bolsista.matricula}</td>
                      <td className="px-6 py-4">{bolsista.projeto}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{bolsista.orientador}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Voluntários */}
          <div>
            <h3 className="text-2xl font-semibold text-maroon-600 mb-4">Voluntários Selecionados</h3>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-maroon-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-maroon-800 uppercase tracking-wider">Nome</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-maroon-800 uppercase tracking-wider">Matrícula</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-maroon-800 uppercase tracking-wider">Projeto</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-maroon-800 uppercase tracking-wider">Orientador</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {selecionados.voluntarios.map((voluntario) => (
                    <tr key={`voluntario-${voluntario.id}`}>
                      <td className="px-6 py-4 whitespace-nowrap">{voluntario.nome}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{voluntario.matricula}</td>
                      <td className="px-6 py-4">{voluntario.projeto}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{voluntario.orientador}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}