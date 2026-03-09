# Fullstack Boilerplate Typescript Monorepo Application

This is a Fullstack Typescript repository by [Turborepo](https://turborepo.dev/), [NestJS](https://nestjs.com/) in the Backend, and [Vite](https://vite.dev/) + [React](https://react.dev/) in the Frontend. Along with a containerized solution in Docker.

This project is expected to act as the foundation for all TypeScript-based applications.

## Project Structure

- `packages/backend`: NestJS API (Port 3000)
- `packages/frontend`: Vite + React Application (Port 3001)
- `packages/shared/types`: Shared Types for both Frontend and Backend

## Prerequisites

- Node.js: >= 22.12.0
- Yarn: >= 1.22.0
- Docker & Docker Compose: For database and orchestration testing.
- k6: Required for running performance benchmarks.

## How to Use This Boilerplate

The expectation of this repository is to act as a robust, production-ready foundation for your new TypeScript projects. It provides a standardized folder structure, linting configurations, and automated workflows out of the box. By starting here, you bypass the tedious setup phase and can focus immediately on writing your application's business logic.

To scaffold a new project using this boilerplate, open your terminal and run the following commands. **Be sure to replace `my-new-app` with your actual project name!**

```bash
# Clone the boilerplate into a new directory
git clone https://github.com/quang-pham-codeleap/boilerplate-typescript.git my-new-app

# Navigate into your new project
cd my-new-app

# Nuke the boilerplate's Git history to start with a clean slate
rm -rf .git

# Rename all references to the boilerplate across the entire codebase
# (This safely updates package.json, this README, and any internal comments)
npx replace-in-file /boilerplate-typescript/g "my-new-app" "**/*" --ignore=".git/**"

# Initialize your own fresh Git repository
git init
git add .
git commit -m "chore: initial commit from boilerplate"

# Install your dependencies
yarn install
```

### Next Steps

Once your local project is set up, you will want to connect it to your own remote repository.

1. Create a new, empty repository on GitHub/GitLab.
2. Link your local codebase to the new remote and push your initial commit:

```bash
git remote add origin https://github.com/your-username/my-new-app.git
git branch -M main
git push -u origin main
```

3. Start Scaffolding: Check the Scaffolding section below to learn how to automatically generate your modules, services, and controllers using the built-in CLI tools (e.g., yarn scaffold:backend).

## Quick Start

After cloning the repository, and set everything up. It is recommended that you try and run the application.

The easiest way to get started is using our Docker-orchestrated environment:

1. Setup Environment:

```bash
cp .env.example .env
```

2. Launch Infrastructure (DB only):

```bash
docker compose up -d db
```

3. Setup the Env Credential

You should open the `.env` file, most of the value already have valid fallback value, but you'd have to fill in the Database's Credential.

```bash
code .env
```

4. Launch the Application

You can also start the entire application by just one command:

```bash
docker compose up --build
```

Or you can launch the application with hot module reload (recommended for local development):

```bash
yarn install
yarn dev
```

5. Verify that everything is working

Once your development servers are running, you can verify the setup by visiting the following local URLs:

- Frontend: Open http://localhost:3001/hello-world
- Backend API: Visit http://localhost:3000/api/hello-worlds
- API Documentation: Check out the interactive Swagger UI at http://localhost:3000/api/docs

## Scaffolding

This project includes automated scaffolding tools to speed up development and ensure consistency.

### Frontend Module

To create a new frontend module with its directory structure, boilerplate page, and TanStack route:

```bash
yarn scaffold:frontend "module name"
# OR
yarn scaffold:frontend module name
```

Note: We recommend using whitespace to separate words in the module name, as the script will convert it to PascalCase for component naming and kebab-case for folder naming.

This will:

1. Create a module folder in `packages/frontend/src/modules/module-name`.
2. Generate sub-directories: `api`, `cache`, `components`, `hooks`, `pages`, `store`, `test`, `utils`. For details on each directory's purpose, refer to the [Frontend Architecture](./packages/frontend/README.md#project-structure) section in the frontend README.
3. Create a boilerplate `ModuleNamePage.tsx` in the `pages` directory.
4. Export the page from the module's `index.ts`.
5. Create a TanStack route file in `packages/frontend/src/routes/module-name.tsx`.

### Backend Module

To create a new backend module with its NestJS structure and automated registration:

```bash
yarn scaffold:backend "module name"
# OR
yarn scaffold:backend module name
```

This will:

1. Create a module folder in `packages/backend/src/modules/module-name`.
2. Generate sub-directories: `dto`, `entites`. For details on each directory's purpose, refer to the [Backend Architecture](./packages/backend/README.md#project-structure) section in the backend README.
3. Create a boilerplate Entity (`ModuleNameEntity`) inheriting from `BaseEntity`.
4. Create a TypeORM Repository (`ModuleNameRepository`).
5. Create a Service (`ModuleNameService`) with the repository injected.
6. Create a Controller (`ModuleNameController`) with Swagger documentation (`@ApiTags`).
7. Create a NestJS Module (`ModuleNameModule`) wiring everything together.
8. Automatically register the new module in `packages/backend/src/app.module.ts`.

## Documentation Map

This repository serves as a comprehensive reference for architecting and scaling TypeScript applications. Use the map below to navigate the core pillars of the project:

| Resource            | Description                                           | Location                                                                |
| ------------------- | ----------------------------------------------------- | ----------------------------------------------------------------------- |
| **Backend API**     | NestJS architecture, controllers, and services.       | [`/packages/backend/README.md`](./packages/backend/README.md)           |
| **Frontend UI**     | React components, state management, and styling.      | [`/packages/frontend/README.md`](./packages/frontend/README.md)         |
| **Shared Types**    | Common TypeScript interfaces, types, and DTOs.        | [`/packages/shared/types/README.md`](./packages/shared/types/README.md) |
| **Automation & CI** | Workflow triggers, Docker verification, and PR checks | [`/docs/workflow-guide.md`](./docs/workflow-guide.md)                   |
| **Standards**       | Linting, Formatting, and Commit conventions.          | [`/docs/standards.md`](./docs/standards.md)                             |
| **Database**        | Migrations, seeding, and schema management.           | [`/docs/database.md`](./docs/database.md)                               |
| **Testing**         | Unit and Integration testing guidelines.              | [`/docs/testing.md`](./docs/testing.md)                                 |
| **Performance**     | Load testing, k6 benchmarks, and latency KPIs.        | [`/scripts/benchmarks/README.md`](./scripts/benchmarks/README.md)       |

## Contributing

To contribute to this boilerplate project, please visit our [Contributing Guide](./CONTRIBUTING.md) for detailed instructions on how to set up your development environment, our branching strategy, commit message conventions, coding standards, pull request process, and testing guidelines.
