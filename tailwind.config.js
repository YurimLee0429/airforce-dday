export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
       
        body: ["Noto Sans KR", "sans-serif"],
        handwriting: ["Dongle", "sans-serif"],   // ← 손글씨체 추가
         airforce: ["Dongle", "sans-serif"],   // ← D-day 폰트
          message: ["Gowun Dodum", "sans-serif"],  // 메시지용 (각 잡힌 느낌)
      },
    },
  },
  plugins: [],
};
