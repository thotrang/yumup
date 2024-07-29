export const content = [
  "./src/app/**/*.{js,ts,jsx,tsx}",
  "./src/components/**/*.{js,ts,jsx,tsx}",
  "./src/modules/**/*.{js,ts,jsx,tsx}",
];
export const darkMode = ["class", '[data-mode="dark"]'];
export const theme = {
  extend: {
    animation: {
      "infinite-scroll": "infinite-scroll 60s linear infinite",
      "stop-scroll": "infinite-scroll 0s linear infinite",
    },
    keyframes: {
      "infinite-scroll": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-100%)" },
      },
    },
    colors: {
      primary: '#FF7968',
      'white': '#FFFFFF',

      't-primary': '#EC273A',
      't-secondary': '#F9A51A',
      "t-color": '#333333',
      "t-shadow": "#7A7C8D",

      "b_primary": '#EC273A',
    },
    borderWidth: {
      12: "12px",
    },
    maxWidth: {
      "screen-s": "400px",
      "screen-l": "1280px",
      "screen-xl": "1440px",
      "screen-2xl": "1596px",
      "screen-3xl": "1920px",
    },
    fontSize: {
      xs: ["12px", "12px"],
      m: ["16px", "16px"],
      xm: ["20px", "20px"],
      l: ["24px", "24px"],
      xl: ["32px", "32px"],
      'xl-2': ["36px", "36px"],
      "2xl": ["40px", "40px"],
      "3xl": ["44px", "44px"],
      "3xl-2": ["48px", "48px"],
      '4xl': ["56px", "56px"],
      '5xl': ["64px", "64px"],
      max: ['86px', '86px'],
      'max-2': ['148px', '148px'],
      'max-3': ["256px", "256px"],
    },
    gridAutoRows: {
      "banner-s": "224px",
      "banner-m": "424px",
      "banner-l": "512px",
    },
    spacing: {
      base10: "10px",
      base20: "20px",
      base25: "25px",
      base30: "30px",
      base40: "40px",
      base50: "50px",
      base60: "60px",
      base70: "70px",
      base80: "80px",
      base90: "90px",
      base100: "100px",
      base106: '106px',
      base110: "110px",
      base120: "120px",
      base150: "150px",
    },
    gridTemplateColumns: {
      "18": "repeat(18, minmax(0, 1fr));",
    },
    boxShadow: {
      action: "inset 0px 0px 12px -4px #FFFFFF",
    },
    screens: {
      "3xl": "1920px",
      "4xl": "2560px",
    }
  },
};

export const corePlugins = {
  preflight: false,
};
export const plugins = [require("daisyui")];
