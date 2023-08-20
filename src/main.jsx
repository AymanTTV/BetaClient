// Import necessary modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Search from '../src/Components/Search.jsx'; // Import your Search component
import HouseContextProvider from '../src/Components/HouseContext.jsx'; // Import your HouseContextProvider component
import './index.css';

// Render your application within the HouseContextProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HouseContextProvider>
      <App>
        <Search /> {/* Use the Search component here */}
        {/* Other components */}
      </App>
    </HouseContextProvider>
  </React.StrictMode>
);
