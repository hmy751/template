// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Tailwind가 스캔할 파일 경로
  ],
  // theme: {
  //   extend: {
  //     // 여기에 사용자 정의 색상, 크기 등을 추가합니다.
  //     // 예시들은 사용자님이 이전에 공유해주신 variables.css 내용을 기반으로 합니다.

  //     colors: {
  //       // variables.css의 --color-primary 등을 Tailwind 색상으로 정의
  //       "brand-primary": "#228b22", // var(--color-primary)에 해당
  //       "brand-secondary": "#f5f5dc", // var(--color-secondary)
  //       "brand-neutral": "#34495e", // var(--color-neutral)
  //       "brand-muted": "#94a3b8", // var(--color-muted)

  //       // 텍스트 색상
  //       "text-theme-primary": "#333333", // var(--color-text-primary)
  //       "text-theme-secondary": "#666666", // var(--color-text-secondary)
  //       "text-theme-disabled": "#999999", // var(--color-text-disabled)

  //       // 배경색
  //       "background-theme-base": "#fafafa", // var(--color-background-base)

  //       // 상태 색상
  //       "status-success": "#27ae60", // var(--color-success)
  //       "status-warning": "#f2c94c", // var(--color-warning)
  //       "status-error": "#eb5757", // var(--color-error)
  //       "status-info": "#2d9cdb", // var(--color-info)

  //       // 회색조 (Tailwind는 이미 gray 팔레트가 있지만, 커스텀으로 추가/덮어쓰기 가능)
  //       // 'custom-gray-50': '#f7fafc', // var(--color-gray-50)
  //       // 'custom-gray-100': '#edf2f7',
  //       // ...
  //     },

  //     spacing: {
  //       // variables.css의 --space- 숫자들을 Tailwind 간격 단위로 추가
  //       // Tailwind는 기본적으로 4가 1rem (16px)에 해당합니다.
  //       // 사용자님의 변수 이름 그대로 사용하거나, Tailwind의 숫자 스케일을 확장할 수 있습니다.
  //       "space-1": "0.25rem" /* 4px */,
  //       "space-2": "0.5rem" /* 8px */,
  //       "space-3": "0.75rem" /* 12px */,
  //       "space-4": "1rem" /* 16px - Tailwind의 기본 '4'와 동일 */,
  //       "space-5": "1.25rem" /* 20px */,
  //       "space-6": "1.5rem" /* 24px */,
  //       "space-8": "2rem" /* 32px - Tailwind의 기본 '8'과 동일 */,
  //       "space-10": "2.5rem" /* 40px - Tailwind의 기본 '10'과 동일 */,
  //       // 예: 'page-top': 'var(--layout-page-top-padding)' 대신 실제 값 사용
  //       "page-top-padding": "32px",
  //       "page-bottom-padding": "32px",
  //       "page-top-padding-mobile": "16px",
  //       "page-bottom-padding-mobile": "16px",
  //     },

  //     maxWidth: {
  //       // variables.css의 --layout-container-max
  //       "layout-container": "726px",
  //     },

  //     height: {
  //       // 또는 minHeight, maxHeight
  //       header: "64px",
  //       "header-mobile": "48px",
  //     },

  //     fontSize: {
  //       // variables.css의 --font- 크기들
  //       // 형식: 'key': ['fontSize', { lineHeight: '...', letterSpacing: '...' (선택사항) }]
  //       "sm-custom": "0.875rem", // var(--font-sm)
  //       "base-custom": "1rem", // var(--font-base)
  //       "lg-custom": "1.25rem", // var(--font-lg)
  //       "xl-custom": "1.5rem", // var(--font-xl)
  //       "2xl-custom": "2rem", // var(--font-2xl)
  //       "3xl-custom": "2.5rem", // var(--font-3xl)
  //     },

  //     fontWeight: {
  //       // variables.css의 --font-weight- 값들
  //       // Tailwind는 이미 light(300), normal(400), medium(500), bold(700) 등을 제공합니다.
  //       // 만약 다른 값을 사용하거나, 명시적으로 사용자님 변수명을 쓰고 싶다면 추가합니다.
  //       "custom-light": "300",
  //       "custom-normal": "400",
  //       "custom-medium": "500",
  //       "custom-bold": "700",
  //     },

  //     boxShadow: {
  //       // variables.css의 --shadow- 값들
  //       "custom-sm": "0 1px 3px rgba(0, 0, 0, 0.1)",
  //       "custom-md": "0 4px 6px rgba(0, 0, 0, 0.1)",
  //       "custom-lg": "0 10px 15px rgba(0, 0, 0, 0.1)",
  //       "hover-custom": "0 4px 6px rgba(0, 0, 0, 0.1)", // --hover-shadow 와 동일하게
  //     },

  //     borderRadius: {
  //       // variables.css의 --radius- 값들
  //       "custom-sm": "0.25rem",
  //       "custom-md": "0.5rem",
  //       "custom-lg": "1rem",
  //       // 'custom-full': '50%', // Tailwind의 'full'은 보통 '9999px'
  //     },

  //     zIndex: {
  //       // variables.css의 --z- 값들
  //       header: "100",
  //       dialog: "1000",
  //       toast: "9999",
  //       overlay: "900",
  //       dropdown: "900",
  //     },

  //     // 트랜지션이나 다른 효과들도 여기에 추가할 수 있습니다.
  //     // 예: var(--transition-base) -> all 0.3s ease;
  //     transitionProperty: {
  //       "custom-all": "all",
  //     },
  //     transitionDuration: {
  //       300: "300ms",
  //     },
  //     transitionTimingFunction: {
  //       "custom-ease": "ease",
  //     },
  //   },
  // },
  plugins: [],
};
