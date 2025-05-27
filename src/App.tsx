import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { DocenteCarousel } from './components/carroseldocentes';
import { DocentesPage } from './components/docentes';
import { Header } from './components/header';
import { ScrollToSection } from './components/scrollToSection';
import { AreaAlunoPage } from './components/areaAluno'
import { EstruturaCurricularPage } from './components/areaALuno/estruturaCurricular'
import { Footer } from './components/footer'
import "./index.css";
import { Calendario } from './components/areaALuno/calendario';
import { AccessibilityWidget } from './components/acessibilidade';
import { mockData } from './mock';
import { Formulario } from './components/areaALuno/formulario';
import { NotFound } from './components/notFound';
import { HomePage } from './components/home';


// Dados mockados


function App() {
  return (
    <Router>
      <ScrollToSection/>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/docentes" element={<DocentesPage professors={mockData.professors} />} />
        <Route path="/area-aluno" element={<AreaAlunoPage/>} />
        <Route path="/area-aluno/estrutura-curricular" element={<EstruturaCurricularPage />} />
        <Route path="/area-aluno/calendario" element={<Calendario />} />
        <Route path="/area-aluno/formularios" element={<Formulario />} />
        {/*<Route path="/area-aluno/disciplinas/:codigo" element={<DisciplinaDetalhesPage />} />*/}

        {/* Outras rotas seriam adicionadas aqui */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Footer */}
      <Footer/>

      {/* Accessibility Widget */}
      <AccessibilityWidget/>
    </Router>
  );
}


export { App };