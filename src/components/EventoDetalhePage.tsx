// src/pages/EventoDetalhePage.tsx (atualizado)
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockEvents } from '../data/mockData';
import { getPath } from '@/utils/tools';

export const EventoDetalhePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const eventItem = mockEvents.find(event => event.id === id);

  if (!eventItem) {
    return (
      <div className="bg-gray-100 min-h-screen py-10">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h1 className="text-3xl font-bold text-red-600 mb-4">Evento não encontrado</h1>
            <p className="text-gray-600 mb-6">O evento que você está procurando não existe ou foi removido.</p>
            <Link to={getPath("/eventos")} className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300">
              Voltar para Eventos
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
          <img src={eventItem.imageUrl} alt={eventItem.title} className="w-full h-96 object-cover" />
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{eventItem.title}</h1>
            
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <div className="flex items-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-700"><span className="font-medium">Data:</span> {eventItem.date}</span>
              </div>
              
              <div className="flex items-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700"><span className="font-medium">Hora:</span> {eventItem.time}</span>
              </div>
              
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-700"><span className="font-medium">Local:</span> {eventItem.location}</span>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-800">
              <p>{eventItem.content}</p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <Link to={getPath("/eventos")} className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Voltar para todos os Eventos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};