# Ivan Blaise Gonzales — Portfolio

A responsive, data-driven portfolio for software engineer and creative web developer Ivan Blaise Gonzales. Built with React, Vite, React Three Fiber, and plain CSS.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite, normally `http://localhost:5173`.

## Add a project

1. Add the project image to `public/project_imgs/`.
2. Add one project object to `src/data/projects.js`.

Each project supports this shape:

```js
{
  id: 'unique-project-id',
  title: 'Project name',
  subtitle: 'Short supporting line',
  image: '/project_imgs/project-image.png',
  summary: 'A concise description of the problem, approach, and outcome.',
  technologies: ['React', 'Node.js'],
  links: [
    {
      label: 'View repository',
      href: 'https://github.com/...',
      type: 'github',
    },
  ],
  featured: false,
}
```

Setting `featured: true` gives a project the wide featured layout. New technology labels work automatically and do not require new CSS.

## Edit portfolio content

- Projects: `src/data/projects.js`
- Skills and tool icons: `src/data/skills.js`
- Contact details: `src/data/contact.js`
- Hero copy: `src/sections/Hero.jsx`

## Quality checks

```bash
npm run lint
npm run build
```
