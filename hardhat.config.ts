import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";
import "dotenv/config";

const accounts = [process.env.DEV_WALLET_PRIVATE_KEY!];

const config: HardhatUserConfig = {
  solidity: {
    compilers: [{
      version: "0.8.28",
      settings: {
        viaIR: true,
        optimizer: {
          enabled: true,
        },
      },
    }],
  },
  networks: {
    kaia: {
      chainId: 8217,
      url: "https://public-en.node.kaia.io",
      accounts,
    },
  },
};

export default config;
