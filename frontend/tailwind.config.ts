import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mint: '#ecf7f2', // ミントグリーンのカスタムカラーを追加（背景色）
        brown: {
          700: '#8B4513', // 茶色のカスタムカラーを追加（N E N R I N）
        },
        customGreen: '#3c6566', // カスタムグリーンカラーを追加（Footer背景色）
      },
    },
  },
  plugins: [],
};
export default config;
