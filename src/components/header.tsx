import { getPath } from '@/utils/tools';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// Componente para anunciar mudanças de rota
function RouteAnnouncer() {
const location = useLocation();
const [announcement, setAnnouncement] = useState('');

// Mapeia rotas para títulos descritivos
const getRouteTitle = useCallback((pathname) => {
const routes = {
'/': 'Página inicial do Departamento de Ciência da Computação',
'/#sobre': 'Sobre o Departamento de Ciência da Computação',
'/noticias': 'Notícias do Departamento de Ciência da Computação',
'/eventos': 'Eventos do Departamento de Ciência da Computação',
'/docentes': 'Docentes do Departamento de Ciência da Computação',
'/projetos': 'Projetos do Departamento de Ciência da Computação',
'/#contato': 'Contato do Departamento de Ciência da Computação',
'/area-aluno': 'Área do Aluno do Departamento de Ciência da Computação',
};

// Verifica se a rota está no mapeamento, caso contrário usa um título genérico
return routes[pathname] || `Página ${pathname.replace('/', '')} do Departamento de Ciência da Computação`;

}, []);

useEffect(() => {
// Anuncia a mudança de rota após um pequeno atraso para garantir que a página foi carregada
const timeoutId = setTimeout(() => {
const title = getRouteTitle(location.pathname);
setAnnouncement(`Navegou para: ${title}`);
}, 100);

return () => clearTimeout(timeoutId);

}, [location, getRouteTitle]);

return (
<div 
   aria-live="assertive" 
   aria-atomic="true" 
   className="sr-only" 
   role="status"
 >
{announcement}
</div>
);
}

// Componente de Link acessível que anuncia a navegação
function AccessibleLink({ to, children, className, ...props }) {
const navigate = useNavigate();
const location = useLocation();

const handleClick = (e) => {
// Impede o comportamento padrão para poder anunciar antes da navegação
e.preventDefault();

// Anuncia que está carregando nova página
const announcement = document.createElement('div');
announcement.setAttribute('role', 'status');
announcement.setAttribute('aria-live', 'assertive');
announcement.className = 'sr-only';
announcement.textContent = 'Carregando nova página...';
document.body.appendChild(announcement);

// Navega após um pequeno atraso para permitir que o anúncio seja lido
setTimeout(() => {
  document.body.removeChild(announcement);
  navigate(to);
}, 100);

};

return (
    <Link
    to={to}
    className={className}
    onClick={handleClick}
    aria-current={location.pathname === to ? "page" : undefined}
    {...props}
    >
    {children}
    </Link>
    );
}

// Componente para exibir instruções de atalhos de teclado
function KeyboardShortcutsInfo({ isVisible, onClose }) {
    const modalRef = useRef<HTMLDivElement>(null);
    // Fechar ao clicar fora ou pressionar ESC
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVisible, onClose]);
if (!isVisible) return null;

return (
    <div 
    className="fixed inset-0 bg-custom-black z-50 flex items-center justify-center"
    role="dialog"
    aria-modal="true"
    aria-labelledby="shortcuts-title"
    >
    <div ref={modalRef}
    className="bg-white p-6 rounded-lg max-w-md w-full"
    onClick={(e)=> e.stopPropagation()}
    >
    <h2 id="shortcuts-title" className="text-xl font-bold mb-4">Atalhos de Teclado</h2>
    <ul className="space-y-2 mb-4">
    <li><kbd className="px-2 py-1 bg-gray-100 border border-gray-300 rounded">Alt + M</kbd> - Abrir/fechar menu de navegação</li>
    <li><kbd className="px-2 py-1 bg-gray-100 border border-gray-300 rounded">Alt + 1</kbd> - Ir para página inicial</li>
    <li><kbd className="px-2 py-1 bg-gray-100 border border-gray-300 rounded">Alt + 2</kbd> - Ir para área do aluno</li>
    <li><kbd className="px-2 py-1 bg-gray-100 border border-gray-300 rounded">Alt + /</kbd> - Mostrar esta ajuda</li>
    <li><kbd className="px-2 py-1 bg-gray-100 border border-gray-300 rounded">Esc</kbd> - Fechar menus ou diálogos</li>
    </ul>
    <button 
        onClick={onClose}
        className="bg-maroon-700 text-white px-4 py-2 rounded-md hover:bg-maroon-800 transition w-full"
        aria-label="Fechar informações de atalhos de teclado"
        >
    Fechar
    </button>
    </div>
    </div>
    );
}

