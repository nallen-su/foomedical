import { MantineProvider, MantineThemeOverride } from '@mantine/core';
import { MedplumClient } from '@medplum/core';
import { MedplumProvider } from '@medplum/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

const medplum = new MedplumClient({
  onUnauthenticated: () => (window.location.href = '/'),
});

const theme: MantineThemeOverride = {
  primaryColor: 'teal',
  primaryShade: 8,
  fontSizes: {
    xs: 11,
    sm: 14,
    md: 14,
    lg: 16,
    xl: 18,
  },
  components: {
    Container: {
      defaultProps: {
        size: 1200,
      },
    },
  },
};

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <BrowserRouter>
      <MedplumProvider medplum={medplum}>
        <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
          <App />
        </MantineProvider>
      </MedplumProvider>
    </BrowserRouter>
  </StrictMode>
);
