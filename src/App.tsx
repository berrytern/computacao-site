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


// Dados mockados
const mockData = {
  news: [
    {
      id: 1,
      title: "Inscrições abertas para o processo seletivo de monitoria 2025.1",
      date: "20/05/2025",
      excerpt: "As inscrições vão até 30/05/2025. Confira as disciplinas disponíveis e os requisitos.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070"
    },
    {
      id: 2,
      title: "Semana de Computação UEPB acontecerá em agosto",
      date: "15/05/2025",
      excerpt: "O evento contará com palestras, workshops e hackathon. Programação completa em breve.",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012"
    },
    {
      id: 3,
      title: "Novo laboratório de Inteligência Artificial será inaugurado",
      date: "10/05/2025",
      excerpt: "O espaço contará com equipamentos de última geração para pesquisa e desenvolvimento.",
      image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=2070"
    }
  ],
  events: [
    {
      id: 1,
      title: "Palestra: Mercado de Trabalho em IA",
      date: "28/05/2025",
      time: "19h",
      location: "Auditório Central",
      speaker: "Dra. Maria Silva (Google)"
    },
    {
      id: 2,
      title: "Workshop: Desenvolvimento Web com React",
      date: "05/06/2025",
      time: "14h",
      location: "Laboratório 3",
      speaker: "Prof. João Santos"
    },
    {
      id: 3,
      title: "Defesa de TCC: Sistemas de Recomendação",
      date: "10/06/2025",
      time: "10h",
      location: "Sala 201",
      speaker: "Aluno: Pedro Oliveira"
    }
  ],
  testimonials: [
    {
      id: 1,
      name: "Ana Beatriz",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      year: "Egressa 2023",
      text: "O curso me proporcionou uma base sólida para ingressar no mercado. Hoje trabalho como desenvolvedora full-stack em uma empresa multinacional."
    },
    {
      id: 2,
      name: "Lucas Mendes",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      year: "8º período",
      text: "As oportunidades de iniciação científica e os projetos práticos foram fundamentais para minha formação. Recomendo fortemente o curso."
    },
    {
      id: 3,
      name: "Camila Rocha",
      photo: "https://randomuser.me/api/portraits/women/68.jpg",
      year: "Egressa 2022",
      text: "Graças ao networking e à qualidade do ensino, consegui uma bolsa para mestrado no exterior logo após me formar."
    }
  ],
  gallery: [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070",
      caption: "Hackathon UEPB 2024"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070",
      caption: "Visita técnica à empresa de tecnologia"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070",
      caption: "Equipe vencedora da Maratona de Programação"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070",
      caption: "Apresentação de projetos de IA"
    }
  ],
  reasons: [
    {
      id: 1,
      icon: "🎓",
      title: "Corpo docente qualificado",
      text: "90% dos professores com doutorado e ampla experiência acadêmica e profissional."
    },
    {
      id: 2,
      icon: "💻",
      title: "Infraestrutura moderna",
      text: "Laboratórios equipados com tecnologia de ponta para desenvolvimento e pesquisa."
    },
    {
      id: 3,
      icon: "🔬",
      title: "Pesquisa e inovação",
      text: "Grupos de pesquisa ativos em diversas áreas da computação com publicações internacionais."
    },
    {
      id: 4,
      icon: "🌐",
      title: "Conexão com o mercado",
      text: "Parcerias com empresas para estágios, visitas técnicas e projetos reais."
    }
  ],
  coordinators: [
    {
      id: 1,
      name: "Ana Isabella Muniz Leite",
      role: "Coordenadora",
      photo: "https://randomuser.me/api/portraits/women/76.jpg",
      email: "ana.leite@setor.uepb.edu.br"
    },
    {
      id: 2,
      name: "Janderson Jason Barbosa Aguiar",
      role: "Coordenador Adjunto",
      photo: "https://randomuser.me/api/portraits/men/52.jpg",
      email: "janderson.aguiar@setor.uepb.edu.br"
    }
  ],
 // Nova seção de docentes
  professors: [
    {
      id: 1,
      name: "Ana Isabella Muniz Leite",
      email: "isabella@servidor.uepb.edu.br",
      photo: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      id: 2,
      name: "Antonio Carlos de Albuquerque",
      email: "antoniocarlosdc@uepb.edu.br",
      photo: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      id: 3,
      name: "Cheyenne Ribeiro Guedes Isidro",
      email: "charibeiro@servidor.uepb.edu.br",
      photo: "https://randomuser.me/api/portraits/women/3.jpg"
    },
    {
      id: 4,
      name: "Daniel Scherer",
      email: "scherer@servidor.uepb.edu.br",
      photo: "https://randomuser.me/api/portraits/men/4.jpg"
    },
    {
      id: 5,
      name: "Dunfrey Pires Aragão",
      email: "dunfrey.aragao@servidor.uepb.edu.br",
      photo: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
      id: 6,
      name: "Edson Holanda Cavalcante Junior",
      email: "edsonholanda@uepb.edu.br",
      photo: "https://randomuser.me/api/portraits/men/6.jpg"
    },
    {
      id: 7,
      name: "Eduardo Jorge Valadares Oliveira",
      email: "edujvo@servidor.uepb.edu.br",
      photo: "https://randomuser.me/api/portraits/men/7.jpg"
    },
    {
      id: 8,
      name: "Fábio Luiz Leite Júnior",
      email: "fabioleite@servidor.uepb.edu.br",
      photo: "https://randomuser.me/api/portraits/men/8.jpg"
    },
    {
      id: 9,
      name: "Frederico Moreira Bublitz",
      email: "fredbublitz@servidor.uepb.edu.br",
      photo: "https://randomuser.me/api/portraits/men/9.jpg"
    },
    {
      id: 10,
      name: "Janderson Jason Barbosa Aguiar",
      email: "janderson@servidor.uepb.edu.br",
      photo: "https://randomuser.me/api/portraits/men/10.jpg"
    },
    {
      id: 11,
      name: "Katia Elizabete Galdino",
      email: "katiagaldino@gmail.com",
      photo: "https://randomuser.me/api/portraits/women/11.jpg"
    },
    {
      id: 12,
      name: "Kézia de Vasconcelos Oliveira Dantas",
      email: "kezia.vasconcelos@servidor.uepb.edu.br",
      photo: "https://randomuser.me/api/portraits/women/12.jpg"
    },
    {
      id: 13,
      name: "Luciana de Queiroz Leal Gomes",
      email: "lucianaleal@servidor.uepb.edu.br",
      photo: "https://randomuser.me/api/portraits/women/13.jpg"
    },
    {
      id: 14,
      name: "Misael Elias de Morais",
      email: "moraiscg@gmail.com",
      photo: "https://randomuser.me/api/portraits/men/14.jpg"
    },
    {
      id: 15,
      name: "Paulo Eduardo e Silva Barbosa",
      email: "pesbarbosa@gmail.com",
      photo: "https://randomuser.me/api/portraits/men/15.jpg"
    },
    {
      id: 16,
      name: "Robson Pequeno de Sousa",
      email: "sousarob@servidor.uepb.edu.br",
      photo: "https://randomuser.me/api/portraits/men/16.jpg"
    },
    {
      id: 17,
      name: "Sabrina de Figueiredo Souto",
      email: "sabrinadfs@servidor.uepb.edu.br",
      photo: "https://randomuser.me/api/portraits/women/17.jpg"
    },
    {
      id: 18,
      name: "Vladimir Costa de Alencar",
      email: "valencar@servidor.uepb.edu.br",
      photo: "https://randomuser.me/api/portraits/men/18.jpg"
    },
    {
      id: 19,
      name: "Wellington Candeia de Araujo",
      email: "wcandeia@servidor.uepb.edu.br",
      photo: "https://randomuser.me/api/portraits/men/19.jpg"
    }
  ]
};

function App() {
  return (
    <Router>
      <ScrollToSection/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/docentes" element={<DocentesPage professors={mockData.professors} />} />
        <Route path="/area-aluno" element={<AreaAlunoPage/>} />
        <Route path="/area-aluno/estrutura-curricular" element={<EstruturaCurricularPage />} />
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
        <section className="relative h-[500px] overflow-hidden">
          {mockData.news.map((item, index) => (
            <div 
              key={item.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
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
          <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
            {mockData.news.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
                aria-label={`Slide ${index + 1}`}
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
                <Link to="/#sobre" className="inline-block bg-maroon-700 text-white px-6 py-3 rounded-md font-medium hover:bg-maroon-800 transition">
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
                        <div className="bg-maroon-700 text-white rounded-md p-2 text-center mr-4 min-w-[60px]">
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
        <section className="py-16 bg-maroon-700 text-white">
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

export { App };