const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'localhost:3000',
  title: 'CN.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Cyril NIVET',
  role: 'Administrateur system/réseau',
  description:
    " J'étudie à l'IIA (Institut d'Informatique Appliqué) de LAVAL en deuxième année de BTS SIO (Services Informatiques aux Organisations) options SISR (Solutions d'Infrastructure Systèmes et Réseaux). Je suis également alternant dans l'entreprise ITSolutions à Laval.",
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/cyril-nivet-47aa89233/',
    github: 'https://github.com/D1N4Re/Portfolio',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Projet 1',
    description:
      'Ad Windows DNS, DHCP, DFS, DFSR',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Projet 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Projet 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'cyril.nivet@iia-formation.fr',
}

export { header, about, projects, skills, contact }
