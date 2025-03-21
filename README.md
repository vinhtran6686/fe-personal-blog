# Personal Blog Website

This is a personal blog website project based on the requirements in the PRD and SRS documents. The project consists of a Next.js frontend and a NestJS backend.

## Project Structure

- `frontend/` - Next.js frontend application
- `backend/` - NestJS backend application

## Setup Instructions

### Prerequisites

- Node.js (v18+)
- npm
- Docker and Docker Compose for local development

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. The frontend will be available at: http://localhost:3000

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the MongoDB and Redis containers:
   ```
   docker-compose up -d
   ```

4. Start the development server:
   ```
   npm run start:dev
   ```

5. The backend API will be available at: http://localhost:3001/api/v1

## Development Guidelines

- Follow the TypeScript best practices
- Use ESLint and Prettier for code formatting
- Implement features based on the task breakdown in the task.md document
- Apply the design patterns and coding standards specified in the SRS and technical specification documents 