# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- Build: `pnpm build` or `turbo run build`
- Dev: `pnpm dev` or `dotenv -- turbo run dev`
- Lint: `pnpm lint` or `turbo run lint`
- Format: `pnpm format` or `biome format --write "**/*.{ts,tsx,md}"`
- Test (www): `cd apps/www && pnpm test`
- Test single file: `cd apps/www && pnpm test path/to/test.ts`
- TypeCheck (www2): `cd apps/www2 && pnpm typecheck`

## Project Architecture

This is a monorepo managed by Turborepo and pnpm workspaces containing:

- **apps/www**: Next.js 14 app with App Router - main personal website
- **apps/www2**: Remix app (appears to be secondary/experimental)
- **packages/**: Shared packages including UI components

### Content Management

The www app uses Contentlayer for content management with three main content types:
- **Notes**: Personal notes and thoughts (`content/notes/`)
- **Posts**: Blog posts (`content/posts/`)
- **Pages**: Static pages (`content/pages/`)

Content is written in MDX and processed with rehype-pretty-code for syntax highlighting.

### Key Technologies

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with Radix UI components
- **Content**: Contentlayer + MDX with GitHub Flavored Markdown
- **Language**: TypeScript with ReScript compilation
- **Authentication**: NextAuth.js
- **AI Integration**: OpenAI API and Langchain
- **Deployment**: Vercel with Cloudflare Pages support

## Code Style Guidelines

- **Formatting**: Biome for formatting with semicolons "as needed"
- **Imports**: Organized by category following the order in prettier.config.js
- **React**: Use React 18+ features with functional components and hooks
- **TypeScript**: Strict typing preferred
- **Naming**: PascalCase for components, camelCase for variables/functions
- **Styles**: Tailwind CSS for styling
- **Error Handling**: Prefer try/catch blocks with appropriate error logging