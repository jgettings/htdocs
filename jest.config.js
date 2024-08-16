export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    // process `*.tsx` files with `ts-jest`
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: './tsconfig.app.json',
      },
    ],
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__ mocks __/fileMock.js',
  },
  moduleDirectories: ['node_modules', '<rootDir>'],
  setupFilesAfterEnv: ['./src/jest-setup.ts'],
  injectGlobals: false,
  reporters: [
    [
      "jest-nyancat-reporter",
      {
        "suppressErrorReporter": false
      }
    ]
  ]
};
