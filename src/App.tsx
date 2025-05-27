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


// Dados mockados


function App() {
  return (
    <Router>
      <ScrollToSection/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/docentes" element={<DocentesPage professors={mockData.professors} />} />
        <Route path="/area-aluno" element={<AreaAlunoPage/>} />
        <Route path="/area-aluno/estrutura-curricular" element={<EstruturaCurricularPage />} />
        <Route path="/area-aluno/calendario" element={<Calendario />} />
        <Route path="/area-aluno/formularios" element={<Formulario />} />
        // Se optar por páginas dedicadas para disciplinas:
        {/*<Route path="/area-aluno/disciplinas/:codigo" element={<DisciplinaDetalhesPage />} />*/}

        {/* Outras rotas seriam adicionadas aqui */}
      </Routes>
    </Router>
  );
}



function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Efeito para o slider automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mockData.news.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header*/}
      <Header isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen}/>
      <main>
        {/* Hero Banner/Slider */}
        <section 
          className="relative h-[500px] overflow-hidden" 
          aria-label="Notícias em destaque"
          aria-roledescription="carrossel"
        >
          {mockData.news.map((item, index) => (
            <div 
              key={item.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} de ${mockData.news.length}: ${item.title}`}
              aria-hidden={index !== currentSlide}
            >
              <div className="container mx-auto px-4 h-full flex items-center">
                <div className="max-w-2xl text-white">
                  <span className="bg-maroon-700 text-white px-2 py-1 text-sm rounded">{item.date}</span>
                  <h2 className="text-4xl font-bold mt-4 mb-2">{item.title}</h2>
                  <p className="text-xl mb-6">{item.excerpt}</p>
                  <button className="bg-gray-200 text-black px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
                    Leia mais
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          {/* Slider Controls */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2" role="tablist">
            {mockData.news.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
                aria-label={`Ir para slide ${index + 1}`}
                aria-selected={index === currentSlide}
                role="tab"
                aria-controls={`slide-${index}`}
              />
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h2 className="text-3xl font-bold mb-4 text-maroon-800">Sobre o Curso</h2>
                <p className="text-gray-700 mb-4">
                  O curso de Bacharelado em Ciência da Computação da UEPB forma profissionais capacitados para atuar em diversas áreas da tecnologia da informação, 
                  com ênfase em desenvolvimento de software, inteligência artificial, ciência de dados e sistemas distribuídos.
                </p>
                <p className="text-gray-700 mb-6">
                  Com uma infraestrutura moderna e corpo docente altamente qualificado, o curso oferece uma formação sólida, 
                  combinando teoria e prática através de projetos reais e parcerias com empresas do setor.
                </p>
                <Link to="/#sobre" className="inline-block bg-maroon-700 text-gray px-6 py-3 rounded-md font-medium hover:bg-maroon-800 transition">
                  Conheça mais
                </Link>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1581092921461-39b9d08a9b92?q=80&w=2070" 
                  alt="Estudantes de computação" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-maroon-800">Por que estudar Computação na UEPB?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {mockData.reasons.map(reason => (
                <div key={reason.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                  <div className="text-4xl mb-4">{reason.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-maroon-700">{reason.title}</h3>
                  <p className="text-gray-600">{reason.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* News and Events */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-8">
              {/* News Column */}
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-8 text-maroon-800">Notícias</h2>
                <div className="space-y-6">
                  {mockData.news.map(item => (
                    <div key={item.id} className="flex border-b border-gray-200 pb-6">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-24 h-24 object-cover rounded-md mr-4"
                      />
                      <div>
                        <span className="text-sm text-gray-500">{item.date}</span>
                        <h3 className="font-bold text-lg mb-1 hover:text-maroon-700 transition cursor-pointer">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.excerpt}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-6 text-maroon-700 font-medium hover:text-maroon-900 transition flex items-center">
                  Ver todas as notícias
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              
              {/* Events Column */}
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-8 text-maroon-800">Próximos Eventos</h2>
                <div className="space-y-6">
                  {mockData.events.map(event => (
                    <div key={event.id} className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition">
                      <div className="flex items-start">
                        <div className="bg-maroon-700 text-gray rounded-md p-2 text-center mr-4 min-w-[60px]">
                          <span className="block text-xl font-bold">{event.date.split('/')[0]}</span>
                          <span className="block text-sm">{event.date.split('/')[1]}</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-1">{event.title}</h3>
                          <p className="text-gray-600 text-sm mb-1">
                            <span className="font-medium">Horário:</span> {event.time}
                          </p>
                          <p className="text-gray-600 text-sm mb-1">
                            <span className="font-medium">Local:</span> {event.location}
                          </p>
                          <p className="text-gray-600 text-sm">
                            <span className="font-medium">Palestrante:</span> {event.speaker}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-6 text-maroon-700 font-medium hover:text-maroon-900 transition flex items-center">
                  Ver calendário completo
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Galeria</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {mockData.gallery.map(item => (
                <div key={item.id} className="relative overflow-hidden rounded-lg group cursor-pointer">
                  <img 
                    src={item.image} 
                    alt={item.caption}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white font-medium">{item.caption}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <button className="bg-white text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
                Ver mais fotos
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-maroon-800">O que dizem nossos alunos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mockData.testimonials.map(testimonial => (
                <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.photo} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-bold text-lg">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.year}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coordinators */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-maroon-800">Coordenação</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {mockData.coordinators.map(coordinator => (
                <div 
                  key={coordinator.id} 
                  className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center"
                >
                  <img 
                    src={coordinator.photo} 
                    alt={coordinator.name}
                    className="w-32 h-32 rounded-full object-cover mb-4"
                  />
                  <h3 className="font-bold text-xl mb-1">{coordinator.name}</h3>
                  <p className="text-maroon-700 mb-3">{coordinator.role}</p>
                  <a href={`mailto:${coordinator.email}`} className="text-gray-600 hover:text-maroon-700 transition">
                    {coordinator.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
        <DocenteCarousel professors={mockData.professors} />

        {/* CTA */}
        <section className="py-16 bg-maroon-700 text-gray">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Pronto para iniciar sua jornada em Computação?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Venha fazer parte de um dos cursos mais bem avaliados da região e abra portas para um futuro promissor.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-white text-maroon-800 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition">
                Processo seletivo
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white/10 transition">
                Agende uma visita
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer/>

      {/* Accessibility Widget */}
      <AccessibilityWidget/>
    </div>
  );
}

export { App };