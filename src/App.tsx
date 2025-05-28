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

// Importe as novas páginas
import { NoticiasPage } from './components/NoticiasPage';
import { NoticiaDetalhePage } from './components/NoticiaDetalhePage';
import { EventosPage } from './components/EventosPage';
import { EventoDetalhePage } from './components/EventoDetalhePage';
import { getPath } from './utils/tools';
import { Estagio } from './components/areaALuno/estagio';
import { Monitoria } from './components/areaALuno/monitoria';
import { Pibic } from './components/areaALuno/pibic';
import { Extensao } from './components/areaALuno/pesquisaExtensao';
import { TCC } from './components/areaALuno/tcc';


function App() {
  return (
    <Router aria-label="Conteúdo rolável">
      <ScrollToSection/>
      <Header/>
      <Routes>
        <Route path={getPath("/")} element={<HomePage/>} />
        <Route path={getPath("/docentes")} element={<DocentesPage professors={mockData.professors} />} />
        <Route path={getPath("/area-aluno")} element={<AreaAlunoPage/>} />
        <Route path={getPath("/area-aluno/estrutura-curricular")} element={<EstruturaCurricularPage />} />
        <Route path={getPath("/area-aluno/calendario")} element={<Calendario />} />
        <Route path={getPath("/area-aluno/formularios")} element={<Formulario />} />
        <Route path={getPath("/area-aluno/estagios")} element={<Estagio />} />
        <Route path={getPath("/area-aluno/monitoria")} element={<Monitoria />} />
        <Route path={getPath("/area-aluno/iniciacao-cientifica")} element={<Pibic />} />
        <Route path={getPath("/area-aluno/projetos")} element={<Extensao />} />
        <Route path={getPath("/area-aluno/tcc")} element={<TCC />} />
        {/*<Route path="/area-aluno/disciplinas/:codigo" element={<DisciplinaDetalhesPage />} />*/}
        <Route path={getPath("/noticias")} element={<NoticiasPage />} />
        <Route path={getPath("/noticias/:id")} element={<NoticiaDetalhePage />} /> {/* Rota para detalhes da notícia */}
        <Route path={getPath("/eventos")} element={<EventosPage />} />
        <Route path={getPath("/eventos/:id")} element={<EventoDetalhePage />} /> {/* Rota para detalhes do evento */}
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