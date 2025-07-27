export default {
  transform: {
    "^.+\\.js$": ["babel-jest", { presets: ["@babel/preset-env"] }]
  },
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.test.js", "**/?(*.)+(spec|test).js"],
  moduleFileExtensions: ["js", "json", "node"],
  collectCoverage: true,
  coverageDirectory: "coverage",
  verbose: true,
};
