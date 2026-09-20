import type { Lang } from './i18n'

export const profile = {
  name: 'Isabel Masaya',
  role: 'Full Stack Developer',
  specialty: 'databases · backend · frontend',
  location: 'Guatemala',
  timezone: 'GMT−6 · overlaps US Central',
  email: 'silverisa17@gmail.com',
  github: 'https://github.com/isabh17',
  languages: 'Spanish (native) · English (intermediate)',
}

export const stackGroups = [
  { key: 'db', items: ['MySQL', 'Oracle', 'PL/SQL', 'Schema design', 'Query tuning'] },
  { key: 'be', items: ['Python', 'Go', 'Flask', 'gRPC', 'REST APIs'] },
  { key: 'infra', items: ['Kubernetes', 'Docker', 'Kafka', 'Redis', 'MongoDB'] },
  { key: 'fe', items: ['React', 'TypeScript', 'JavaScript', 'HTML / CSS'] },
  { key: 'ml', items: ['TensorFlow', 'Keras', 'NLTK', 'R / RStudio'] },
]

export const repos = {
  databases: 'https://github.com/isabh17/bases-de-datos-oracle',
  distributed: 'https://github.com/isabh17/distributed-voting-system',
  chatbot: 'https://github.com/isabh17/IA1_Proyecto_17.github.io',
}
export const magazineLink = 'https://issuu.com/revistaecys/docs/vigesimaoctava-revistadigital'

type Copy = {
  available: string
  meta: { timezone: string; languages: string; specialty: string }
  intro: string[]
  degree: { degree: string; school: string; detail: string }
  stackLabels: Record<string, string>
  projects: { id: keyof typeof repos; title: string; tagline: string; body: string[]; facts: { value: string; label: string }[]; tags: string[] }[]
  experience: { when: string; title: string; where: string; body: string; current?: boolean; link?: string }[]
  magazine: { title: string; role: string; published: string; theme: string; topics: string[]; body: string }
}

