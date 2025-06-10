import type { Preview } from '@storybook/react-webpack5';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import '../src/styles/globals.css';
// import "../src/styles/tailwindcss.globals.css";

const queryClient = new QueryClient();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    Story => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
};

export default preview;
