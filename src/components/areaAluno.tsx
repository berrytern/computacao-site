import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Header } from './header'; // Importe o Header se quiser que ele apareça na página da Área do Aluno
import { Footer } from './footer'; // Importe o Footer
import { getPath } from '@/utils/tools';

export function AreaAlunoPage() {
  const studentAreaSections = [
    {
      title: "Calendário Acadêmico",
      description: "Acompanhe as datas importantes do semestre, como matrículas, provas, feriados e eventos acadêmicos.",
      icon: "📅", // Ícone emoji ou SVG
      link: "/area-aluno/calendario"
    },
    {
        title: "Estrutura Curricular",
        description: "Visualize o fluxograma do curso, pré-requisitos e acesse as ementas completas de todas as disciplinas.",
        icon: "📊", // Ou outro ícone relevante
        link: "/area-aluno/estrutura-curricular"
    },
    {
      title: "Formulários e Requerimentos",
      description: "Acesse e preencha formulários para solicitações diversas, como declarações, histórico escolar, trancamento de matrícula e aproveitamento de estudos.",
      icon: "📄",
      link: "/area-aluno/formularios"
    },
    {
      title: "Oportunidades de Estágio",
      description: "Fique por dentro das vagas de estágio disponíveis, convênios com empresas e orientações para o processo seletivo.",
      icon: "💼",
      link: "/area-aluno/estagios"
    },
    {
      title: "Monitoria",
      description: "Conheça os programas de monitoria, editais e requisitos para aprimorar sua formação acadêmica.",
      icon: "📚",
      link: "/area-aluno/monitoria"
    },
    {
      title: "Iniciação Científica",
      description: "Explore os projetos de iniciação científica, editais e oportunidades de pesquisa.",
      icon: "🔬",
      link: "/area-aluno/iniciacao-cientifica"
    },
    {
      title: "Projetos de Pesquisa e Extensão",
      description: "Explore os projetos de pesquisa e extensão desenvolvidos no curso, oportunidades de participação e resultados alcançados.",
      icon: "💡",
      link: "/area-aluno/projetos"
    },
    {
      title: "Trabalho de Conclusão de Curso (TCC)",
      description: "Informações completas sobre o TCC, incluindo normas, prazos, orientadores e modelos de documentos.",
      icon: "🎓",
      link: "/area-aluno/tcc"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-maroon-800 mb-10">Área do Aluno</h1>
        <p className="text-center text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          Bem-vindo(a) à sua área exclusiva! Aqui você encontra todas as ferramentas e informações necessárias para sua jornada acadêmica no curso de Ciência da Computação da UEPB.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studentAreaSections.map((section, index) => (
            <Link to={getPath(section.link)} key={index} className="block">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center h-full">
                <div className="text-5xl mb-4">{section.icon}</div>
                <h2 className="text-2xl font-bold text-maroon-700 mb-3">{section.title}</h2>
                <p className="text-gray-600 flex-grow">{section.description}</p>
                <button className="mt-6 bg-maroon-700 text-white px-6 py-2 rounded-md font-medium hover:bg-maroon-800 transition">
                  Acessar
                </button>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}