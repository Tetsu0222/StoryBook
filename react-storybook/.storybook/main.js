/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["..\\public"],
};
export default config;

//storiesは、記述したパス配列で、ファイルが自動的に検知されるようになっている。

//addonsはStoryBookの機能の拡張が記述されている。
//機能を拡張したい場合は、その内容を追記する。
//必要のない機能は、その記述を削除すれば廃止できる。