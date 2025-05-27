// src/data/mockData.ts

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  summary: string;
  content: string; // Conteúdo completo da notícia
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  imageUrl: string;
  summary: string;
  content: string; // Conteúdo completo do evento
}

export const mockNews: NewsItem[] = [
  {
    id: '1',
    title: 'UEPB Lança Novo Laboratório de Inteligência Artificial',
    date: '2024-05-20',
    imageUrl: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=2070',
    summary: 'O Centro de Ciências e Tecnologia (CCT) da UEPB inaugurou um laboratório de ponta dedicado à pesquisa em Inteligência Artificial, impulsionando a inovação na Paraíba.',
    content: 'Em um evento marcante para a comunidade acadêmica e tecnológica da Paraíba, a Universidade Estadual da Paraíba (UEPB) inaugurou, nesta segunda-feira, o seu mais novo Laboratório de Inteligência Artificial no Campus I. O espaço, equipado com tecnologia de ponta e servidores de alta performance, visa fomentar a pesquisa e o desenvolvimento de soluções inovadoras em áreas como aprendizado de máquina, processamento de linguagem natural e visão computacional. A iniciativa reforça o compromisso da UEPB com a excelência acadêmica e a formação de profissionais qualificados para os desafios do mercado de trabalho, conforme a missão da IES de "produzir, socializar e aplicar o conhecimento nos diversos campos do saber". O evento contou com a presença do Reitor, Prof. Dr. Antônio Guedes Rangel Junior, e de membros do Núcleo Docente Estruturante (NDE) do curso de Computação, que destacaram a importância do laboratório para a consolidação dos grupos de pesquisa da instituição, especialmente nas linhas de pesquisa em Inteligência Artificial e Métodos Computacionais, conforme detalhado no Projeto Pedagógico de Curso (PPC) de 2016.'
  },
  {
    id: '2',
    title: 'Alunos de Computação da UEPB Conquistam Prêmio Nacional em Hackathon',
    date: '2024-05-15',
    imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012',
    summary: 'Uma equipe de estudantes do Bacharelado em Computação da UEPB venceu um hackathon nacional com uma solução inovadora para problemas urbanos.',
    content: 'A equipe "CodeMasters", composta por alunos do curso de Bacharelado em Computação da UEPB, conquistou o primeiro lugar no "InovaTech Hackathon", um dos maiores eventos de tecnologia do país. A solução desenvolvida, um aplicativo de monitoramento e otimização de tráfego urbano baseado em IA, impressionou os jurados pela sua originalidade e potencial de impacto social. Este feito demonstra a capacidade dos egressos da UEPB de "intervir teórica e tecnicamente com visão crítica, na elaboração ou criação de sistemas e software com complexidade tecnológica elevada", um dos objetivos do perfil do egresso do curso. A vitória é um reflexo do investimento da universidade em "políticas de incentivo à pesquisa e à extensão", como o PIBIC, que capacitam os estudantes para desafios reais e complexos. A coordenação do curso parabenizou os alunos e ressaltou a importância de eventos como este para a aplicação prática dos conhecimentos adquiridos em sala de aula, especialmente nas áreas de Engenharia de Software e Sistemas Embarcados.'
  },
  {
    id: '3',
    title: 'Semana da Computação 2024: Inscrições Abertas!',
    date: '2024-05-10',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070',
    summary: 'Prepare-se para a Semana da Computação da UEPB, com palestras, workshops e minicursos sobre as últimas tendências em tecnologia.',
    content: 'A tradicional Semana da Computação da UEPB está com inscrições abertas! O evento, que ocorrerá de 1 a 5 de julho, trará uma programação diversificada com palestras de especialistas renomados, workshops práticos e minicursos sobre temas como cibersegurança, desenvolvimento web avançado e computação em nuvem. A iniciativa visa complementar a formação dos estudantes, oferecendo "atividades extracurriculares" que enriquecem o currículo e promovem a interação com o mercado de trabalho e as últimas inovações tecnológicas. A organização destaca a participação de docentes do Departamento de Computação, que atuarão como palestrantes e instrutores, reforçando a "capacidade instalada de docentes" da UEPB. O evento é uma excelente oportunidade para os alunos aprofundarem seus conhecimentos e se conectarem com profissionais da área, alinhando-se com a política de "aprofundar o processo de reestruturação da graduação" para qualificar os egressos para os novos desafios da contemporaneidade.'
  },
];

