import {
  createGlobalTheme,
  globalFontFace,
  globalStyle,
} from "@vanilla-extract/css";

/* 프리텐다드 웹 폰트 */
const FONT_CDN = "https://cdn.jsdelivr.net/gh/projectnoonnu/pretendard@1.0";

const fontFiles = [
  ["Thin", 100],
  ["ExtraLight", 200],
  ["Light", 300],
  ["Regular", 400],
  ["Medium", 500],
  ["SemiBold", 600],
  ["Bold", 700],
  ["ExtraBold", 800],
  ["Black", 900],
];

fontFiles.forEach(([name, weight]) => {
  globalFontFace("Pretendard", {
    src: `url("${FONT_CDN}/Pretendard-${name}.woff2") format("woff2")`,
    fontWeight: weight,
    fontDisplay: "swap",
  });
});

/* 색상 변수 */
export const vars = createGlobalTheme(":root", {
  color: {
    /* Primary color */
    primary: {
      100: "#3692ff",
      200: "#1967d6",
      300: "#1251aa",
    },
    /* Error color */
    error: "#f74747",
    /* Secondary color */
    gray: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
    },
    /* 디자인 가이드에 없어서, 개발자가 직접 정리해둔 부분 */
    white: "#ffffff",
    snow: "#fcfcfc",
    lightGray: "#dfdfdf",
    skyblue: "#cfe5ff",
    lightblue: "#e6f2ff",
  },
});

/* 전역 폰트 */
globalStyle("body", {
  fontFamily: '"Pretendard", sans-serif',
});
