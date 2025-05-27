import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Header } from './header';

// Nova página de Docentes
export function DocentesPage(props: any) {
  
    return (
      <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
        {/* Header */}
        <main>
          {/* Docentes Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold mb-12 text-center text-maroon-800">Corpo Docente</h1>
              <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
                Nosso corpo docente é composto por profissionais altamente qualificados, com formação acadêmica sólida e 
                experiência tanto no meio acadêmico quanto no mercado de trabalho, garantindo um ensino de qualidade e atualizado.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {props.professors.map(professor => (
                  <div key={professor.id} className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition flex flex-col items-center text-center">
                    <img 
                      src={professor.photo} 
                      alt={professor.name} 
                      className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-maroon-700"
                    />
                    <h3 className="font-bold text-lg mb-2">{professor.name}</h3>
                    <a 
                      href={`mailto:${professor.email}`} 
                      className="text-maroon-700 hover:text-maroon-900 transition"
                    >
                      {professor.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
    </div>
  );
}