export function Header(props: any) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showShortcutsInfo, setShowShortcutsInfo] = useState(false);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const navigate = useNavigate();

    // Gerencia foco quando menu mobile abre/fecha
    useEffect(() => {
        if (isMobileMenuOpen && mobileMenuRef.current) {
            // Define primeiro item do menu como focável quando menu abre
            const firstMenuItem = mobileMenuRef.current.querySelector('a');
            if (firstMenuItem) {
                (firstMenuItem as HTMLElement).focus();
            }
        } else if (!isMobileMenuOpen && menuButtonRef.current) {
            // Retorna o foco ao botão quando o menu fecha
            menuButtonRef.current.focus();
        }
    }, [isMobileMenuOpen]);

    // Gerencia atalhos de teclado globais
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Não processa atalhos se o usuário estiver em um campo de entrada
            const target = e.target as HTMLElement;
            const isInputField = target.tagName === 'INPUT' || 
                                target.tagName === 'TEXTAREA' || 
                                target.isContentEditable;
            
            // Fecha menu ao pressionar ESC
            if (e.key === 'Escape') {
                if (isMobileMenuOpen) {
                    setIsMobileMenuOpen(false);
                }
                if (showShortcutsInfo) {
                    setShowShortcutsInfo(false);
                }
                return;
            }
            
            // Não processa outros atalhos se estiver em campo de entrada
            if (isInputField && e.key !== 'Escape') {
                return;
            }
            
            // Alt + M para abrir/fechar menu (funciona mesmo em dispositivos desktop)
            if (e.altKey && e.key === 'm') {
                e.preventDefault();
                toggleMenu();
            }
            
            // Alt + / para mostrar ajuda de atalhos
            if (e.altKey && e.key === '/') {
                e.preventDefault();
                setShowShortcutsInfo(true);
            }
            
            // Alt + 1 para ir para página inicial
            if (e.altKey && e.key === '1') {
                e.preventDefault();
                navigate(getPath("/"));
            }
            
            // Alt + 2 para ir para área do aluno
            if (e.altKey && e.key === '2') {
                e.preventDefault();
                navigate(getPath("/area-aluno"));
            }
        };
        
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isMobileMenuOpen, showShortcutsInfo, navigate]);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        // Anuncia mudança de estado para leitores de tela
        const message = !isMobileMenuOpen ? "Menu de navegação aberto" : "Menu de navegação fechado";
        announceToScreenReader(message);
    };

    // Função para anunciar mensagens para leitores de tela
    const announceToScreenReader = (message: string) => {
        const announcement = document.createElement('div');
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', 'polite');
        announcement.className = 'sr-only';
        announcement.textContent = message;
        document.body.appendChild(announcement);
        setTimeout(() => document.body.removeChild(announcement), 1000);
    };

    return (
        <div className="bg-gray-50 text-gray-800 font-sans">
            {/* Componente que anuncia mudanças de rota */}
            <RouteAnnouncer />
            
            {/* Skip link para pular navegação */}
            <a 
                href="#main-content" 
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-maroon-700 text-white p-3 z-50"
                aria-label="Pular para o conteúdo principal"
            >
                Pular para o conteúdo principal
            </a>
            
            {/* Informações de atalhos de teclado */}
            <KeyboardShortcutsInfo 
                isVisible={showShortcutsInfo} 
                onClose={() => setShowShortcutsInfo(false)} 
            />
            
            <header className="bg-white shadow-md" role="banner">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center">
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/7/77/Marca-da-UEPB-Aplica%C3%A7%C3%A3o-Colorida-em-PNG-1.png" 
                                alt="Logo da Universidade UEPB - Departamento de Ciência da Computação" 
                                className="h-12 mr-3"
                                width="48" 
                                height="48"
                            />
                            <div className="border-l-2 border-gray-300 pl-3">
                                <h1 id="site-title" className="text-xl font-bold text-maroon-700">Ciência da Computação</h1>
                                <p id="site-subtitle" className="text-sm text-gray-600">Campus I - Campina Grande</p>
                            </div>
                        </div>
                        
                        {/* Botão de atalhos de teclado */}
                        <button
                            className="hidden md:block text-gray-700 hover:text-maroon-700 mr-4"
                            onClick={() => setShowShortcutsInfo(true)}
                            aria-label="Mostrar atalhos de teclado"
                            title="Atalhos de teclado (Alt + /)"
                        >
                            <span className="sr-only">Atalhos de teclado</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </button>
                        
                        {/* Desktop Menu com Links Acessíveis */}
                        <nav className="hidden md:flex space-x-6" aria-label="Menu de navegação principal">
                            <AccessibleLink to={getPath("/")} className="text-maroon-700 font-medium hover:text-maroon-900 transition">Início</AccessibleLink>
                            <AccessibleLink to={getPath("/#sobre")} className="text-gray-700 font-medium hover:text-maroon-700 transition">Sobre</AccessibleLink>
                            <AccessibleLink to={getPath("/noticias")} className="text-gray-700 font-medium hover:text-maroon-700 transition">Notícias</AccessibleLink>
                            <AccessibleLink to={getPath("/eventos")} className="text-gray-700 font-medium hover:text-maroon-700 transition">Eventos</AccessibleLink>
                            <AccessibleLink to={getPath("/docentes")} className="text-gray-700 font-medium hover:text-maroon-700 transition">Docentes</AccessibleLink>
                            <AccessibleLink to={getPath("/projetos")} className="text-gray-700 font-medium hover:text-maroon-700 transition">Projetos</AccessibleLink>
                            <AccessibleLink to={getPath("/#contato")} className="text-gray-700 font-medium hover:text-maroon-700 transition">Contato</AccessibleLink>
                            <AccessibleLink to={getPath("/area-aluno")} className="bg-maroon-700 text-gray px-4 py-2 rounded-md hover:bg-maroon-800 transition">Área do Aluno</AccessibleLink>
                        </nav>
                        
                        {/* Mobile Menu Button com indicador de atalho */}
                        <button 
                            ref={menuButtonRef}
                            className="md:hidden flex items-center px-3 py-2 border rounded text-gray-700 border-gray-400 hover:text-maroon-700 hover:border-maroon-700 transition"
                            onClick={toggleMenu}
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-menu"
                            aria-label={`${isMobileMenuOpen ? 'Fechar' : 'Abrir'} menu de navegação (Alt+M)`}
                            aria-haspopup="true"
                            id="mobile-menu-button"
                        >
                            <span className="sr-only">{isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}</span>
                            <span className="mr-2 text-sm font-medium">Menu</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                    
                    {/* Mobile Menu com Links Acessíveis */}
                    <div 
                        id="mobile-menu" 
                        ref={mobileMenuRef}
                        className={`md:hidden py-4 border-t border-gray-200 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                        role="navigation" 
                        aria-label="Menu de navegação mobile"
                        aria-labelledby="mobile-menu-button"
                    >
                        <div className="flex flex-col space-y-3">
                            <AccessibleLink to={getPath("/")} className="text-maroon-700 font-medium hover:text-maroon-900 transition p-2 rounded hover:bg-gray-100">Início</AccessibleLink>
                            <AccessibleLink to={getPath("/#sobre")} className="text-gray-700 font-medium hover:text-maroon-700 transition p-2 rounded hover:bg-gray-100">Sobre</AccessibleLink>
                            <AccessibleLink to={getPath("/noticias")} className="text-gray-700 font-medium hover:text-maroon-700 transition p-2 rounded hover:bg-gray-100">Notícias</AccessibleLink>
                            <AccessibleLink to={getPath("/eventos")} className="text-gray-700 font-medium hover:text-maroon-700 transition p-2 rounded hover:bg-gray-100">Eventos</AccessibleLink>
                            <AccessibleLink to={getPath("/docentes")} className="text-gray-700 font-medium hover:text-maroon-700 transition p-2 rounded hover:bg-gray-100">Docentes</AccessibleLink>
                            <AccessibleLink to={getPath("/projetos")} className="text-gray-700 font-medium hover:text-maroon-700 transition p-2 rounded hover:bg-gray-100">Projetos</AccessibleLink>
                            <AccessibleLink to={getPath("/#contato")} className="text-gray-700 font-medium hover:text-maroon-700 transition p-2 rounded hover:bg-gray-100">Contato</AccessibleLink>
                            <AccessibleLink to={getPath("/area-aluno")} className="bg-gray-700  text-white px-4 py-2 rounded-md hover:bg-maroon-800 transition text-center">Área do Aluno</AccessibleLink>
                            
                            {/* Botão para mostrar atalhos de teclado no menu mobile */}
                            <button 
                                onClick={() => setShowShortcutsInfo(true)}
                                className="rounded-md border text-gray-700 font-medium hover:text-maroon-700 cursor-pointer transition p-2 rounded hover:bg-gray-100 flex items-center justify-center"
                                aria-label="Mostrar atalhos de teclado"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                Atalhos de Teclado
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            
            {/* Marcador para pular para o conteúdo principal */}
            <div id="main-content" tabIndex={-1} className="outline-none"></div>
        </div>
    );
}