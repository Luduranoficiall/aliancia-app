module.exports = {
  preset: 'jest-expo',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@expo|expo(nent)?|@expo/vector-icons|@unimodules|unimodules|sentry-expo|native-base)'
  ]
};
