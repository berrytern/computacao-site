import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Header } from './header';

// Nova página de Docentes
export function DocentesPage(props: any) {
  
    return (
      <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
        {/* Header */}
        <Header isMobileMenuOpen={props.isMobileMenuOpen} setIsMobileMenuOpen={props.setIsMobileMenuOpen}/>
  
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
  
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Ciência da Computação</h3>
                <p className="text-gray-400 mb-4">
                  Universidade Estadual da Paraíba<br />
                  Campus I - Campina Grande<br />
                  Rua Baraúnas, 351 - Universitário<br />
                  CEP 58429-500
                </p>
                <div className="flex space-x-4">
                  <a href="https://instagram.com/compuepb"  rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://t.me/+OmR1fzcJXSoxZDkx"  rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.198l-1.531 7.223c-.116.547-.43.681-.87.424l-2.404-1.772-1.16 1.117c-.128.128-.236.236-.484.236l.172-2.44 4.443-4.013c.193-.172-.042-.267-.298-.095L8.338 12.48l-2.36-.737c-.514-.16-.523-.514.107-.76l9.223-3.55c.425-.16.8.096.654.764z" />
                    </svg>
                  </a>
                  <a href="https://www.youtube.com/channel/UCExample"  rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
                <ul className="space-y-2">
                  <li><Link to="/sobre" className="text-gray-400 hover:text-white transition">Sobre o Curso</Link></li>
                  <li><Link to="/docentes" className="text-gray-400 hover:text-white transition">Corpo Docente</Link></li>
                  <li><Link to="/disciplinas" className="text-gray-400 hover:text-white transition">Grade Curricular</Link></li>
                  <li><Link to="/projetos" className="text-gray-400 hover:text-white transition">Projetos de Pesquisa</Link></li>
                  <li><Link to="/eventos" className="text-gray-400 hover:text-white transition">Eventos</Link></li>
                  <li><Link to="/contato" className="text-gray-400 hover:text-white transition">Contato</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Área do Aluno</h3>
                <ul className="space-y-2">
                  <li><Link to="/area-aluno/calendario" className="text-gray-400 hover:text-white transition">Calendário Acadêmico</Link></li>
                  <li><Link to="/area-aluno/formularios" className="text-gray-400 hover:text-white transition">Formulários</Link></li>
                  <li><Link to="/area-aluno/estagios" className="text-gray-400 hover:text-white transition">Estágios</Link></li>
                  <li><Link to="/area-aluno/tcc" className="text-gray-400 hover:text-white transition">TCC</Link></li>
                  <li><Link to="/area-aluno/monitoria" className="text-gray-400 hover:text-white transition">Monitoria</Link></li>
                  <li><Link to="/area-aluno/iniciacao-cientifica" className="text-gray-400 hover:text-white transition">Iniciação Científica</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Contato</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:coord.computacao.cct@setor.uepb.edu.br" className="text-gray-400 hover:text-white transition">coord.computacao.cct@setor.uepb.edu.br</a>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-400">(83) 3344-5300</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-400">Rua Baraúnas, 351 - Universitário, Campina Grande - PB, 58429-500</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-0.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-400">Horário de Atendimento: Seg-Sex, 8h às 17h</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 Ciência da Computação - UEPB. Todos os direitos reservados.</p>
            <div className="mt-4 md:mt-0">
              <a href="/acessibilidade" className="text-gray-400 hover:text-white text-sm mr-4 transition">Acessibilidade</a>
              <a href="/privacidade" className="text-gray-400 hover:text-white text-sm transition">Política de Privacidade</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Accessibility Widget */}
      <div className="fixed bottom-4 right-4 z-50">
        <button 
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
          aria-label="Opções de acessibilidade"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
