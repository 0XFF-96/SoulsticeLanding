# Soulstice

## Overview

Soulstice is a modern web application built with React and Express, featuring a wellness-focused landing page with waitlist functionality. The application uses a full-stack TypeScript architecture with Vite for frontend tooling, shadcn/ui for component design, and Drizzle ORM for database management. The project is structured as a monorepo with separate client and server directories, sharing type definitions and schemas through a shared folder.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, using Vite as the build tool and development server.

**Routing**: The application uses Wouter for client-side routing, providing a lightweight alternative to React Router. Routes are defined in `client/src/App.tsx` with a landing page as the main entry point and a 404 handler.

**UI Components**: The project leverages shadcn/ui (New York style variant) for a comprehensive component library built on Radix UI primitives. Components are fully typed and use Tailwind CSS with CSS variables for theming. The design system includes a custom "Soulstice" brand color palette defined in CSS variables alongside the default shadcn theme.

**State Management**: React Query (TanStack Query) is used for server state management with custom query functions defined in `client/src/lib/queryClient.ts`. The query client is configured to not refetch on window focus and treats data as never stale by default.

**Styling**: Tailwind CSS with custom configuration supporting both a default theme and Soulstice brand colors. The system uses CSS custom properties for dynamic theming and includes custom fonts from Google Fonts (DM Sans, Inter, Architects Daughter, Fira Code, Geist Mono).

**Animation**: Framer Motion is integrated for page transitions and component animations, particularly visible in the landing page components.

### Backend Architecture

**Framework**: Express.js running on Node.js with TypeScript in ESM mode.

**Server Structure**: The server follows a modular pattern with route registration separated from server initialization. Custom middleware logs API requests with timing information and captures JSON responses for debugging purposes.

**Development Setup**: Vite middleware integration in development mode provides HMR capabilities and serves the React application. The server handles both API routes (prefixed with `/api`) and static file serving in production.

**Storage Layer**: An abstraction interface (`IStorage`) is defined in `server/storage.ts` providing CRUD operations. Currently implements an in-memory storage solution (`MemStorage`) using JavaScript Maps, designed to be easily swapped for a persistent database implementation.

### Data Layer

**ORM**: Drizzle ORM configured for PostgreSQL with migrations stored in the `migrations` directory.

**Schema Definition**: Database schemas are defined in `shared/schema.ts` using Drizzle's table definitions and exported as Zod schemas for validation. Currently includes a users table with UUID primary keys, username, and password fields.

**Type Safety**: Drizzle-Zod integration provides type-safe insert schemas and inferred types shared between client and server through the `@shared` path alias.

**Database Provider**: Configured to use Neon Database's serverless driver (`@neondatabase/serverless`) for PostgreSQL connectivity.

### Build and Deployment

**Development**: TypeScript compilation checking without emitting files, while tsx handles runtime execution. Vite dev server with HMR for the frontend.

**Production Build**: Vite bundles the client-side application to `dist/public`, while esbuild bundles the Express server to `dist/index.js` as an ESM module with external packages.

**Path Aliases**: Comprehensive alias system (`@/`, `@shared/`, `@assets/`) configured consistently across TypeScript, Vite, and the application for clean imports.

### Design Patterns

**Separation of Concerns**: Clear separation between client, server, and shared code with distinct responsibilities and minimal coupling.

**Dependency Injection**: Storage interface allows for easy swapping of persistence implementations without changing business logic.

**Type-First Development**: Shared type definitions ensure consistency between frontend forms, API contracts, and database operations.

**Component Composition**: React components follow a composition pattern with reusable UI primitives from shadcn/ui extended with custom application-specific components.

## External Dependencies

### Database
- **PostgreSQL**: Primary database (configured via `DATABASE_URL` environment variable)
- **Neon Database Serverless**: Serverless PostgreSQL driver for edge/serverless deployments
- **Drizzle ORM**: Type-safe database toolkit and query builder
- **Drizzle Kit**: CLI for schema migrations and database management

### UI Framework
- **Radix UI**: Comprehensive set of unstyled, accessible UI primitives (accordion, dialog, dropdown, select, toast, tooltip, and 20+ other components)
- **shadcn/ui**: Pre-styled component system built on Radix UI with Tailwind CSS
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Variant-based component styling
- **Framer Motion**: Animation library for React
- **Embla Carousel**: Carousel/slider component
- **cmdk**: Command menu component
- **Lucide React**: Icon library

### State Management
- **TanStack React Query**: Server state management and data fetching
- **React Hook Form**: Form state management
- **Zod**: Schema validation and type inference

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Static type checking
- **tsx**: TypeScript execution for Node.js
- **esbuild**: JavaScript bundler for production builds
- **PostCSS**: CSS transformation with Autoprefixer
- **Replit Plugins**: Development tooling for Replit environment (cartographer, dev banner, runtime error modal)

### Utilities
- **date-fns**: Date manipulation library
- **clsx/tailwind-merge**: Conditional CSS class name utilities
- **nanoid**: Unique ID generator
- **wouter**: Lightweight routing library

### Session Management
- **connect-pg-simple**: PostgreSQL session store for Express (prepared for session-based authentication)