# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## API configuration & build modes

The API base URL is driven by Vite's mode system (`.env.<mode>` + `import.meta.env`):

| Mode                 | Command                             | `VITE_API_URL`                             | `VITE_READONLY` | Behavior                                                                      |
| -------------------- | ----------------------------------- | ------------------------------------------ | --------------- | ----------------------------------------------------------------------------- |
| development          | `npm run dev` (+ `npm run backend`) | `http://localhost:3000`                    | `false`         | Full read/write against local json-server                                     |
| production (default) | `npm run build`                     | `todos.json` (resolved against `BASE_URL`) | `true`          | Static read-only demo for GitHub Pages; run `npm run db:generate:pages` first |
| external             | `npm run build:external`            | placeholder URL                            | `false`         | Scaffold for a future real backend; edit `.env.external` when the URL exists  |

Seed data (same faker-based generator for both):

- `npm run db:generate` – writes root `db.json` (json-server format) for local dev/Docker
- `npm run db:generate:pages` – writes `public/todos.json` (flat array) for the GitHub Pages demo

CI runs `npm run db:generate:pages` before `npm run build` so the deployed Pages bundle always ships fresh demo data.

## Docker

Build the image:

```sh
docker build -t vite-react-starter .
```

Run it detached, mapping container port 80 to a host port (8080 here):

```sh
docker run -d --name vite-react-starter -p 8080:80 vite-react-starter
```

The app is then available at http://localhost:8080. Stop and remove the container with:

```sh
docker rm -f vite-react-starter
```

The image is built with `npm run build:development`, not the bare `npm run build`, so the Dockerized front end still targets the local `backend` service on `http://localhost:3000` instead of the read-only GitHub Pages config (see `docker-compose.yaml`).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
