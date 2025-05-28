const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // 또는 'production' (개발 모드 또는 프로덕션 모드)
  entry: "./src/index.tsx", // 애플리케이션 진입점
  output: {
    path: path.resolve(__dirname, "dist"), // 빌드 결과물이 저장될 경로
    filename: "bundle.js", // 빌드된 JavaScript 파일 이름
    publicPath: "/", // 개발 서버 및 HTML 파일 내 리소스 경로 기준
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/, // .ts, .tsx .js .jsx 확장자를 가진 파일
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          // options: { presets: [...] } // Babel 설정을 여기에 직접 넣거나 .babelrc/babel.config.js 사용
        },
      },
      {
        test: /\.css$/, // .css 확장자를 가진 파일 (CSS 로더를 설치한 경우)
        use: ["style-loader", "css-loader", "postcss-loader"], // style-loader와 css-loader를 사용
      },
      // 이미지나 폰트 같은 다른 파일 타입에 대한 로더 추가 가능
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //   type: 'asset/resource',
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // 사용할 HTML 템플릿 파일
      filename: "index.html", // 빌드 후 생성될 HTML 파일 이름
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // 정적 파일을 제공할 경로
    },
    compress: true, // 압축 사용 여부
    port: 3000, // 개발 서버 포트 번호
    hot: true, // Hot Module Replacement (HMR) 활성화
    open: true, // 서버 시작 시 브라우저 자동 실행
    historyApiFallback: true, // SPA를 위한 설정 (라우팅 시 404 대신 index.html 반환)
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"], // import 시 확장자 생략 가능하도록 설정
  },
};
