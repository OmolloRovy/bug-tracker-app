export default {
  transform: {
    "^.+\\.js$": ["babel-jest", { presets: ["@babel/preset-env"] }]
  },
  testEnvironment: "node",
  setupFilesAfterEnv: ['<rootDir>/test/setup.js'],
  testMatch: ["<rootDir>/test/**/*.test.js"],
  moduleFileExtensions: ["js", "json", "node"],
  collectCoverage: true,
  collectCoverageFrom: [
    'controllers/**/*.js',
    'routes/**/*.js',
    'middleware/**/*.js',
    '!/node_modules/**'
  ]
  coverageDirectory: "coverage",
  verbose: true,
};
