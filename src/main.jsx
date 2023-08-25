// Import necessary modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Search from '../src/Components/Search.jsx';
import HouseContextProvider from '../src/Components/HouseContext.jsx';
import { QueryClient, QueryClientProvider } from 'react-query'; // Import QueryClient and QueryClientProvider
import './index.css';

// Create a new instance of QueryClient
const queryClient = new QueryClient();

// Render your application within the HouseContextProvider and QueryClientProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HouseContextProvider>
      
            {/* Include the PermanentDrawerLeft component here */}
            <App />
       
        {/* Other components */}
      </HouseContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
