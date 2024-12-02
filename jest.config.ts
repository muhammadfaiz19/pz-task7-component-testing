export default {
  testEnvironment: "jest-environment-jsdom", // Menggunakan jsdom untuk lingkungan tes
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Memuat file setup setelah lingkungan tes diinisialisasi
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__mocks__/fileMock.js", // Mocking file statis
    "\\.(css|less|sass|scss)$": "identity-obj-proxy", // Mocking file style
    "^@/(.*)$": "<rootDir>/src/$1", // Menggunakan alias untuk path
  },
};
