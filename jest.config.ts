
/* Javascript conf */
// const { createDefaultPreset } = require("ts-jest");
// const tsJestTransformCfg = createDefaultPreset().transform;

// module.exports = {
//   testEnvironment: "node",
//   transform: {
//     ...tsJestTransformCfg,
//   },
//  preset: 'jest-playwright-preset',
//   verbose: true,
//   testTimeout: 20000,
//   setupFilesAfterEnv: ["expect-playwright"],
//   testEnvironmentOptions: {
//     "jest-playwright": {
//       browsers: ["firefox"],
//       launchOptions: {
//         headless: true,
//       }
//     }
//   }
// }

/* Typescript conf */
import type { Config } from 'jest';

const config: Config = {
  preset: 'jest-playwright-preset',
  //testMatch: ["**/__tests__/**/*.(ts|js)", "**/?(*.)+(spec|test).+(ts|js)"],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  verbose: true,
  testTimeout: 20000,
  //setupFilesAfterEnv: ["expect-playwright"],
  testEnvironmentOptions: {
    "jest-playwright": {
      browsers: ["firefox"],
      launchOptions: {
        headless: true,
      },
    }
  }
}

export default config


/* Javascript conf */
// const { createDefaultPreset } = require("ts-jest");

// const tsJestTransformCfg = createDefaultPreset().transform;

// /** @type {import("jest").Config} **/
// module.exports = {
//   testEnvironment: "node",
//   transform: {
//     ...tsJestTransformCfg,
//   },
// };


