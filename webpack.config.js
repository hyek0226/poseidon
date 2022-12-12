const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 개발 환경 모드로 설정
  mode: 'development',
  // 배포 전 작업용 JS 시작점
  entry: './src/index.tsx',
  // 배포용 번들링 파일 설정
  output: {
    filename: 'main.js', // 번들링된 최종 결과물이 담길 파일명
    path: path.resolve(__dirname, 'dist'), // dist 폴더를 배포용으로 사용
    clean: true,
    publicPath: '/',
  },
  //
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // 파일 확장자 명시
        exclude: '/node_modules/', // loader 를 제외할 대상
        loader: 'ts-loader', // 사용할 로더 지정
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          /* {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          }, */
        ],
      },
      {
        test: /\.jfif$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true, // html 코드 최적화
            },
          },
        ],
      },
    ],
  },
  // import 구문에서 확장자 생략 가능
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'), // 경로를 @로 설정
      'extensions': ['.ts', '.tsx', '.js', '.json'], // 확장자 순서대로 해석
    },
    extensions: ['.js', '.ts', '.tsx'], // 확장자 순서대로 해석
  },
  plugins: [
    // html 파일에 JS번들을 자동으로 묶어주는 플러그인
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  // webpack-dev-server 개발 서버 설정
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true, // 서버 실행시 브라우저 오픈
    historyApiFallback: true,
  },
};
