import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./index.css";

import logo from "./logo.svg";
import reactLogo from "./react.svg";


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
  ]
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
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
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img 
                src="https://www.uepb.edu.br/wp-content/uploads/2017/01/logo-uepb.png" 
                alt="Logo UEPB" 
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
              <Link to="/sobre" className="text-gray-700 font-medium hover:text-maroon-700 transition">Sobre</Link>
              <Link to="/docentes" className="text-gray-700 font-medium hover:text-maroon-700 transition">Docentes</Link>
              <Link to="/disciplinas" className="text-gray-700 font-medium hover:text-maroon-700 transition">Disciplinas</Link>
              <Link to="/projetos" className="text-gray-700 font-medium hover:text-maroon-700 transition">Projetos</Link>
              <Link to="/contato" className="text-gray-700 font-medium hover:text-maroon-700 transition">Contato</Link>
              <Link to="/area-aluno" className="bg-maroon-700 text-white px-4 py-2 rounded-md hover:bg-maroon-800 transition">Área do Aluno</Link>
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
                <Link to="/sobre" className="text-gray-700 font-medium hover:text-maroon-700 transition">Sobre</Link>
                <Link to="/docentes" className="text-gray-700 font-medium hover:text-maroon-700 transition">Docentes</Link>
                <Link to="/disciplinas" className="text-gray-700 font-medium hover:text-maroon-700 transition">Disciplinas</Link>
                <Link to="/projetos" className="text-gray-700 font-medium hover:text-maroon-700 transition">Projetos</Link>
                <Link to="/contato" className="text-gray-700 font-medium hover:text-maroon-700 transition">Contato</Link>
                <Link to="/area-aluno" className="bg-maroon-700 text-white px-4 py-2 rounded-md hover:bg-maroon-800 transition text-center">Área do Aluno</Link>
              </div>
            </div>
          )}
        </div>
      </header>

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
                  <button className="bg-white text-maroon-800 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
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
        <section className="py-16 bg-white">
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
                <Link to="/sobre" className="inline-block bg-maroon-700 text-white px-6 py-3 rounded-md font-medium hover:bg-maroon-800 transition">
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
            <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-12">
              {mockData.coordinators.map(coordinator => (
                <div key={coordinator.id} className="bg-white p-6 rounded-lg shadow-md text-center max-w-xs mx-auto">
                  <img 
                    src={coordinator.photo} 
                    alt={coordinator.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
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

export { App };