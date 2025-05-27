import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


// Componente de Header
export function Header(props: any) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
    <div className="bg-gray-50 text-gray-800 font-sans">
    <header className="bg-white shadow-md">
    <div className="container mx-auto px-4">
    <div className="flex justify-between items-center py-4">
        <div className="flex items-center">
        <img 
            src="https://upload.wikimedia.org/wikipedia/commons/7/77/Marca-da-UEPB-Aplica%C3%A7%C3%A3o-Colorida-em-PNG-1.png" 
            alt="Logo da Universidade UEPB - Departamento de Ciência da Computação" 
            className="h-12 mr-3"
        />
        <div className="border-l-2 border-gray-300 pl-3">
            <h1 className="text-xl font-bold text-maroon-700">Ciência da Computação</h1>
            <p className="text-sm text-gray-600">Campus I - Campina Grande</p>
        </div>
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
        <Link to="/" className="text-maroon-700 font-medium hover:text-maroon-900 transition">Início</Link>
        <Link to="/#sobre" className="text-gray-700 font-medium hover:text-maroon-700 transition">Sobre</Link>
        <Link to="/noticias" className="text-gray-700 font-medium hover:text-maroon-700 transition">Noticias</Link>
        <Link to="/eventos" className="text-gray-700 font-medium hover:text-maroon-700 transition">Eventos</Link>
        <Link to="/docentes" className="text-gray-700 font-medium hover:text-maroon-700 transition">Docentes</Link>
        {/*<Link to="/disciplinas" className="text-gray-700 font-medium hover:text-maroon-700 transition">Disciplinas</Link>*/}
        <Link to="/projetos" className="text-gray-700 font-medium hover:text-maroon-700 transition">Projetos</Link>
        <Link to="/#contato" className="text-gray-700 font-medium hover:text-maroon-700 transition">Contato</Link>
        <Link to="/area-aluno" className="bg-maroon-700 text-gray-700 px-4 py-2 rounded-md hover:bg-maroon-800 transition">Área do Aluno</Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
        className="md:hidden text-gray-700"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        </button>
    </div>
    
    {/* Mobile Menu */}
    {isMobileMenuOpen && (
        <div className="md:hidden py-4 border-t border-gray-200">
        <div className="flex flex-col space-y-3">
            <Link to="/" className="text-maroon-700 font-medium hover:text-maroon-900 transition">Início</Link>
            <Link to="/#sobre" className="text-gray-700 font-medium hover:text-maroon-700 transition">Sobre</Link>
            <Link to="/noticias" className="text-gray-700 font-medium hover:text-maroon-700 transition">Noticias</Link>
            <Link to="/eventos" className="text-gray-700 font-medium hover:text-maroon-700 transition">Eventos</Link>
            <Link to="/docentes" className="text-gray-700 font-medium hover:text-maroon-700 transition">Docentes</Link>
            {/*<Link to="/disciplinas" className="text-gray-700 font-medium hover:text-maroon-700 transition">Disciplinas</Link>*/}
            <Link to="/projetos" className="text-gray-700 font-medium hover:text-maroon-700 transition">Projetos</Link>
            <Link to="/#contato" className="text-gray-700 font-medium hover:text-maroon-700 transition">Contato</Link>
            <Link to="/area-aluno" className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition text-center">Área do Aluno</Link>
        </div>
        </div>
    )}
    </div>
    </header></div>)
}