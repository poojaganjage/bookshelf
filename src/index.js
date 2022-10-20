import React from 'react';
import ReactDOM from 'react-dom/client';
import ThemeContextProvider from './Context/ThemeContext';
import ContentContextProvider from './Context/ContentContext';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ContentContextProvider>
        <App />
      </ContentContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
