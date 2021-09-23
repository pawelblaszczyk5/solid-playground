/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'solid-jest/preset/browser',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '<rootDir>/src/**/*.tsx'],
  coverageProvider: 'v8',
  moduleNameMapper: {
    '@shared/(.*)': '<rootDir>/src/shared/$1',
    '@home/(.*)': '<rootDir>/src/modules/home/$1',
    '@testA/(.*)': '<rootDir>/src/modules/testA/$1',
    '@testB/(.*)': '<rootDir>/src/modules/testB/$1',
  },
};
