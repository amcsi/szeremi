import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import App from './components/pages/_App';
import Page from './components/pages/_Page';
import configureStore from './core/configureStore';
import getInitialLanguage from './core/getInitialLanguage';
import HomePage from './components/pages/index';
import About from './components/pages/about';
import Cv from './components/pages/cv';
import NotFoundPage from './components/pages/404';

const store = configureStore({
  currentLanguage: getInitialLanguage(),
});

const rootEl = document.getElementById('root');
const root = createRoot(rootEl);

root.render(
  <StrictMode>
    <HelmetProvider>
      <App store={store}>
        <BrowserRouter>
          <Page>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/cv" element={<Cv />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Page>
        </BrowserRouter>
      </App>
    </HelmetProvider>
  </StrictMode>,
);
