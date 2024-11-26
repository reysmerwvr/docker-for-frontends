# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react';

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
});
```

## Docker

```sh
# Development
docker build -t <your-docker-id>/docker-for-frontends-dev -f Dockerfile.dev .
docker run -p 3000:3000 -it <your-docker-id>/docker-for-frontends-dev
docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app -it <your-image-id>

# Production
docker build -t <your-docker-id>/docker-for-frontends .
docker run -p 8080:80 -it <your-docker-id>/docker-for-frontends
```

## Docker Compose

```sh
# Development
docker-compose -f docker-compose-dev.yml up -d
docker-compose -f docker-compose-dev.yml up --build -d
docker-compose -f docker-compose-dev.yml down
docker run -it <your-image-id> npm run test

# Production
docker-compose --build -d
```

## Deploy in AWS

Prerequisites:

- You have an AWS account
- You have an IAM User with `AdministratorAccess` and `AdministratorAccess-AWSElasticBeanstalk` policies attached to it
- You have an access key to be used in aws cli to create the cloudformation resources
- You have a fine-grained PAT in GitHub to allow AWS access your repository (Read access to code and metadata, Read and Write access to commit statuses)

Infrastructure Spin Up:

[Infrastructure](infrastructure/README.md)
