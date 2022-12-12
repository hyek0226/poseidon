module.exports = {
  // root 명시를 통해 eslint는 더이상 상위폴더를 찾지 않음
  root: true,
  env: {
    browser: true, // 브라우저환경에서 lint 돌리기 위해 추가
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    // eslint formatting rules 제거
    'prettier',
    'prettier/prettier',
    'plugin:prettier/recommended',
  ],
  // eslint 구문 분석을 위한 파서 명시
  parser: '@typescript-eslint/parser',
  // 타입 명시가 필요한 규칙의 경우 아래 설정 필요
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  // 사용할 플러그인 (extends 또는 rules 로 설정해야함)
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  // 세부 규칙 설정 (off/warn/error)
  rules: {
    'import/no-unresolved': 'off',
    // 변수 선언전 사용 금지
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    // 함수형 컴포넌트 사용 허용
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    // jsx문법을 사용할 수 있는 확장자
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    // import 시 확장자 명시에 대한 설정
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        // 확장자 명시 x
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    // 섀도잉 허용 안함 (전역변수, 지역변수 동일한 이름 공유x)
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
      },
    ],
    // 코드 최대 길이 제한
    'max-len': [
      'warn',
      {
        code: 80,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': 'error', // 사용하지 않는 변수를 에러처리
    'no-console': 'off', // 콘솔로그 사용
    'semi': [1, 'always'],
  },
  // lint 를 하지않을 파일 설정
  ignorePatterns: ['.eslintrc.js', 'node_modules/'],
  // 추가 규칙 설정
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