export const content: Record<Lang, Copy> = {
  en: {
    available: 'Open to remote',
    meta: { timezone: 'GMT−6 · overlaps US Central', languages: 'Spanish (native) · English (intermediate)', specialty: 'databases · backend · frontend' },
    intro: [
      "I'm a full stack developer — I build the interface, the API behind it and the database underneath.",
      'Working across the stack means I can see where a problem actually starts: a slow screen is often a missing index, not a rendering issue. The data layer is where I go deepest — a badly designed schema doesn’t hurt on day one, it hurts six months later, in every query that drags.',
    ],
    degree: {
      degree: 'Computer Science and Systems Engineering',
      school: 'Universidad de San Carlos de Guatemala',
      detail: 'Coursework completed in 2025',
    },
    stackLabels: { db: 'Databases', be: 'Backend', infra: 'Infrastructure', fe: 'Frontend', ml: 'Data & ML' },
    projects: [
      {
        id: 'databases',
        title: 'Relational databases in Oracle',
        tagline: 'Two systems from conceptual model to working implementation',
        body: [
          'Two Oracle systems, a shop and a bank. The banking logic lives in the database: ten stored procedures and an audit trigger on every table.',
          'Loading 20,000 rows from six CSVs meant a staging table and getting the foreign-key order right.',
        ],
        facts: [
          { value: '20', label: 'tables' }, { value: '10', label: 'stored procedures' },
          { value: '25', label: 'business queries' }, { value: '20k', label: 'records loaded' },
        ],
        tags: ['Oracle', 'PL/SQL', 'Python', 'Flask'],
      },
      {
        id: 'distributed',
        title: 'Distributed voting system',
        tagline: 'High-volume ingestion on Kubernetes',
        body: [
          'Go services on Kubernetes. Votes arrive over gRPC, queue through Kafka, land in Redis and MongoDB.',
          'Kafka sits in the middle so a slow write never becomes a dropped vote.',
        ],
        facts: [
          { value: '6', label: 'containerized services' }, { value: '15', label: 'k8s manifests' },
          { value: '2', label: 'data stores' },
        ],
        tags: ['Go', 'gRPC', 'Kafka', 'Redis', 'MongoDB', 'Kubernetes'],
      },
      {
        id: 'chatbot',
        title: 'A chatbot that runs in the browser',
        tagline: 'Neural intent classification, no server',
        body: [
          'A Keras model that classifies intents, converted to TensorFlow.js.',
          'It runs in the browser. No backend, just static files.',
        ],
        facts: [
          { value: '784', label: 'intents' }, { value: '2,075', label: 'training patterns' },
          { value: '0', label: 'servers needed' },
        ],
        tags: ['TensorFlow', 'Keras', 'NLTK', 'JavaScript'],
      },
    ],
    experience: [
      {
        when: '2024 — Present', title: 'Full Stack Developer', where: 'Health technology company',
        body: 'Web software development on a backend/DBA team: relational schema design, query tuning and production data support.',
        current: true,
      },
      {
        when: '2026', title: 'Design & Layout', where: 'Revista ECYS — Universidad de San Carlos de Guatemala',
        body: 'Designed and laid out the school’s digital magazine, produced in R / RStudio — a reproducible publishing pipeline rather than a manual layout tool.',
        link: magazineLink,
      },
      {
        when: '2021 — 2024', title: 'Administrative Assistant', where: 'Joyería y Relojería El Brillante',
        body: 'Scheduling, sales coordination, reporting and documentation.',
      },
    ],
    magazine: {
      title: 'Revista ECYS — 28th edition',
      role: 'Design and layout, built in R / RStudio',
      published: 'May 2026',
      theme: 'La Nueva Ingeniería: IA, Datos y Automatización',
      topics: [
        'Architectures driving digital transformation',
        'Governance, security and ethics in digital systems',
        'New paradigms in software engineering',
        'Data-driven intelligent systems',
      ],
      body: 'I produced it in R / RStudio rather than a manual layout tool — a reproducible publishing pipeline, where the document is generated from source and the layout rules are written once instead of applied page by page.',
    },
  },

  es: {
    available: 'Disponible para remoto',
    meta: { timezone: 'GMT−6 · coincide con el centro de EE. UU.', languages: 'Español (nativo) · Inglés (intermedio)', specialty: 'bases de datos · backend · frontend' },
    intro: [
      'Hago software web. Sobre todo Python y SQL, algo de React.',
      'Las bases de datos son la parte que de verdad me gusta. Casi siempre la pantalla lenta resulta ser un índice que falta.',
    ],
    degree: {
      degree: 'Ingeniería en Ciencias y Sistemas',
      school: 'la Universidad de San Carlos de Guatemala',
      detail: 'Pensum cerrado en 2025',
    },
    stackLabels: { db: 'Bases de datos', be: 'Backend', infra: 'Infraestructura', fe: 'Frontend', ml: 'Datos y ML' },
    projects: [
      {
        id: 'databases',
        title: 'Bases de datos relacionales en Oracle',
        tagline: 'Dos sistemas, del modelo conceptual a la implementación',
        body: [
          'Dos sistemas en Oracle, una tienda y un banco. La lógica bancaria vive dentro de la base: diez procedimientos y un trigger de auditoría en cada tabla.',
          'Cargar 20 000 filas desde seis CSV obligó a usar una tabla temporal y acertar con el orden de las claves foráneas.',
        ],
        facts: [
          { value: '20', label: 'tablas' }, { value: '10', label: 'procedimientos' },
          { value: '25', label: 'consultas de negocio' }, { value: '20k', label: 'registros cargados' },
        ],
        tags: ['Oracle', 'PL/SQL', 'Python', 'Flask'],
      },
      {
        id: 'distributed',
        title: 'Sistema distribuido de votaciones',
        tagline: 'Ingesta de alto volumen sobre Kubernetes',
        body: [
          'Servicios en Go sobre Kubernetes. Los votos entran por gRPC, pasan por Kafka y terminan en Redis y MongoDB.',
          'Kafka está en medio para que una escritura lenta nunca se convierta en un voto perdido.',
        ],
        facts: [
          { value: '6', label: 'servicios en contenedor' }, { value: '15', label: 'manifiestos de k8s' },
          { value: '2', label: 'almacenes de datos' },
        ],
        tags: ['Go', 'gRPC', 'Kafka', 'Redis', 'MongoDB', 'Kubernetes'],
      },
      {
        id: 'chatbot',
        title: 'Un chatbot que corre en el navegador',
        tagline: 'Clasificación neuronal de intenciones, sin servidor',
        body: [
          'Un modelo de Keras que clasifica intenciones, convertido a TensorFlow.js.',
          'Corre en el navegador. Sin backend, solo archivos estáticos.',
        ],
        facts: [
          { value: '784', label: 'intenciones' }, { value: '2 075', label: 'patrones de entrenamiento' },
          { value: '0', label: 'servidores necesarios' },
        ],
        tags: ['TensorFlow', 'Keras', 'NLTK', 'JavaScript'],
      },
    ],
    experience: [
      {
        when: '2024 — Actualidad', title: 'Desarrolladora Full Stack', where: 'Empresa de tecnología en salud',
        body: 'Desarrollo web de software en un equipo de backend y DBA: diseño de esquemas relacionales, optimización de consultas y soporte de datos en producción.',
        current: true,
      },
      {
        when: '2026', title: 'Diseño y maquetación', where: 'Revista ECYS — Universidad de San Carlos de Guatemala',
        body: 'Diseñé y maqueté la revista digital de la escuela, producida en R / RStudio: una tubería de publicación reproducible en vez de una herramienta de maquetación manual.',
        link: magazineLink,
      },
      {
        when: '2021 — 2024', title: 'Secretaria', where: 'Joyería y Relojería El Brillante',
        body: 'Gestión de agenda, coordinación de ventas, informes y documentación.',
      },
    ],
    magazine: {
      title: 'Revista ECYS — 28ª edición',
      role: 'Diseño y maquetación, hecha en R / RStudio',
      published: 'Mayo de 2026',
      theme: 'La Nueva Ingeniería: IA, Datos y Automatización',
      topics: [
        'Arquitecturas que impulsan la transformación digital',
        'Gobernanza, seguridad y ética en sistemas digitales',
        'Nuevos paradigmas en la ingeniería de software',
        'Sistemas inteligentes impulsados por datos',
      ],
      body: 'La produje en R / RStudio en vez de una herramienta de maquetación manual: una tubería de publicación reproducible, donde el documento se genera desde el código fuente y las reglas de diseño se escriben una vez en lugar de aplicarse página por página.',
    },
  },
}

export const magazineCover = '/revista-ecys.jpg'