export const mockEvents: EventItem[] = [
  {
    id: '1',
    title: 'Workshop de Desenvolvimento Web com React e Tailwind CSS',
    date: '2024-06-10',
    time: '09:00 - 17:00',
    location: 'Laboratório 2, Central de Aulas, Campus I',
    imageUrl: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    summary: 'Aprenda a construir interfaces modernas e responsivas com as tecnologias mais procuradas do mercado.',
    content: 'O Departamento de Computação da UEPB, em parceria com empresas de tecnologia locais, promoverá um workshop intensivo sobre Desenvolvimento Web utilizando React e Tailwind CSS. O evento, que acontecerá no Laboratório 2 da Central de Aulas, conforme a infraestrutura disponível no Campus I, é voltado para estudantes e profissionais interessados em aprimorar suas habilidades em front-end. Serão abordados desde os conceitos básicos de React até a criação de componentes reutilizáveis e a estilização eficiente com Tailwind CSS. A iniciativa faz parte da política da UEPB de "incentivar o desenvolvimento de projetos vinculados ao Programa Institucional de Bolsas de Iniciação à Pesquisa (PIBIC)" e de "potencializar a realização de eventos de reflexão sobre o processo de ensino-aprendizagem", oferecendo aos alunos a oportunidade de aplicar conhecimentos práticos e se preparar para o mercado de trabalho, que demanda profissionais com "conhecimentos tecnológicos e bons fundamentos".'
  },
  {
    id: '2',
    title: 'Palestra: O Futuro da Cibersegurança na Era da IA',
    date: '2024-06-25',
    time: '14:00 - 16:00',
    location: 'Auditório do CCT, Campus I',
    imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    summary: 'Descubra os desafios e as oportunidades da cibersegurança em um mundo cada vez mais dominado pela Inteligência Artificial.',
    content: 'O Auditório do Centro de Ciências e Tecnologia (CCT) da UEPB será palco de uma palestra imperdível sobre "O Futuro da Cibersegurança na Era da IA", ministrada pelo Prof. Dr. Daniel Scherer, especialista em Inteligência Artificial e membro do Núcleo Docente Estruturante (NDE) do curso de Computação. A palestra abordará as últimas tendências em ameaças cibernéticas, as estratégias de defesa baseadas em IA e o papel dos profissionais de computação nesse cenário em constante evolução. Este evento está alinhado com a "política de fortalecimento da Pesquisa, Pós-Graduação e Internacionalização" da UEPB, que busca aprimorar a formação de pesquisadores e profissionais em áreas de ponta. A discussão sobre cibersegurança é crucial para a formação de egressos capazes de "intervir teórica e tecnicamente com visão crítica" em sistemas de alta complexidade, como os mencionados no perfil do egresso, que incluem "sistemas que sofrem regulação".'
  },
  {
    id: '3',
    title: 'Feira de Projetos de Extensão do Curso de Computação',
    date: '2024-07-05',
    time: '10:00 - 18:00',
    location: 'Área de Convivência do CCT, Campus I',
    imageUrl: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    summary: 'Conheça os projetos desenvolvidos pelos alunos do curso de Computação que impactam diretamente a comunidade.',
    content: 'A Feira de Projetos de Extensão do Curso de Computação da UEPB é uma vitrine das iniciativas que conectam o conhecimento acadêmico com as necessidades da sociedade. Alunos apresentarão projetos inovadores em diversas áreas, desde aplicativos para educação inclusiva até sistemas de gestão para pequenas empresas. Este evento exemplifica a "indissociabilidade entre ensino, pesquisa e extensão", um dos princípios norteadores da UEPB, onde "cada atividade de extensão seja um espaço privilegiado, no qual educadores, educandos e comunidade articulam a difusão e a produção do conhecimento acadêmico em diálogo com o conhecimento popular". A feira também reforça o "perfil do egresso" que busca "tornar-se atuante no sentido de resolver ou evidenciar problemas existentes na sociedade". A comunidade é convidada a prestigiar e interagir com os futuros profissionais da computação, que demonstram seu "compromisso social" e sua capacidade de "produzir, socializar e aplicar o conhecimento".'
  },
];