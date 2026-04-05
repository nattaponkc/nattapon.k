# Portfolio Backend - Express + TypeScript + Node.js

This is the backend API for the portfolio web application built with Express and TypeScript.

## Tech Stack

- **Node.js**: JavaScript runtime
- **Express**: Web framework
- **TypeScript**: Type-safe JavaScript
- **Cors**: Cross-origin resource sharing
- **Nodemailer**: Email handling (optional)

## Project Structure

```
backend/
├── src/
│   ├── routes/          # API routes
│   ├── controllers/      # Route controllers
│   ├── index.ts         # Entry point
├── dist/                # Compiled JavaScript
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript configuration
└── .env.example         # Environment variables template
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn installed
- Frontend running on `http://localhost:3000` (for CORS)

### Installation

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file from `.env.example`:
   ```bash
   cp .env.example .env
   ```

### Development

Run the development server with live reload:

```bash
npm run dev
```

The API will be available at `http://localhost:5000`

### Build

Build TypeScript to JavaScript:

```bash
npm run build
npm start
```

## API Endpoints

### Health Check
- **GET** `/api/health`
  - Response: `{ "status": "Backend is running" }`

### Contact Form
- **POST** `/api/contact`
  - Request body:
    ```json
    {
      "name": "string",
      "email": "string",
      "subject": "string",
      "message": "string"
    }
    ```
  - Response:
    ```json
    {
      "success": true,
      "message": "Contact message received successfully"
    }
    ```

## Environment Variables

Configure `.env`:

```env
PORT=5000
FRONTEND_URL=http://localhost:3000

# Optional: Email Configuration
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
ADMIN_EMAIL=nattapon.kongcoome@gmail.com
```

## Features

- ✅ Express server with TypeScript
- ✅ CORS enabled for frontend communication
- ✅ Contact form handling
- ✅ Email integration ready (with Nodemailer)
- ✅ Request validation
- ✅ Error handling

## Email Setup (Optional)

To enable email notifications:

1. Configure your email service in `.env`
2. Uncomment the email sending code in `contactController.ts`
3. Restart the server

## Deployment

For production deployment:

1. Build: `npm run build`
2. Run: `npm start`
3. Use a process manager like PM2:
   ```bash
   pm2 start dist/index.js --name "portfolio-api"
   ```

## CORS Configuration

The backend accepts requests from:
- Default: `http://localhost:3000`
- Or the URL specified in `FRONTEND_URL` environment variable
