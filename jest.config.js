module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(victory|@react-native|@react-navigation|react-native|react-native-linear-gradient|react-native-reanimated|react-native-size-matters|react-redux|@react-navigation/native|react-native-shimmer-placeholder))',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  coverageReporters: ['lcov', 'text'],
  coverageThreshold: {
    global: {
      // TODO: Increase thresholds as we increase coverage
      branches: 50,
      functions: 50,
      lines: 60,
      statements: 60,
    },
  },
};
