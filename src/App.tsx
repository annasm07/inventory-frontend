import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProductContainer } from "./pods/product/product.container";
import { ErrorBoundary } from "./core/error/error-boundary";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen bg-gray-50">
          <header className="bg-white shadow-sm border-b">
            <div className="container mx-auto px-4 py-6">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2 tracking-wide">
                  Pulpo Con Inventory
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-4 rounded-full"></div>
                <p className="text-lg md:text-xl text-gray-600 font-light tracking-wide">
                  Inventory Management System
                </p>
              </div>
            </div>
          </header>
          <main>
            <ProductContainer />
          </main>
        </div>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
