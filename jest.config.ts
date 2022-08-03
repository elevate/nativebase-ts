import { Config } from "@jest/types";

// By default, all files inside `node_modules` are not transformed. But some 3rd party
// modules are published as untranspiled, Jest will not understand the code in these modules.
// To overcome this, exclude these modules in the ignore pattern.
const untranspiledModulePatterns = [
  "(jest-)?react-native",
  "@react-native-community",
  "expo(nent)?",
  "@expo(nent)?/.*",
  "@react-native",
  "react-navigation",
  "@react-navigation/.*",
  "@unimodules/.*",
  "unimodules",
  "sentry-expo",
  "native-base",
  "react-native-svg",
];

// jest.config.js
// Sync object
const config: Config.InitialOptions = {
  testEnvironment: "node",
  preset: "jest-expo",
  globals: {
    "ts-jest": {
      tsconfig: 'tsconfig.spec.json',
    }
  },
  testMatch: [
    "**/?(*.)+(spec|test).ts?(x)"
  ],
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/coverage/**",
    "!**/node_modules/**",
    "!**/babel.config.js",
    "!**/jest.setup.js"
  ],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx", 
    'json', 
    'node'
  ],
  transformIgnorePatterns: [
    `node_modules/(?!${untranspiledModulePatterns.join("|")})`,
  ],
  coverageReporters: [
    "json-summary",
    "text",
    "lcov"
  ],
  setupFiles: [
    "<rootDir>/jest/setup.js",
    './node_modules/react-native-gesture-handler/jestSetup.js'
  ],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
};

export default config;