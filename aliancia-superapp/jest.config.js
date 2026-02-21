module.exports = {
  roots: ["<rootDir>/__tests__"],
  testMatch: ["**/?(*.)+(test).[jt]s?(x)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testEnvironment: "node"
};
