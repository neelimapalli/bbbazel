export default {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.svg$': 'jest-transform-stub',
      '^.+\\.css$': 'jest-transform-stub',
    },
};