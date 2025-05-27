// src/components/EventCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { EventItem } from '../data/mockData'; // Importa a interface e o tipo

interface EventCardProps {
  event: EventItem;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img src={event.imageUrl} alt={event.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-medium">Data:</span> {event.date}
        </p>
        <p className="text-sm text-gray-600 mb-3">
          <span className="font-medium">Hora:</span> {event.time}
        </p>
        <p className="text-gray-700 text-base mb-4 line-clamp-3">{event.summary}</p>
        <Link to={`/eventos/${event.id}`} className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 ease-in-out">
          Ver detalhes &rarr;
        </Link>
      </div>
    </div>
  );
};