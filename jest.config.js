/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
      babelConfig: {
        presets: ['babel-preset-solid', '@babel/preset-env'],
        plugins: ['@vanilla-extract/babel-plugin'],
      },
    },
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  collectCoverageFrom: ['src/**/*.ts', 'src/**/*.tsx'],
  moduleNameMapper: {
    'solid-js/web': '<rootDir>/node_modules/solid-js/web/dist/web.cjs',
    'solid-js': '<rootDir>/node_modules/solid-js/dist/solid.cjs',
    '@shared/(.*)': '<rootDir>/src/shared/$1',
    '@home/(.*)': '<rootDir>/src/modules/home/$1',
    '@testA/(.*)': '<rootDir>/src/modules/testA/$1',
    '@testB/(.*)': '<rootDir>/src/modules/testB/$1',
  },
};
