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
        mint: '#CEF9DC', // ミントグリーンのカスタムカラーを追加（背景色）
        brown: {
          700: '#8B4513', // 茶色のカスタムカラーを追加（N E N R I N）
        },
      },
    },
  },
  plugins: [],
};
export default config;
