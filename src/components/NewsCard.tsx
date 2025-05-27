// src/components/NewsCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { NewsItem } from '../data/mockData'; // Importa a interface e o tipo
import { getPath } from '@/utils/tools';

interface NewsCardProps {
  news: NewsItem;
}

export const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img src={news.imageUrl} alt={news.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{news.title}</h3>
        <p className="text-sm text-gray-600 mb-3">{news.date}</p>
        <p className="text-gray-700 text-base mb-4 line-clamp-3">{news.summary}</p>
        <Link to={getPath(`/noticias/${news.id}`)} className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 ease-in-out">
          Leia mais &rarr;
        </Link>
      </div>
    </div>
  );
};