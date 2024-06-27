/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: "./",
  coverageDirectory: "<rootDir>/coverage",
  collectCoverageFrom: [
    "<rootDir>/src/**/*.ts",
    "<rootdir>/src/**/constant.ts"
  ],
  transformIgnorePatterns: ["<rootDir>/node_modules"],
  coverageReporters: ["json", "html"],
  testMatch: ["<rootDir>/src/**/*.spec.ts"]
};