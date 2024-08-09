import "../src/index.css";
/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    // docs: {
    //   toc: true, // 👈 Enables the table of contents
    // },
  },
};

export default preview;
