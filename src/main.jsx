import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { Provider as ReduxProvider } from 'react-redux'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './configureStore'
import { theme } from "./theme/index";
import App from "./components/App";
import meta from '../package.json';

console.log(process.env.NODE_ENV) // eslint-disable-line no-console
console.info(`${meta.name}@${meta.version}`); // eslint-disable-line no-console

const state = {};
const store = configureStore(state);
const persistor = persistStore(store)

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </StyledEngineProvider>
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>
);