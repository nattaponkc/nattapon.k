# Portfolio Project - TypeScript + React + Next.js + Express

A modern portfolio website built with the latest JavaScript/TypeScript technologies.

## 🎯 Project Overview

This portfolio project has been migrated from PHP to a modern tech stack:

- **Frontend**: Next.js + React + TypeScript
- **Backend**: Express + Node.js + TypeScript  
- **Database**: Ready for MongoDB/MySQL integration
- **Styling**: CSS Modules + Responsive Design

## 📁 Project Structure

```
nattapon.k/
├── frontend/                 # Next.js React frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/           # Next.js pages
│   │   ├── styles/          # CSS modules
│   │   └── types/           # TypeScript types
│   ├── package.json
│   └── tsconfig.json
│
├── backend/                  # Express API server
│   ├── src/
│   │   ├── routes/          # API routes
│   │   ├── controllers/      # Business logic
│   │   └── index.ts         # Entry point
│   ├── package.json
│   └── tsconfig.json
│
├── Certification/           # Certificate images
├── images/                  # Portfolio images
└── README.md
```

## 🚀 Quick Start

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
npm run dev
# API runs on http://localhost:5000
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
# Site runs on http://localhost:3000
```

## 🛠️ Available Scripts

### Frontend

```bash
npm run dev      # Development server
npm run build    # Build for production
npm start        # Run production build
npm run lint     # Run linter
```

### Backend

```bash
npm run dev      # Development server with hot reload
npm run build    # Compile TypeScript
npm start        # Run compiled JavaScript
npm run lint     # Run linter
```

## 📋 Features

✅ **Modern Stack**: TypeScript, React, Next.js, Express
✅ **Responsive Design**: Mobile-first approach
✅ **Component-based**: Reusable React components
✅ **Type Safety**: Full TypeScript support
✅ **API Integration**: Contact form with backend
✅ **Performance**: Optimized Next.js with SSR
✅ **SEO Ready**: Next.js metadata and optimization
✅ **CORS Enabled**: Frontend-backend communication

## 📝 Content Sections

1. **Home/Hero**: Welcome section
2. **About**: Personal bio and skills
3. **Portfolio**: Project showcases
4. **Certifications**: Achievement badges
5. **Contact**: Contact form and info
6. **Footer**: Social links

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| POST | `/api/contact` | Submit contact form |

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)  
- Safari (latest)
- Edge (latest)

## 📱 Responsive Design

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🔐 Environment Variables

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### Backend (.env)
```env
PORT=5000
FRONTEND_URL=http://localhost:3000
```

## 📚 Technologies Used

### Frontend
- Next.js 14
- React 18
- TypeScript 5
- CSS Modules
- Axios

### Backend
- Express.js
- Node.js
- TypeScript 5
- Cors
- Body-parser
- Nodemailer

## 🚢 Deployment

### Frontend (Vercel Recommended)
```bash
cd frontend
npm run build
# Deploy to Vercel
```

### Backend (Heroku/Railway)
```bash
cd backend
npm run build
# Deploy backend service
```

## 📧 Contact Form Setup

To enable email notifications:

1. Configure email service in `backend/.env`
2. Update email settings in `backend/src/controllers/contactController.ts`
3. Restart backend

## 🛣️ Future Enhancements

- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] User authentication
- [ ] Blog section
- [ ] Project filtering
- [ ] Dark mode toggle
- [ ] Multi-language support

## 📄 License

This project is personal portfolio. Feel free to use it as a template.

## 👤 Author

**ณัฐพล ฆ้องคำ** (Nattapon)
- Email: nattapon.kongcoome@gmail.com
- GitHub: nattaponkc
- Phone: 082-263-8974

---

**Migration Notes**:
- Successfully converted from PHP to TypeScript/React
- Maintained all original content and styling
- Improved with modern development practices
- Ready for backend database integration
