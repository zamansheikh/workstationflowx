import { ReactNode } from "react";

export const metadata = {
  title: "Jobs | WorkstationFlowX",
  description: "Apply for jobs at WorkstationFlowX",
};

interface JobLayoutProps {
  children: ReactNode;
}

export default function JobLayout({ children }: JobLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Public header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img 
                src="/logo-black.png" 
                alt="WorkstationFlowX" 
                className="h-8 w-auto mr-3"
              />
              <h1 className="text-xl font-semibold text-gray-900">WorkstationFlowX</h1>
            </div>
            <div className="text-sm text-gray-500">
              Powered by WorkstationFlowX
            </div>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main>
        {children}
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 WorkstationFlowX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
