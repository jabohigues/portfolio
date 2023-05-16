import { Project } from '../interfaces/project';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'FutsalFantasy',
    folder: 'futsalfantasy',
    img: 'futsalfantasyInicio',
    description:
      'Conviértete en mánager de un equipo ficticio con jugadores reales de la 1ªDivisión de Fútbol Sala de España. Crea una liga con tus amigos, gestiona el capital, negocia por jugadores y hazte con el mejor equipo para ganar el campeonato.',
    caller: '¿Quién será el vencedor?',
    category: 'Juego',
    tags: [
      { title: 'Angular', img: 'logoAngular' }, 
      { title: 'TypeScript', img: 'logoTypescript' },
      { title: 'Node.js', img: 'logoNodejs' }, 
      { title: 'Express', img: 'logoExpress' }
    ],
    hrefs: {
      github: 'https://github.com/jbohigues/futsalFantasy',
      project: '',
    },
  },
  {
    id: 2,
    title: 'EnTemporada',
    folder: 'enTemporada',
    img: 'enTemporadaCalendario',
    description:
      'Iniciativa que pretende facilitar información sobre los productos (frutas y verduras) que están en temporada en cada época del año, además de crear una "red social" en la que subir recetas, poner likes y guardar las preferidas.',
    caller: '¡Súmate a la ola EnTemporada!',
    category: 'Red social',
    tags: [
      { title: 'Angular', img: 'logoAngular' }, 
      { title: 'TypeScript', img: 'logoTypescript' },
      { title: 'Node.js', img: 'logoNodejs' }, 
      { title: 'Express', img: 'logoExpress' }
    ],
    hrefs: {
      github: 'https://github.com/Jfabregat3/EnTemporada4J',
      project: '',
    },
  },
];
