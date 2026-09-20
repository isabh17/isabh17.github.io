export type Lang = 'en' | 'es'

export type Ui = {
  nav: Record<'about' | 'stack' | 'work' | 'writing' | 'experience' | 'contact', string>
  sections: Record<'about' | 'stack' | 'work' | 'writing' | 'experience', string>
  hero: { sub: string; cta1: string; cta2: string }
  contact: { title: string; body: string; copied: string }
  repo: string
  readEdition: string
  cv: string
  degreeLine: (d: string, s: string, x: string) => JSX.Element
}

export const ui: Record<Lang, Ui> = {
  en: {
    nav: { about: 'About', stack: 'Stack', work: 'Work', writing: 'Writing', experience: 'Experience', contact: 'Contact' },
    sections: { about: 'About', stack: 'What I work with', work: 'Selected work', writing: 'Beyond the code', experience: 'Experience' },
    hero: {
      sub: 'I build web software. Mostly Python and SQL, some React.',
      cta1: 'View my work', cta2: 'Get in touch',
    },
    contact: {
      title: 'Let’s talk',
      body: 'I’m open to full stack, backend and database roles — remote or based in Guatemala.',
      copied: 'Copied ✓',
    },
    repo: '→ View repository',
    readEdition: 'Read the published edition',
    cv: 'Download CV',
    degreeLine: (d: string, s: string, x: string) => <>I hold a degree in <strong>{d}</strong> from {s}. {x}.</>,
  },
  es: {
    nav: { about: 'Perfil', stack: 'Stack', work: 'Proyectos', writing: 'Más allá', experience: 'Experiencia', contact: 'Contacto' },
    sections: { about: 'Perfil', stack: 'Con qué trabajo', work: 'Proyectos', writing: 'Más allá del código', experience: 'Experiencia' },
    hero: {
      sub: 'Hago software web. Sobre todo Python y SQL, algo de React.',
      cta1: 'Ver proyectos', cta2: 'Escríbeme',
    },
    contact: {
      title: 'Hablemos',
      body: 'Busco puestos full stack, backend y de bases de datos — remoto o en Guatemala.',
      copied: 'Copiado ✓',
    },
    repo: '→ Ver repositorio',
    readEdition: 'Leer la edición publicada',
    cv: 'Descargar CV',
    degreeLine: (d: string, s: string, x: string) => <>Estudié <strong>{d}</strong> en {s}. {x}.</>,
  },
}
