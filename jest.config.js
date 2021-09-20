module.exports = {
  preset: "solid-jest/preset/browser",
  moduleNameMapper: {
    "@shared/(.*)": "<rootDir>/src/shared/$1",
  },
};
