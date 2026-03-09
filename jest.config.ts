export default{
    preset:'ts-jest',
    testEnviroment: 'node',
    testMatch: ['**/*.spec.ts'],
    clearMocks: true,
    restoreMocks: true,
    collectCoverageFrom: ['src/**/*.ts'],
    coverageDirectory:'covarage',
}