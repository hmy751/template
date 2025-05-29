import type { Preview } from '@storybook/react-webpack5'

import "../src/styles/globals.css";
// import "../src/styles/tailwindcss.globals.css";


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;