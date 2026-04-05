# Portfolio Frontend - Next.js + React + TypeScript

This is the frontend part of the portfolio web application built with modern JavaScript technologies.

## Tech Stack

- **Next.js 14**: Full-stack React framework with SSR
- **React 18**: UI library
- **TypeScript**: Type-safe JavaScript
- **CSS Modules**: Scoped styling
- **Axios**: HTTP client for API calls

## Project Structure

```
frontend/
├── src/
│   ├── components/       # React components
│   ├── pages/           # Next.js pages
│   ├── styles/          # CSS Modules
│   └── types/           # TypeScript types
├── public/              # Static assets
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript configuration
└── next.config.js       # Next.js configuration
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn installed
- Backend API running on `http://localhost:5000`

### Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Build

Build for production:

```bash
npm run build
npm start
```

## Components

- **Header**: Navigation menu with smooth scrolling
- **Hero**: Welcome section with CTA buttons
- **About**: Personal information and skills showcase
- **Portfolio**: Project showcases
- **Certification**: Certification cards
- **Contact**: Contact form and information
- **Footer**: Footer with social links

## Features

- ✅ Responsive design
- ✅ Smooth scrolling navigation
- ✅ Animated skill bars
- ✅ Contact form with backend integration
- ✅ TypeScript for type safety
- ✅ Modern CSS with CSS Modules
- ✅ SEO optimized with Next.js metadata

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## API Integration

Contact form sends data to the backend API:

```typescript
POST /api/contact
{
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "string"
}
```
