import type { Lang } from './i18n'

export const profile = {
  name: 'Isabel Masaya',
  role: 'Full Stack Developer',
  specialty: 'databases · backend · frontend',
  location: 'Guatemala',
  timezone: 'GMT−6 · overlaps US Central',
  email: 'silverisa17@gmail.com',
  github: 'https://github.com/isabh17',
  languages: 'Spanish (native) · English (C1)',
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
          'Neither is a syntax exercise: both required deciding how to split entities, where the constraints belong, and which logic deserves to live inside the engine.',
          'The commerce system loads six CSV files through a staging table, distributing rows to final tables in foreign-key order, and exposes a Flask REST API.',
          'The banking system keeps transactional logic inside the database — ten stored procedures, plus an _audit trigger on every table that builds a complete trail of who changed what and when.',
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
          'A system that ingests a high-volume stream of votes, queues it, persists it to two different stores and visualizes it in real time — deployed as microservices on Kubernetes.',
          'Why Kafka in the middle: writing straight from the gRPC server to the databases caps ingestion at the speed of the slowest write. The queue decouples them, so the server only publishes and the consumer drains at its own pace without losing votes during a spike.',
          'Why two stores: Redis holds the live counters the dashboards poll constantly; MongoDB keeps the durable record the API queries later.',
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
          'A neural network trained with Keras that classifies natural-language intents, then exported to TensorFlow.js.',
          'NLTK handles tokenization and lemmatization, a dense Keras network does the classification, and the trained model is converted to TensorFlow.js. There is no backend — the browser downloads the weights and runs inference locally, so the whole thing ships as static files.',
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
    intro: [
      'Soy desarrolladora full stack: construyo la interfaz, la API que hay detrás y la base de datos debajo.',
      'Trabajar en toda la pila me deja ver dónde empieza de verdad un problema: una pantalla lenta suele ser un índice que falta, no un asunto de renderizado. Donde más profundizo es en la capa de datos — un esquema mal diseñado no duele el primer día, duele seis meses después, en cada consulta que se arrastra.',
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
          'Ninguno es un ejercicio de sintaxis: en los dos hubo que decidir cómo partir las entidades, dónde van las restricciones y qué lógica merece vivir dentro del motor.',
          'El sistema de comercio carga seis archivos CSV a través de una tabla temporal, repartiendo las filas a las tablas finales respetando el orden de las claves foráneas, y expone una API REST en Flask.',
          'El sistema bancario mantiene la lógica transaccional dentro de la base de datos: diez procedimientos almacenados, más un trigger _audit en cada tabla que construye un rastro completo de quién cambió qué y cuándo.',
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
          'Un sistema que recibe un flujo masivo de votos, lo encola, lo guarda en dos almacenes distintos y lo visualiza en tiempo real — desplegado como microservicios en Kubernetes.',
          'Por qué Kafka en medio: escribir directo del servidor gRPC a las bases limita la ingesta a la velocidad de la escritura más lenta. La cola los desacopla, así el servidor solo publica y el consumidor drena a su ritmo sin perder votos en un pico.',
          'Por qué dos almacenes: Redis guarda los contadores en vivo que los paneles consultan constantemente; MongoDB conserva el registro duradero que la API consulta después.',
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
          'Una red neuronal entrenada con Keras que clasifica intenciones en lenguaje natural, exportada después a TensorFlow.js.',
          'NLTK se encarga de la tokenización y la lematización, una red densa de Keras hace la clasificación, y el modelo entrenado se convierte a TensorFlow.js. No hay backend: el navegador descarga los pesos y ejecuta la inferencia localmente, así que todo se distribuye como archivos estáticos.',
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
