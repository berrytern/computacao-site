// src/pages/NoticiaDetalhePage.tsx (atualizado)
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockNews } from '../data/mockData';
import { getPath } from '@/utils/tools';

export const NoticiaDetalhePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const newsItem = mockNews.find(news => news.id === id);

  if (!newsItem) {
    return (
      <div className="bg-gray-100 min-h-screen py-10">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h1 className="text-3xl font-bold text-red-600 mb-4">Notícia não encontrada</h1>
            <p className="text-gray-600 mb-6">A notícia que você está procurando não existe ou foi removida.</p>
            <Link to={getPath("/noticias")} className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300">
              Voltar para Notícias
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={newsItem.imageUrl} alt={newsItem.title} className="w-full h-96 object-cover" />
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{newsItem.title}</h1>
            <div className="flex items-center text-gray-600 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{newsItem.date}</span>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-800">
              <p>{newsItem.content}</p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <Link to={getPath("/noticias")} className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Voltar para todas as Notícias
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};