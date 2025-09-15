# Pulpo Con Inventory - Frontend

A modern React TypeScript application for inventory management, built with Create React App, TanStack Query, and Tailwind CSS.

## 🚀 Features

- **React 19** with TypeScript for type safety
- **TanStack Query** for efficient data fetching and caching
- **Tailwind CSS** for modern, responsive UI design
- **MSW (Mock Service Worker)** for API mocking in development and testing
- **Vitest** for comprehensive testing
- **Docker** support for containerization
- **Pods Architecture** for scalable code organization

## 🛠️ Tech Stack

- React 19.1.1
- TypeScript 4.9.5
- TanStack Query 5.87.4
- Tailwind CSS 3.4.17
- MSW 2.0.0
- Vitest 3.2.4
- React Testing Library 16.3.0

## 📦 Installation

### Prerequisites

- Node.js 18+
- npm or yarn
- Docker (optional)
- Backend API running on port 3002 (for full functionality)

### Local Development

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd inventory-frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3001](http://localhost:3001)

## 🐳 Docker Setup

### Frontend Only

**Development:**

```bash
docker-compose --profile dev up --build
```

**Production:**

```bash
docker-compose --profile prod up --build
```

### Environment Variables

Create a `.env` file with:

````env
# Frontend Configuration
HOST_PORT=3001
PORT=3001

### Access the Application

- **Frontend**: [http://localhost:3001](http://localhost:3001)

### Individual Docker Commands

**Build the production image:**

```bash
docker build -t inventory-frontend .
````

**Run the production container:**

```bash
docker run -p 3001:80 inventory-frontend
```

**Build the development image:**

```bash
docker build -f Dockerfile.dev -t inventory-frontend-dev .
```

**Run the development container:**

```bash
docker run -p 3001:3001 -v $(pwd):/app -v /app/node_modules inventory-frontend-dev
```

## 🧪 Testing

### Run Tests

```bash
# Run all tests
npm run test:vitest:run

# Run tests in watch mode
npm run test:vitest

# Run tests with UI
npm run test:vitest:ui

# Run tests with coverage
npm run test:vitest:coverage

# Run traditional Jest tests
npm test
```

### Test Coverage

The project includes comprehensive test coverage:

- **Unit Tests**: Components, hooks, and utilities
- **Integration Tests**: Full component flows
- **MSW Integration**: API mocking for consistent testing

## 📁 Project Structure

```
src/
├── common/                 # Shared components and utilities
│   ├── components/        # Reusable UI components
│   └── constants/         # Application constants
├── infra/                 # Infrastructure layer
│   ├── product.repository.ts
│   └── product.dto.ts
├── pods/                  # Feature-based modules
│   └── product/          # Product management feature
│       ├── components/   # Product-specific components
│       ├── __tests__/    # Product tests
│       └── *.tsx         # Product containers and hooks
├── test/                 # Testing utilities
│   ├── mocks/           # MSW handlers and responses
│   └── utils.tsx        # Test utilities
└── App.tsx              # Main application component
```

## 🔧 Available Scripts

### Development

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run eject` - Eject from Create React App

### Testing

- `npm test` - Run Jest tests
- `npm run test:vitest` - Run Vitest tests
- `npm run test:vitest:ui` - Run Vitest with UI
- `npm run test:vitest:run` - Run Vitest once
- `npm run test:vitest:coverage` - Run tests with coverage

## 🌐 Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=http://localhost:3002
```

## 🚀 Deployment

### Production Build

1. **Build the application**

   ```bash
   npm run build
   ```

2. **Deploy the `build` folder** to your hosting service

### Docker Deployment

1. **Build the Docker image**

   ```bash
   docker build -t inventory-frontend .
   ```

2. **Deploy to your container orchestration platform**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Troubleshooting

### Common Issues

**Port already in use:**

```bash
# Kill process on port 3001
npx kill-port 3001
```

**Docker build fails:**

```bash
# Clean Docker cache
docker system prune -a
```

**Tests fail:**

```bash
# Clear npm cache
npm cache clean --force
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## 📚 Learn More

- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React Documentation](https://reactjs.org/)
- [TanStack Query Documentation](https://tanstack.com/query/latest)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MSW Documentation](https://mswjs.io/)
- [Vitest Documentation](https://vitest.dev/)
