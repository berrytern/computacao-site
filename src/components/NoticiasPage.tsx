// src/pages/NoticiasPage.tsx (atualizado)
import React from 'react';
import { NewsCard } from '../components/NewsCard';
import { mockNews } from '../data/mockData';

export const NoticiasPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">Notícias</h1>
          <p className="text-gray-600 text-center mb-6">Fique por dentro das últimas novidades do curso de Ciência da Computação</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockNews.map((newsItem) => (
            <NewsCard key={newsItem.id} news={newsItem} />
          ))}
        </div>
      </div>
    </div>
  );
};