module.exports = {
  automock: false,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  moduleNameMapper: {
    '^context(.*)$': '<rootDir>/src/context/$1',
    '^pages(.*)$': '<rootDir>/src/pages/$1',
    '^state(.*)$': '<rootDir>/src/state/$1',
    '^ui(.*)$': '<rootDir>/src/ui/$1',
    '^views(.*)$': '<rootDir>/src/views/$1',
  },
  modulePathIgnorePatterns: ['<rootDir>/coverage/'],
  setupFiles: ['./jest.setup.js'],
  setupFilesAfterEnv: [
    '@testing-library/react/cleanup-after-each',
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  verbose: true,
};
