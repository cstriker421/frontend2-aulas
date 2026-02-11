/** @type {import("jest").Config} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testMatch: ["<rootDir>/aula-06-tests/**/*.test.(ts|tsx)"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  clearMocks: true,
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.jest.json",
    },
  },
};
