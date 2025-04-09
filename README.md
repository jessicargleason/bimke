
# Bi+ Pride Milwaukee Website

## Technology Objectives

- **Be conscious of the group budget.** We pay for our bimke.org domain name, but otherwise our hosting is currently free.
- **Require little maintenance and have few vectors for security concerns** We have a static generated site and no features like comments or accounts within our site.
- **Low barrier of entry for code contributions without a web development background** The site lives entirely within the file system--if it's on the site, you can search the repo and find a file with that content in it. Someone with development knowledge can run the site locally and make more sophisticated changes to components, layouts, etc. but even someone with only basic HTML or CSS knowledge could edit one of these files directly to make simple changes.

## Technology

- [Astro](https://astro.build/) is our framework, we define layouts and components in .astro files and it compiles static pages for us.
- [DecapCMS](https://decapcms.org/) is our content management system, we define fields that editors can interact with in our admin area and Decap generates markdown files from those fields, which Astro then pulls from when it builds pages.
- [Netlify](https://www.netlify.com) is our host, when we merge changes to our master branch in Github, Netlify automatically triggers Astro to rebuild our files and publishes them. When we make a pull request, it creates a temporary QA environment with those changes in it.

## Contributing

To contribute to the bimke site as someone with a web development background, make your changes in a branch off of master and submit a pull request.

# Astro

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

