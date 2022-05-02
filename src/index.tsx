import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ThemeProvider} from "styled-components";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const theme = {
    colors: {
        black: "rgb(1,6,6)",
        green: "rgb(1, 191, 113)",
        white: "rgb(249,249,249)"
    }
}
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
  </React.StrictMode>
);