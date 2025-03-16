# AI Agent Workflow Architect

A React-based application for creating and managing AI agent workflows, built with TypeScript, Material UI, and Redux Toolkit.

## Features
- Modern React architecture with TypeScript
- Material UI components with custom theme
- Redux Toolkit for state management
- React Router for navigation
- Vite build tool for fast development

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## GitHub Connection

1. Initialize Git repository (if not already done):
   ```bash
   git init
   ```

2. Add your GitHub repository as remote:
   ```bash
   git remote add origin https://github.com/username/ai_agent_workflow_architect.git
   ```

3. Stage and commit your changes (if git add . hangs, try these alternatives):
   ```bash
   # Option 1: Add files in smaller batches
   git add src/
   git add package.json package-lock.json
   git add README.md
   
   # Option 2: Add with status checking
   git add -v .
   
   # Once files are staged, commit them
   git commit -m "Initial commit"
   ```

4. Push to GitHub:
   ```bash
   git push -u origin main
   ```

Note: If you experience issues with git commands, try running `git status` first to check the repository state.

## Available Scripts

- `npm run dev`: Starts the development server
- `npm run build`: Builds the project for production
- `npm run preview`: Previews the production build
- `npm run lint`: Runs ESLint for code quality checks

## Project Structure

```
src/
├── app/            # Redux store configuration
├── components/     # Reusable UI components
├── features/       # Redux slices and related logic
├── pages/          # Application pages
├── theme/          # Material UI theme configuration
├── App.tsx         # Main application component
├── index.tsx       # Application entry point
└── index.css       # Global styles
```

## Technology Stack

- React 18
- TypeScript
- Material UI
- Redux Toolkit
- React Router
- Vite

## Contributing

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Push to the branch
5. Create a pull request

## License

MIT License