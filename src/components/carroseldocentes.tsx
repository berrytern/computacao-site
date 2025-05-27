import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


// Componente de carrossel de docentes para a página principal
export function DocenteCarousel(props: any) {
    const [currentPage, setCurrentPage] = useState(0);
    
    // Calcular o número total de páginas
    const professorsPerPage = 3;
    const totalPages = Math.ceil(props.professors.length / professorsPerPage);

    const nextPage = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const prevPage = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    // Obter os professores da página atual
    const getCurrentTeachers = () => {
        const startIndex = currentPage * professorsPerPage;
        return props.professors.slice(startIndex, startIndex + professorsPerPage);
    };

    return (
        <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-maroon-800">Nossos Docentes</h2>
            
            <div className="relative max-w-6xl mx-auto">
            <div className="flex items-center">
                {/* Botão Anterior */}
                <button 
                onClick={prevPage}
                className="absolute left-0 z-10 bg-white text-maroon-700 p-3 rounded-full cursor-pointer hover:text-gray-400 shadow-md hover:bg-maroon-700  transition-colors duration-300 focus:outline-none -ml-4"
                aria-label="Professores anteriores"
                >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                </button>
                
                {/* Cards dos Professores */}
                <div className="flex-1 mx-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {getCurrentTeachers().map((teacher:any) => (
                    <div 
                        key={teacher.id} 
                        className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                    >
                        <img 
                        src={teacher.photo} 
                        alt={teacher.name}
                        className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-maroon-700 transition-transform duration-300 hover:scale-105"
                        />
                        <h3 className="font-bold text-xl mb-1">{teacher.name}</h3>
                        <a 
                        href={`mailto:${teacher.email}`} 
                        className="text-gray-600 hover:text-maroon-700 transition"
                        onClick={(e) => e.stopPropagation()} // Evita que o clique no email acione o evento do card
                        >
                        {teacher.email}
                        </a>
                    </div>
                    ))}
                </div>
                
                {/* Indicadores de página */}
                <div className="mt-8 flex justify-center space-x-2">
                    {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300  ${
                        index === currentPage ? 'bg-gray-600' : 'bg-gray-300 cursor-pointer'
                        }`}
                        aria-label={`Ir para página ${index + 1}`}
                    />
                    ))}
                </div>
                </div>
                
                {/* Botão Próximo */}
                <button 
                onClick={nextPage}
                className="absolute right-0 z-10 bg-white text-maroon-700 p-3 rounded-full shadow-md hover:bg-maroon-700 cursor-pointer hover:text-gray-400 transition-colors duration-300 focus:outline-none -mr-4"
                aria-label="Próximos professores"
                >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                </button>
            </div>
            
            <div className="text-center mt-8">
                <Link to="/docentes" className="inline-block bg-maroon-700 text-gray px-6 py-3 rounded-md font-medium hover:bg-maroon-800 transition">
                Ver todos os docentes
                </Link>
            </div>
            </div>
        </div>
        </section>
    );
}