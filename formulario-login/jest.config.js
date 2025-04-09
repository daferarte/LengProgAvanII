export default {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    transform:{
        '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper:{
        '\\.(css|less|scss)$': 'identity-obj-proxy',
    },
};