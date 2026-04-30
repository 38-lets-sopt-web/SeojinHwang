import { StrictMode } from 'react'
import { Global, ThemeProvider } from '@emotion/react';
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import theme from './styles/theme.js';
import GlobalStyle from './styles/global.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <App />
    </ThemeProvider>
  </StrictMode>
)
