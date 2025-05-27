// src/pages/EventosPage.tsx (atualizado)
import React from 'react';
import { EventCard } from '../components/EventCard';
import { mockEvents } from '../data/mockData';

export const EventosPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">Eventos</h1>
          <p className="text-gray-600 text-center mb-6">Confira os próximos eventos do curso de Ciência da Computação</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockEvents.map((eventItem) => (
            <EventCard key={eventItem.id} event={eventItem} />
          ))}
        </div>
      </div>
    </div>
  );
};