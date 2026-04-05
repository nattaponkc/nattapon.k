#!/bin/bash

# Portfolio Project - Complete Setup Guide

echo "================================================"
echo "Portfolio Project - Setup Guide"
echo "================================================"
echo ""

# Backend Setup
echo "Installing backend dependencies..."
cd backend
npm install
cp .env.example .env
echo "✓ Backend setup complete"
echo ""

# Frontend Setup
echo "Installing frontend dependencies..."
cd ../frontend
npm install
echo "✓ Frontend setup complete"
echo ""

echo "================================================"
echo "Setup Complete!"
echo "================================================"
echo ""
echo "To start the project:"
echo ""
echo "Terminal 1 - Start Backend API:"
echo "  cd backend"
echo "  npm run dev"
echo "  (Runs on http://localhost:5000)"
echo ""
echo "Terminal 2 - Start Frontend:"
echo "  cd frontend"
echo "  npm run dev"
echo "  (Runs on http://localhost:3000)"
echo ""
echo "Then open your browser to http://localhost:3000"
echo ""
