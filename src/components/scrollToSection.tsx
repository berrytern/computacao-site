// ScrollToSection.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToSection() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Se houver um hash e estivermos na página correta
    if (hash) {
      // Remove o # do início
      const id = hash.replace('#', '');
      
      // Encontra o elemento
      const element = document.getElementById(id);
      
      if (element) {
        // Dá um pequeno atraso para garantir que tudo carregou
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // Se não houver hash, role para o topo
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]); // Reage a mudanças na rota ou no hash

  return null; // Este componente não renderiza nada
}
